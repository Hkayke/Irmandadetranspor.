# IRMANDADE TRANSPORTADORA

Portal web responsivo com área pública, contratantes e painel interno.

## Recursos incluídos
- Cadastro/login de contratantes.
- Cadastro de funcionário com status pendente e aprovação administrativa.
- Perfis: Diretor-Presidente, Sócio-Presidente, Diretor Comercial e Caminhoneiro.
- Painel de administração, aprovação de funcionários e atribuição de cargos.
- Carrossel editável somente pelos três cargos de direção.
- Solicitações de reposição/agendamento.
- Caminhoneiro pode assumir agendamento e atualizar o rastreamento por status.
- Histórico de rastreamento e confirmação de recebimento.
- Ponto com início, pausa e fim, foto do caminhão/condição do veículo e observações.
- Ouvidoria.
- PostgreSQL para persistência dos dados e fotos (armazenadas no banco).

## Publicar no GitHub e Render
1. Crie um repositório no GitHub e envie todos os arquivos desta pasta.
2. No Render, escolha **New + > Blueprint** e conecte o repositório.
3. O `render.yaml` cria o serviço web e o banco PostgreSQL.
4. No painel do serviço, preencha `BOOTSTRAP_ADMIN_EMAIL` e `BOOTSTRAP_ADMIN_PASSWORD`.
5. Faça o deploy. Acesse o endereço `https://seu-servico.onrender.com`.

O primeiro usuário administrativo é criado automaticamente com o e-mail e senha definidos nas variáveis acima. Não existe senha padrão no código.
Após entrar, use Administração > Usuários para aprovar funcionários e atribuir cargos. O primeiro administrador recebe o cargo Diretor-Presidente.

## Plano gratuito do Render
- O `render.yaml` está configurado com `plan: free` para o serviço Node.js e para o PostgreSQL.
- O serviço web gratuito pode entrar em repouso após 15 minutos sem tráfego e pode levar cerca de um minuto para voltar a responder.
- O PostgreSQL gratuito tem limite de 1 GB e expira 30 dias após a criação. Após expirar, há 14 dias para fazer upgrade antes da exclusão dos dados. Faça exportações/backup dos dados regularmente e não use esse banco gratuito como armazenamento permanente.
- O Render pode reiniciar serviços gratuitos; o sistema de arquivos local não é persistente. As fotos deste projeto são gravadas no PostgreSQL, não no disco local.
- O Render pode suspender recursos gratuitos ao atingir determinados limites de uso. Confira os limites atuais no painel de Billing.

## Observações importantes
- O rastreamento desta versão é por atualização manual de status, conforme solicitado; não usa GPS.
- Fotos são guardadas no PostgreSQL. Limite atual de upload: 4 MB por foto.
- Para operação real, use HTTPS (Render fornece), senhas fortes e backups do banco.
- O controle de ponto é um registro operacional simples, não substitui sistema trabalhista/folha oficial.
- Antes de abrir ao público, faça testes com contas de contratante e caminhoneiro.
