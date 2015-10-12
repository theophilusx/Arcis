-- name: create-network-group!
-- Create a new network group definition
INSERT INTO network_grp
(group_name, subgroup_name, group_regexp)
VALUES (:group_name, :subgroup_name, :group_regexp)

-- name: set-active-state!
-- Set the active state for a network group
UPDATE network_grp
SET active = :active,
    last_modified_dt = current_timestamp
WHERE group_name = :group_name
AND subgroup_name = :subgroup_name

-- name: update-group-pattern!
-- Update the regexp for the group
UPDATE network_grp
SET group_regexp = :group_regexp
    last_modified_dt = current_timestamp
WHERE group_name = :group_name
AND subgroup_name = :subgroup_name

-- name: get-network-groups
-- Return all network groups
SELECT *
FROM network_grp

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
AND subgroup_name = :subgroup_name

-- name: delete-group!
-- Delete a network group definition
DELETE FROM network_grp
WHERE group_name = :group_name
AND subgroup_name = :subgroup_name
