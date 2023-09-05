
# Projeto Sistemate
![sistemate2](https://github.com/Malkowaz/Portfolio-Mate/assets/63025296/e84be790-495d-4493-8b6e-c0477cd6cc07) <br>

<!------------------------------------------------------------------------------------------------------------------------->
# Badges
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)<br>
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<!------------------------------------------------------------------------------------------------------------------------->

 ## Índice 
 * [Descrição do Projeto](#descrição-do-projeto)
 * [Escopo](#escopo) 
 * [Contexto](#contexto) 
 * [Restrições](#restrições) 
 * [Trade-offs](#trade-offs) 
 * [Modelos C4](#modelos-c4)
 * [Casos de uso](#casos-de-uso)
 * [Modelagem](#modelagem)
 * [Instalação](/documentos/instalacao.md) 
 * [Stacks](/documentos/stacks.md)
   
<!------------------------------------------------------------------------------------------------------------------------->

# Descrição do Projeto
Desenvolver um sistema de automação para a Mate Cafeteria com o objetivo de substituir processos manuais por operações automatizadas, aumentando a eficiência, reduzindo erros humanos e melhorando a confiabilidade. A solução visa automatizar o gerenciamento do cadastro de clientes, controle de operações financeiras e relatórios.

<!------------------------------------------------------------------------------------------------------------------------->

# Escopo
Cadastro automatizado de clientes.
Sistema de verificação e aprovação de cadastros.
Gerenciamento eletrônico de fichas de clientes.
Registro e cálculo automático de operações financeiras.
Geração de relatórios financeiros para análise.
Geração de comprovante para cliente.
Escopo Detalhado:

### Cadastro e Verificação de Clientes:
* Desenvolvimento de um sistema de cadastro online para clientes.
* Implementação de um fluxo de aprovação de cadastros, com verificação de dados e histórico.

### Gerenciamento Eletrônico de Fichas:
* Substituição das fichas manuais por registros eletrônicos, armazenados em banco de dados.
* Atualização automática dos saldos após cada operação.

### Controle Financeiro Automatizado:
* Implementação de lógica para cálculo automático de operações financeiras (compras, pagamentos, créditos etc.).

### Relatórios e Análises:
* Desenvolvimento de um sistema de geração de relatórios financeiros para análise interna.
* Possibilidade de visualizar histórico de transações e saldos por cliente.

### Segurança e Privacidade:
* Implementação de autenticação segura para acesso ao sistema.
* Criptografia de dados sensíveis, como informações pessoais e financeiras dos clientes.

### Interface de Usuário:
Criação de uma interface de usuário intuitiva e responsiva para acesso e gerenciamento das operações.

### Testes e Qualidade:
Realização de testes extensivos de funcionalidade e segurança.
Implementação de medidas de qualidade de código.

### Treinamento e Suporte:
Desenvolvimento de materiais de treinamento para os funcionários da Mate Cafeteria.
Oferecimento de suporte para esclarecimento de dúvidas e solução de problemas.

<!------------------------------------------------------------------------------------------------------------------------->

# Contexto
O projeto visa modernizar a operação da Mate Cafeteria, substituindo processos manuais por um sistema automatizado, trazendo eficiência, confiabilidade e a possibilidade de integração com a folha de pagamento.

<!------------------------------------------------------------------------------------------------------------------------->

# Restrições
Serão consideradas restrições de custo para implementação e manutenção do sistema, além de garantir a segurança dos dados dos clientes e cumprimento das regulamentações de privacidade.

<!------------------------------------------------------------------------------------------------------------------------->

# Trade-offs

### Simplicidade da Interface:
Decisão a ser tomada: A interface do sistema será mantida simples e intuitiva para uma experiência amigável.
Equilíbrio em análise: Está sendo ponderada a possibilidade de adicionar recursos mais avançados sem comprometer a usabilidade ou aumentar a complexidade do desenvolvimento.

### Desempenho versus Escalabilidade:
Decisão a ser tomada: O foco será em otimizar o desempenho do sistema para tempos de resposta rápidos.
Equilíbrio em análise: Está sendo considerado como equilibrar o desempenho com a capacidade de escalabilidade, para que o sistema possa lidar com um aumento na demanda ao longo do tempo.

### Gerenciamento de Dados:
Decisão a ser tomada: Está sendo explorada a melhor forma de gerenciar os dados do sistema, levando em conta a precisão das atualizações.
Equilíbrio em análise: Está sendo avaliada a possibilidade de depender apenas de dados internos ou integrar fontes externas para informações específicas.

### Amplitude de Recursos:
Decisão a ser tomada: Está sendo avaliado até que ponto os recursos do sistema serão desenvolvidos, considerando a capacidade do desenvolvedor.
Equilíbrio em análise: Está sendo ponderada a inclusão de recursos adicionais sem complicar o desenvolvimento ou a experiência do usuário.

### Facilidade de Manutenção:
Decisão a ser tomada: Está sendo decidido como projetar o sistema para facilitar a manutenção contínua.
Equilíbrio em análise: Está sendo considerado como equilibrar a simplicidade da estrutura com a escalabilidade do sistema, para que a manutenção seja eficiente no longo prazo.
<br>

<!------------------------------------------------------------------------------------------------------------------------->

# Requisitos:
## Requisitos Funcionais:

### Cadastro de Clientes:<br>
* O sistema deve permitir o cadastro de clientes, incluindo informações como nome, CPF, endereço, telefone e dados de contato.

### Aprovação de Cadastro:<br>
* O sistema deve permitir que a Neusa ou um usuário autorizado aprove ou rejeite novos cadastros de clientes.
* A aprovação deve incluir a verificação de informações verídicas e a avaliação de riscos para conceder crédito.

### Gestão de Fichas:<br>
* O sistema deve permitir que a Mate Cafeteria crie, armazene e atualize fichas de transações para cada cliente.
* Deve ser possível registrar todas as transações dos clientes, incluindo compras e pagamentos pendentes.

### Cálculo de Saldo:<br>
* O sistema deve calcular automaticamente o saldo devido de cada cliente com base nas transações registradas.
* O saldo deve ser atualizado sempre que uma nova transação for registrada.

### Débito Direto na Folha de Pagamento:<br>
* O sistema deve oferecer a opção de pagamento com débito direto na folha de pagamento dos clientes, se autorizado.
* Deve manter um registro das autorizações e processar os pagamentos automaticamente.

### Relatórios e Consultas:<br>
* O sistema deve fornecer funcionalidades para gerar relatórios de transações, saldos de clientes e outras métricas relevantes.
* Deve permitir consultas para verificar o histórico de transações de clientes específicos.

## Requisitos Não Funcionais:<br>

### Segurança de Dados:<br>
* O sistema deve garantir a segurança dos dados dos clientes, incluindo medidas de criptografia e controle de acesso.

### Desempenho:
* O sistema deve ser responsivo, mesmo quando houver um grande volume de transações.
* O tempo de resposta para consultas e operações deve ser rápido.

### Disponibilidade:
* O sistema deve estar disponível 24 horas por dia, 7 dias por semana, para que os clientes possam acessá-lo quando necessário.

### Escalabilidade:
* O sistema deve ser escalável para lidar com um aumento no número de clientes e transações.

### Conformidade Legal:
* O sistema deve estar em conformidade com regulamentações financeiras e de proteção de dados aplicáveis, como a LGPD (Lei Geral de Proteção de Dados).

### Usabilidade:
* A interface do sistema deve ser intuitiva e fácil de usar, para que a equipe da Mate Cafeteria possa utilizá-lo sem dificuldades.

### Backup e Recuperação:
* O sistema deve realizar backups regulares dos dados e permitir a recuperação em caso de falhas.

### Hospedagem e Conectividade:
* O sistema deve ser hospedado de forma confiável na AWS e ter uma conectividade estável para garantir o acesso contínuo.
  
<!------------------------------------------------------------------------------------------------------------------------->
# Modelos C4
Os diagramas feitos de acordo com o modelo C4 de documentação podem ser encontrados [aqui](documentos/diagramas-C4.md).

<!------------------------------------------------------------------------------------------------------------------------->

# Casos de uso
Os casos de uso podem ser encontrados aqui.

<!------------------------------------------------------------------------------------------------------------------------->

# Modelagem
Modelagem das paradas :D.

<!------------------------------------------------------------------------------------------------------------------------->

# Instalação

<!------------------------------------------------------------------------------------------------------------------------->

# Stacks

