CREATE TABLE host_def
    (
	host_id SERIAL PRIMARY KEY,
	mac VARCHAR(17) NOT NULL,
	ipv4 VARCHAR(15) DEFAULT '000.000.000.000',
	ipv6 VARCHAR(39) DEFAULT '0000:0000:0000:0000:0000:0000:0000:0000',
	hostname VARCHAR(256),
	os VARCHAR(64),
	host_type VARCHAR(64) DEFAULT 'Generic',
	network_group VARCHAR(64),
	management_group VARCHAR(64),
	status VARCHAR(64) DEFAULT 'Active',
	created_dt TIMESTAMP DEFAULT current_timestamp,
	last_modified_dt TIMESTAMP DEFAULT current_timestamp,
	last_seen_dt TIMESTAMP DEFAULT current_timestamp,
	CONSTRAINT host_def_uq UNIQUE (mac, ipv4, ipv6, hostname)
	);
