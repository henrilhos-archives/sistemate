from flask_sqlalchemy import SQLAlchemy

ddl_sistemate = SQLAlchemy()


class Cliente(ddl_sistemate.Model):
    __tablename__ = 'cliente'
    id_cliente = ddl_sistemate.Column(ddl_sistemate.UUID(as_uuid=True), primary_key=True, default=ddl_sistemate.text('gen_random_uuid()'))
    ds_nome_cliente = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_cpf = ddl_sistemate.Column(ddl_sistemate.String(11))
    ds_rg = ddl_sistemate.Column(ddl_sistemate.String(10))
    ds_telefone = ddl_sistemate.Column(ddl_sistemate.Integer)
    ds_nome_da_mae = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_nome_do_pai = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_endereco_residencial = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_numero_residencia = ddl_sistemate.Column(ddl_sistemate.Integer)
    ds_complemento = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_bairro = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_cep = ddl_sistemate.Column(ddl_sistemate.String(8))
    ds_facebook = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_instagram = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_outras_redes_sociais = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_nome_referencia_1 = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_telefone_referencia_1 = ddl_sistemate.Column(ddl_sistemate.Integer)
    ds_nome_referencia_2 = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_telefone_referencia_2 = ddl_sistemate.Column(ddl_sistemate.Integer)
    dth_criacao = ddl_sistemate.Column(ddl_sistemate.TIMESTAMP)
    dth_modificacao = ddl_sistemate.Column(ddl_sistemate.TIMESTAMP)

# Tabela "transferencia"
class Transferencia(ddl_sistemate.Model):
    __tablename__ = 'transferencia'
    id_transferencia = ddl_sistemate.Column(ddl_sistemate.UUID(as_uuid=True), primary_key=True, default=ddl_sistemate.text('gen_random_uuid()'))
    id_cliente = ddl_sistemate.Column(ddl_sistemate.UUID(as_uuid=True), ddl_sistemate.ForeignKey('cliente.id_cliente'))
    id_produto = ddl_sistemate.Column(ddl_sistemate.UUID(as_uuid=True), ddl_sistemate.ForeignKey('produto.id_produto'))
    ds_quantidade = ddl_sistemate.Column(ddl_sistemate.Integer)
    dth_criacao = ddl_sistemate.Column(ddl_sistemate.TIMESTAMP)

# Tabela "produto"
class Produto(ddl_sistemate.Model):
    __tablename__ = 'produto'
    id_produto = ddl_sistemate.Column(ddl_sistemate.UUID(as_uuid=True), primary_key=True, default=ddl_sistemate.text('gen_random_uuid()'))
    ds_nome_produto = ddl_sistemate.Column(ddl_sistemate.String(250))
    fl_status = ddl_sistemate.Column(ddl_sistemate.Boolean)
    dth_criacao = ddl_sistemate.Column(ddl_sistemate.TIMESTAMP)

# Tabela "pessoa_referencia"
class PessoaReferencia(ddl_sistemate.Model):
    __tablename__ = 'pessoa_referencia'
    id_cliente = ddl_sistemate.Column(ddl_sistemate.UUID(as_uuid=True), ddl_sistemate.ForeignKey('cliente.id_cliente'), primary_key=True)
    ds_nome_referencia = ddl_sistemate.Column(ddl_sistemate.String(250))
    ds_telefone_referencia = ddl_sistemate.Column(ddl_sistemate.Integer)
