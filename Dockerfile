# Imagem base do Node.js
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta para o serviço Node.js
EXPOSE 3333

# Comando padrão (substituído no docker-compose)
CMD ["npm", "run", "start:dev"]
