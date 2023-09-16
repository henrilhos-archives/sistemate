import os
import psycopg2
from dotenv import load_dotenv
from flask import Flask

load_dotenv()  # loads variables from .env file into environment

app = Flask(__name__)

database = os.environ.get("DATABASE_NAME")  # gets variables from environment
user = os.environ.get("DATABASE_USER") 
password = os.environ.get("DATABASE_PASSWORD") 
host = os.environ.get("DATABASE_HOST") 
port = os.environ.get("DATABASE_PORT") 

conn = psycopg2.connect(
    database=database,
    user=user,
    password=password,
    host=host,  
    port=port 
)

