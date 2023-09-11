# Instalação 

## Requisitos Prévios

Antes de iniciar a instalação, certifique-se de ter o seguinte software instalado no seu sistema:

- **Python (versão Python 3.9)**
- **Django (versão 4.2.5)**
- **PostgreSQL (versão 15)**
- **Pip (gerenciador de pacotes Python)**

## Instalação

1. **Clonar o Repositório:**<br>

Abra um terminal e vá para a pasta onde deseja que o projeto seja clonado. Em seguida, utilize o seguinte comando para realizar a clonagem do repositório:
```
git clone https://github.com/Malkowaz/Portfolio-Mate.git
```

2. **Configurar o Ambiente Virtual (Opcional, mas recomendado):**

Para isolar as dependências do projeto, você pode criar um ambiente virtual. Certifique-se de estar na pasta raiz do projeto e siga os comandos abaixo:

- No Windows:

  ```
  python -m venv venv
  venv\Scripts\activate
  ```

- No macOS e Linux:

  ```
  python -m venv venv
  source venv/bin/activate
  ```

3. **Instalar Dependências:**

```
pip install -r requirements.txt
```

4. **Configurar o Banco de Dados:**

Abra o arquivo `settings.py` dentro da pasta `Portfolio-Mate` e configure as configurações do banco de dados de acordo com suas preferências. Por padrão, o projeto está configurado para usar o PostgreSQL.

5. **Aplicar Migrações:**

Execute as migrações para criar as tabelas do banco de dados:

```
python manage.py migrate
```

6. **Executar o Servidor de Desenvolvimento:**

Inicie o servidor de desenvolvimento Django:

```
python manage.py runserver
```

Agora você pode acessar o seu projeto em `http://localhost:8000` no seu navegador.
