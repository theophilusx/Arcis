-- name: create-host!
-- create a new host record
INSERT INTO host_def
    (
	mac, ipv4, ipv6, hostname, os, dhcp, dns, reverse_dns,
	host_type, network_group, subgroup_name, management_group, status
	)
    VALUES
    (
	:mac, :ipv4, :ipv6, :hostname, :os, :dhcp :dns :reverse_dns
	:host_type, :network_group, :subgroup_name, :management_group, :status
	)

-- name: insert-mdf-record!
-- Insert a record from the master data file
INSERT INTO host_def
    (
	mac, ipv4, ipv6, hostname, dhcp, dns, reverse_dns, network_group,
	subgroup_name, created_dt, last_seen_dt
	)
    VALUES
    (
	:mac, :ipv4, :ipv6, :hostname, :dhcp, :dns, :reverse_dns,
	:network_group, :subgroup_name, :created_dt, :last_seen_dt
	)


-- name: update-host!
-- Update a host record
UPDATE host_def
SET os = :os,
    dhcp = :dhcp,
    dns = :dns,
    reverse_dns = :reverse_dns,
    host_type = :host_type
    network_group = :network_group
    subgroup_name = :subgroup_name
    management_group = :management_group
    status = :status
    last_modified_dt = current_timestamp
    last_seen_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-os!
-- Update the OS setting for a host
UPDATE host_def
SET os = :os,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-dhcp!
-- Update the dhcp client value
UPDATE host_def
SET dhcp = :dhcp,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update_dns!
-- Update the dns value for a host
UPDATE host_def
SET dns = :dns,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update_reverse_dns!
-- Update the reverse dns value for a host
UPDATE host_def
SET reverse_dns = :reverse_dns,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-host-type!
-- Update the host type for a host
UPDATE host_def
SET host_type = :host_type,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-network-groups!
-- Update the network group for a host
UPDATE host_def
SET network_group = :network_group,
    subgroup_name = "subgroup_name,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-management-group!
-- Update the management group for a host
UPDATE host_def
SET management_group = :management_group,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-status!
-- Update the status for a host
UPDATE host_def
SET status = :status,
    last_modified_dt = current_timestamp
WHERE host_id = :host_id

-- name: update-last-seen-date!
-- Update the last seen date for a host
UPDATE host_def
SET last_seen_dt = :last_seen_dt
WHERE host_id = :host_id

-- name: get-all-hosts
-- Get all hosts in the host_def table
SELECT *
FROM host_def

-- name: get-host
-- Retrieve host based on mac, ipv4, ipv6 and hostname
SELECT *
FROM host_def
WHERE mac = :mac
    AND ipv4 = :ipv4
    AND ipv6 = :ipv6
    AND hostname = :hostname

-- name: get-host-by-id
-- Retrieve a host based on host_id
SELECT *
FROM host_def
WHERE host_id = :host_id

-- name: get-host-by-mac
-- Select hosts based on MAC address
SELECT *
FROM host_def
WHERE mac = :mac

-- name: get-host-by-ipv4
-- Select hosts based on IPv4 address
SELECT *
FROM host_def
WHERE ipv4 = :ipv4

-- name: get-host-by-ipv6
-- Select hosts based on IPv6 address
SELECT *
FROM host_def
WHERE ipv6 = :ipv6

-- name: get-host-by-hostname
-- Select hosts by hostname
SELECT *
FROM host_def
WHERE hostname = :hostname

-- name: get-host-by-os
-- Select hosts by OS
SELECT *
FROM host_def
WHERE os = :os

-- name: get-host-by-type
-- Select hosts by host type
SELECT *
FROM host_def
WHERE host_type = :host_type

-- name: get-host-by-network-group
-- Select host by network group
SELECT *
FROM host_def
WHERE network_group = :network_group

-- name: get-host-by-management-group
-- Select hosts by management group
SELECT *
FROM host_def
WHERE management_group = :management_group

-- name: get-host-by-status
-- Select hosts by status
SELECT *
FROM host_def
WHERE status = :status

-- name: get-os-types
-- Return list of known OS values
SELECT DISTINCT os
FROM host_def
ORDER BY os

-- name: get-host-types
-- Retrieve list of known host types
SELECT DISTINCT host_type
FROM host_def
ORDER BY host_type

-- name: get-network-groups
-- Retrieve list of known network groups
SELECT DISTINCT network_group
FROM host_def
ORDER BY network_group

-- name: get-management-groups
-- Retrieve list of known management groups
SELECT DISTINCT management_group
FROM host_def
ORDER BY management_group

-- name: get-status-values
-- Retrieve list of known status values
SELECT DISTINCT status
FROM host_def
ORDER BY status

-- name: get-hosts-with-ipv4-like
-- Retrieve hosts based on a LIKE pattern match for IPv4
SELECT *
FROM host_def
WHERE ipv4 like :ipv4
