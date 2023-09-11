# Requisitos:

**Requisitos Funcionais:** São as funcionalidades específicas que o sistema deve ter, ou seja, as ações que o sistema deve ser capaz de realizar, como cadastrar clientes ou gerar relatórios.

**Requisitos Não Funcionais:** São os critérios de qualidade e desempenho que o sistema deve atender. Eles definem como o sistema deve funcionar em termos de segurança, usabilidade, desempenho e outras características.

<!------------------------------------------------------------------------------------------------------------------------->

# Requisitos Funcionais

1. **Cadastro de Clientes:**
   - O sistema deve permitir o cadastro de novos clientes com os seguintes campos obrigatórios: nome, endereço, número de telefone e e-mail.
   - Deve ser possível atualizar os detalhes do cliente, se necessário.

2. **Cadastro de Fichas de Consumo:**
   - O admnistrador deve poder criar fichas de consumo para os clientes, registrando produtos adquiridos, quantidades, preços e a data da compra.
   - As fichas de consumo não podem exceder um limite de R$200.
   - O sistema deve calcular automaticamente o valor total da ficha de consumo.

3. **Consulta de Clientes Específicos:**
   - O sistema deve permitir a pesquisa e visualização dos detalhes de um cliente específico, incluindo informações pessoais e histórico de consumo.

4. **Geração de Comprovantes:**
   - O admnistrador deve poder gerar comprovantes de compra para os clientes.
   - Os comprovantes devem ser enviados automaticamente por e-mail ou através de redes sociais, conforme escolha do cliente.
   - Os comprovantes devem conter informações detalhadas sobre a compra.

5. **Relatórios:**
   - O sistema deve gerar relatórios periódicos sobre as vendas, incluindo vendas totais, produtos mais vendidos e clientes mais frequentes.
   - Os relatórios podem ser gerados em formatos como PDF ou CSV.

<!------------------------------------------------------------------------------------------------------------------------->

# Requisitos Não Funcionais

1. **Segurança:**
   - O sistema deve garantir a segurança dos dados dos clientes, incluindo informações pessoais e histórico de compras.
   - Deve haver autenticação e autorização para proteger o acesso não autorizado.

2. **Desempenho:**
   - O tempo de resposta para operações críticas deve ser rápido, para evitar atrasos no atendimento aos clientes.

3. **Disponibilidade:**
   - O sistema deve estar disponível durante o horário comercial da loja e, preferencialmente, 24/7 para permitir a manutenção fora do horário de funcionamento.

4. **Integração:**
   - O sistema deve ser capaz de se integrar com serviços de e-mail e redes sociais para a geração e envio de comprovantes de compra.

5. **Backup e Recuperação:**
   - Deve haver um sistema de backup regular para garantir a recuperação de dados em caso de falhas no sistema.

6. **Usabilidade:**
   - A interface de usuário deve ser intuitiva e de fácil uso, para que os funcionários possam realizar tarefas sem a necessidade de treinamento extensivo.

7. **Manutenção:**
   - O sistema deve ser de fácil manutenção e atualização, permitindo correções e melhorias sem interrupções significativas nos serviços.
