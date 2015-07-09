-- name: create-user!
-- creates a new user record
INSERT INTO users
(first_name, last_name, email, user_role, is_active, pass)
VALUES
(:first_name, :last_name, :email, :user_role, :is_active, :pass)

-- name: update-user!
-- update an existing user record
UPDATE users
SET first_name = :first_name,
    last_name = :last_name,
    email = :email
WHERE id = :id

-- name: update-password!
-- update an existing user password
UPDATE users
SET pass = :pass
WHERE id = :id

-- name: update-role!
-- update an existing user role
UPDATE users
SET user_role = :user_role
WHERE id = :id

-- name: update-state!
-- update the is_active status
UPDATE users
SET is_active = :state
WHERE id = :id

-- name: update-last-login!
-- update the last login date for a user
UPDATE users
SET last_login = :last
WHERE email = :email

-- name: delete-user!
-- delete a user
DELETE FROM users
WHERE id = :id

-- name: get-user-by-id
-- retrieve a used given the id.
SELECT * FROM users
WHERE id = :id
ORDER BY id

-- name: get-user-by-email
-- retrieve a user given the email.
SELECT * FROM users
WHERE email = :email
ORDER BY id

-- name: get-all-users
-- retrieve a list of all users
SELECT id, first_name, last_name, email, user_role, last_login, is_active
FROM users
ORDER BY id
