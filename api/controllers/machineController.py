import json
from models.machine import Cliente, ddl_sistemate
from services.user_service import create_logic #,  insert_logic

def index():
    return {'status': 'OK',
            'localhost:5000/machine/create': 'Create table in mysql database',
            'localhost:5000/machine/insert': 'Insert data in mysql database table(Inserttable)'}


def create():
    
    create_logic()

'''
# insert data into table.
def insert():
    
    insert_logic()
'''