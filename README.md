
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
 * [Modelagem](#modelagem)
 * [Modelos C4](#modelos-c4)
 * [Casos de uso](#casos-de-uso)
 * [Instalação](/documentos/instalacao.md) 
 * [Stacks](/documentos/stacks.md)
   
<!------------------------------------------------------------------------------------------------------------------------->

# Descrição do Projeto
Desenvolver um sistema de automação para uma loja com o objetivo de substituir processos manuais por operações automatizadas, aumentando a eficiência, reduzindo erros humanos e melhorando a confiabilidade. A solução visa automatizar o gerenciamento do cadastro de clientes, controle de fichas de consumo e geração de relatórios.

<!------------------------------------------------------------------------------------------------------------------------->

# Escopo

1. **Cadastro de Clientes:**
   - Permitir o cadastro de novos clientes com informações como nome, endereço, número de telefone, e-mail, etc.
   - Manter um registro centralizado de todos os clientes cadastrados.

2. **Cadastro de Fichas de Consumo:**
   - Permitir a criação de fichas de consumo para cada cliente sempre que eles realizarem uma compra.
   - Cada ficha de consumo deve conter informações sobre os produtos adquiridos, seus preços, quantidades, data e hora da compra, além de um limite de R$200, como mencionado.

3. **Alteração de Fichas de Consumo:**
   - Possibilitar a edição das fichas de consumo para incluir, modificar ou excluir produtos, preços, quantidades, desde que as alterações não afetem as compras passadas de um cliente.
   - Garantir que as alterações sejam aplicadas apenas a consumos futuros.

4. **Consulta de Clientes Específicos:**
   - Permitir a busca e visualização dos detalhes de um cliente específico, incluindo suas informações pessoais e histórico de consumo.

5. **Geração de Comprovantes:**
   - Facilitar a geração de comprovantes de compra para os clientes, que podem ser enviados por e-mail ou através de redes sociais.
   - Os comprovantes devem conter informações detalhadas sobre a compra, incluindo data, hora, produtos, preços, quantidades e valor total.

6. **Relatórios:**
   - Gerar relatórios periódicos sobre as vendas, incluindo informações como vendas totais, produtos mais vendidos, clientes mais frequentes, etc.

7. **Segurança e Autenticação:**
   - Implementar um sistema de autenticação seguro para garantir que apenas usuários autorizados tenham acesso ao sistema.

8. **Backup e Recuperação:**
   - Realizar backups regulares dos dados para evitar perdas de informações importantes e implementar um mecanismo de recuperação em caso de falhas no sistema.

9. **Integração de E-mail e Redes Sociais:**
   - Integrar o sistema com serviços de e-mail e redes sociais para permitir o envio automático de comprovantes aos clientes.

10. **Controle de Acesso:**
    - Implementar diferentes níveis de acesso de usuário (por exemplo, administrador, funcionário) para controlar quem pode realizar quais ações no sistema.

11. **Auditoria de Alterações:**
    - Registrar todas as alterações feitas no sistema para fins de auditoria e rastreamento.

12. **Interface de Usuário Amigável:**
    - Desenvolver uma interface de usuário intuitiva e fácil de usar para facilitar a interação dos funcionários com o sistema.

<!------------------------------------------------------------------------------------------------------------------------->

# Contexto
O projeto visa modernizar a operação de uma loja, substituindo processos manuais por um sistema automatizado, trazendo eficiência, confiabilidade e a possibilidade de integração com a folha de pagamento.

<!------------------------------------------------------------------------------------------------------------------------->

# Restrições
Serão consideradas restrições de custo para implementação e manutenção do sistema, além de garantir a segurança dos dados dos clientes e cumprimento das regulamentações de privacidade.

<!------------------------------------------------------------------------------------------------------------------------->

# Trade-offs

1. **Automatização vs. Manual:**
   - Automatizar processos aumenta a eficiência, mas pode exigir mais recursos de desenvolvimento inicial.

2. **Eficiência vs. Redução de Erros:**
   - A automação pode aumentar a eficiência, mas não garantirá necessariamente a redução de erros humanos.

3. **Flexibilidade vs. Controle:**
   - Oferecer a capacidade de alterar fichas de consumo pode fornecer flexibilidade, mas também pode resultar em perda de controle sobre dados históricos.

4. **Customização vs. Padronização:**
   - Personalizar fichas de consumo pode atender às necessidades individuais dos clientes, mas pode complicar a manutenção e a integração de sistemas futuros.

5. **Facilidade de Uso vs. Recursos Avançados:**
   - Tornar o sistema fácil de usar pode atrair mais usuários, mas pode limitar a inclusão de recursos avançados que atendem a necessidades específicas.

6. **Segurança vs. Usabilidade:**
   - Fortalecer a segurança pode proteger os dados, mas pode complicar a experiência do usuário.

7. **Padronização de Tecnologia vs. Diversificação:**
    - Padronizar em tecnologias conhecidas pode facilitar o desenvolvimento, mas pode limitar a exploração de soluções mais inovadoras.
      
<!------------------------------------------------------------------------------------------------------------------------->

# Modelagem
A metodologia Scrum foi incorporada com o auxílio da plataforma Trello. O Scrum segmentou as atividades em sprints, que são períodos de desenvolvimento, enquanto o Trello foi usado para gerenciar tarefas, histórias de usuário e monitorar o andamento do projeto.

<!------------------------------------------------------------------------------------------------------------------------->

# Modelos C4
Os diagramas feitos de acordo com o modelo C4 de documentação podem ser encontrados [aqui](documentos/diagramas-C4.md).

<!------------------------------------------------------------------------------------------------------------------------->

# Requisitos
Os Requisitos Funcionais e Não Funcionais do sistema podem der encontrados [aqui](documentos/requisitos.md).

<!------------------------------------------------------------------------------------------------------------------------->

# Casos de uso
Os casos de uso podem ser encontrados aqui.

<!------------------------------------------------------------------------------------------------------------------------->

# Instalação
Para obter instruções sobre como instalar o projeto, siga o passo a passo de instalação disponível [aqui](documentos/instalacao.md).

<!------------------------------------------------------------------------------------------------------------------------->

# Stacks

