
# Setup Guide for Receitas Challenge

Para iniciar essa aplicação, você precisa dos seguintes critérios instalados:

- **Docker**: Version 26.1.1 ou maior
- **Docker Compose**: Version v2.27.0-desktop.2 ou análogo
- **npm**

## Configuração do Backend

1. Inicie a aplicação + banco de dados em modo de desenvolvimento:
   (A primeira vez que você executar esse comando pode demorar, pois ele irá construir a imagem Docker)
   ```bash
   docker compose up --watch
   ```

   Pronto! Agora a aplicação estará disponível na porta **3333** do localhost.