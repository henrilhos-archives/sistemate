import json
from models.machine import Cliente, ddl_sistemate

def create_logic():
    try:
        # create tables if not exists.
        ddl_sistemate.create_all()
        ddl_sistemate.session.commit()
        return '==================TABLES CREATED=================='

    except Exception as e:
        print(e)
        return '==================TABLES NOT CREATED!!!=================='