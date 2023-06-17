-- CREATE TABLE myservice_task (
--     id character varying(36),
--     todo character varying(500) NULL,
--     priority integer NULL
-- );

CREATE TABLE distributedsystems_models_task (
    id character varying(36),
    todo character varying(500) NULL,
    priority integer NULL
);

CREATE VIEW myservice_task AS SELECT * FROM distributedsystems_models_task; 