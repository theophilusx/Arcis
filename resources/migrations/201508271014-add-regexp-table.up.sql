CREATE TABLE network_grp (
group_name VARCHAR(32),
subgroup_name VARCHAR(32),
group_regexp VARCHAR(64),
active VARCHAR(1) DEFAULT 'Y',
created_dt TIMESTAMP DEFAULT current_timestamp,
last_modified_dt TIMESTAMP DEFAULT current_timestamp,
CONSTRAINT network_grp_pk PRIMARY KEY (group_name, subgroup_name)
);





