import os
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask import Flask, jsonify
from routes import blueprint

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# Configurações do banco de dados a partir de variáveis de ambiente
database = os.environ.get("DATABASE_NAME")
user = os.environ.get("DATABASE_USER")
password = os.environ.get("DATABASE_PASSWORD")
host = os.environ.get("DATABASE_HOST")
port = os.environ.get("DATABASE_PORT")
'''

# Função para criar tabelas a partir do arquivo SQL
@app.route('/clientes', methods=['GET'])
def listar_clientes():
    conn = psycopg2.connect(
        database=database,
        user=user,
        password=password,
        host=host,
        port=port
    )
    cursor = conn.cursor()

    # Execute uma consulta SQL para recuperar os dados dos clientes
    cursor.execute("SELECT * FROM cliente")
    clientes_data = cursor.fetchall()

    # Encerre a conexão e o cursor
    cursor.close()
    conn.close()

    # Retorne os dados recuperados como resposta JSON
    # Certifique-se de converter os dados em uma estrutura adequada (lista de dicionários, por exemplo)
   
    return jsonify(clientes_data)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
# ... Resto do código ...
'''

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask
from flask_migrate import Migrate
from routes.blueprint import blueprint
from models.machine import ddl_sistemate

def create():
    # Sua lógica para criar algo
    data = {"message": "Objeto criado com sucesso!"}
    return jsonify(data), 201  # Retorna uma resposta JSON com o código de status 201 (Created)

# Registering the blueprint
app.register_blueprint(blueprint, url_prefix='/machines')
migrate = Migrate(app, ddl_sistemate)  # Initializing the migration