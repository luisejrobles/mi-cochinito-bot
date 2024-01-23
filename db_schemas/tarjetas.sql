CREATE TABLE tarjeta (
    id int NOT NULL PRIMARY KEY, 
    id_usuario int NOT NULL,
    digitos int NOT NULL,
    fecha_vencimiento varchar(5),
    dia_corte varchar(2) NOT NULL,
    nombre_tarjeta varchar(20),
    KEY id_usuario_idx(id_usuario)
)