CREATE TABLE users
    (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	email VARCHAR(30),
	user_role VARCHAR(10),
	last_login TIMESTAMP,
	is_active BOOLEAN,
	pass VARCHAR(100),
	created_dt TIMESTAMP DEFAULT current_timestamp,
	last_modified_dt TIMESTAMP DEFAULT current_timestamp
	);

