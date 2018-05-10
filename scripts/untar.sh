#!/usr/bin/env sh
set -x

export NODE_ENV=production
export NVM_BIN=$HOME/.nvm/versions/node/v8.11.1/bin

cd /var/www/istomin.io && \
tar zxvf package.tgz -C . && \
mv build/package.json . && \
npm install && \
npm run start