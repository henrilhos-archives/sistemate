# Use a imagem oficial do Python como imagem base
FROM python:3.9

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /sistemate

# Copie o arquivo requirements.txt para o contêiner
COPY requirements.txt .

# Instale as dependências do projeto
RUN pip install -r requirements.txt

# Copie o restante do projeto para o contêiner
COPY . .

# Exponha a porta em que o servidor Django irá rodar
EXPOSE 8000

# Inicie o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]