import os

# Each Flask web application contains a secret key which used to sign session cookies for protection against cookie data tampering.
SECRET_KEY = os.urandom(32)

# Enable debug mode, that will refresh the page when you make changes.
DEBUG = True

# Connect to the MYSQL database
SQLALCHEMY_DATABASE_URI = 'postgresql://sistemate:sistemate@localhost:5432/sistemate'

# Turn off the Flask-SQLAlchemy event system and warning
SQLALCHEMY_TRACK_MODIFICATIONS = False