CREATE TABLE "cliente" (
  "id_cliente" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "ds_nome_cliente" varchar(250),
  "ds_cpf" varchar(11),
  "ds_rg" varchar(10),
  "ds_telefone" integer,
  "ds_nome_da_mae" varchar(250),
  "ds_nome_do_pai" varchar(250),
  "ds_endereco_residencial" varchar(250),
  "ds_numero_residencia" integer,
  "ds_complemento" varchar(250),
  "ds_bairro" varchar(250),
  "ds_cep" varchar(8),
  "ds_facebook" varchar(250),
  "ds_instagram" varchar(250),
  "ds_outras_redes_sociais" varchar(250),
  "ds_nome_referencia_1" varchar(250),
  "ds_telefone_referencia_1" integer,
  "ds_nome_referencia_2" varchar(250),
  "ds_telefone_referencia_2" integer,
  "dth_criacao" timestamp,
  "dth_modificacao" timestamp
);

CREATE TABLE "transferencia" (
  "id_transferencia" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "id_cliente" uuid,
  "id_produto" uuid,
  "ds_quantidade" integer,
  "dth_criacao" timestamp
);

CREATE TABLE "produto" (
  "id_produto" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "ds_nome_produto" varchar(250),
  "fl_status" boolean,
  "dth_criacao" timestamp
);

CREATE TABLE "pessoa_referencia" (
  "id_cliente" uuid,
  "ds_nome_referencia" varchar(250),
  "ds_telefone_referencia" integer
);

ALTER TABLE "transferencia" ADD FOREIGN KEY ("id_cliente") REFERENCES "cliente" ("id_cliente");

ALTER TABLE "transferencia" ADD FOREIGN KEY ("id_produto") REFERENCES "produto" ("id_produto");

ALTER TABLE "pessoa_referencia" ADD FOREIGN KEY ("id_cliente") REFERENCES "cliente" ("id_cliente");

INSERT INTO cliente (
  ds_nome_cliente, ds_cpf, ds_rg, ds_telefone,
  ds_nome_da_mae, ds_nome_do_pai, ds_endereco_residencial,
  ds_numero_residencia, ds_complemento, ds_bairro, ds_cep,
  ds_facebook, ds_instagram, ds_outras_redes_sociais,
  ds_nome_referencia_1, ds_telefone_referencia_1,
  ds_nome_referencia_2, ds_telefone_referencia_2,
  dth_criacao, dth_modificacao
) VALUES (
  'João da Silva', '12345678901', '9876543210', '123456789',
  'Maria da Silva', 'José da Silva', 'Rua Principal, 123',
  '456', 'Apartamento 4A', 'Bairro Central', '12345678',
  'joao.silva@gmail.com', 'joao_silva', 'outra_rede_social',
  'Ana Maria', '987654321', 'José Carlos', '123456789',
  NOW(), NOW()
);
