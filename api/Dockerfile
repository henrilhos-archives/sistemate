# Use a imagem oficial do Python como base
FROM python:3.9

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /api

# Copie o arquivo requirements.txt e instale as dependências
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo Flask está rodando
EXPOSE 5000

# Comando para executar o aplicativo Flask
CMD ["flask", "run", "--host", "0.0.0.0"]