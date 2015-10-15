CREATE TABLE host_def
(
host_id SERIAL PRIMARY KEY,
mac VARCHAR(17) DEFAULT ':::::',
ipv4 VARCHAR(15) NOT NULL,
ipv6 VARCHAR(39) DEFAULT ':::::::',
hostname VARCHAR(256) DEFAULT 'No DNS',
os VARCHAR(64) DEFAULT 'Unknown',
dhcp VARCHAR(1) DEFAULT 'N',
dns VARCHAR(1) DEFAULT 'N',
reverse_dns VARCHAR(1) DEFAULT 'N',
host_type VARCHAR(64) DEFAULT 'Unknown',
network_group VARCHAR(64) DEFAULT 'Unknown',
subgroup_name VARCHAR(64) DEFAULT 'Unknown',
management_group VARCHAR(64) DEFAULT 'Unknown',
status VARCHAR(64) DEFAULT 'Unknown',
created_dt TIMESTAMP DEFAULT current_timestamp,
last_modified_dt TIMESTAMP DEFAULT current_timestamp,
last_seen_dt TIMESTAMP DEFAULT current_timestamp,
CONSTRAINT host_def_uq UNIQUE (mac, ipv4, ipv6, hostname)
);
