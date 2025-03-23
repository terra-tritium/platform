#!/bin/bash
# Para de executar em caso de erros
set -e

# Instala Yarn globalmente
npm install -g yarn

# Usa Yarn para instalar as dependências
yarn install

# Roda o script de build do Yarn
yarn build