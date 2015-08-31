-- name: create-network-group!
-- Create a new network group definition
INSERT INTO network_grp
(group_name, group_regexp)
VALUES (:group_name, :group_regexp)

-- name: set-active-state!
-- Set the active state for a network group
UPDATE network_grp
SET active = :active
WHERE group_name = :group_name

-- name: get-network-groups
-- Return all network groups
SELECT *
FROM netowrk_grp

-- name: get-active-network-groups
-- Return all active network groups
SELECT *
FROM network_grp
WHERE active = 'Y'

-- name: get-group-by-name
-- Return the network group with specified name
SELECT *
FROM network_grp
WHERE group_name = :group_name
