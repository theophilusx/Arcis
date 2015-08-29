-- name: create-net-group!
-- Create a new network group definition
INSERT INTO network_grp
(group_name, group_regexp)
VALUES (:name, :regexp)

-- name: set-active-state!
-- Set the active state for a network group
UPDATE network_grp
SET active = :active
WHERE group_name = :name

-- name: get_network_groups
-- Return all network groups
SELECT *
FROM netowrk_grp

-- name: get_active_network_groups
-- Return all active network groups
SELECT *
FROM network_grp
WHERE active = 'Y'
