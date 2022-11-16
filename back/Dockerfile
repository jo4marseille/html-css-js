FROM --platform=linux/x86-64 node:16

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY ./package*.json /usr/src/app/
# COPY . ./
RUN npm i

# Copying source files
COPY . /usr/src/app/

# Building app
EXPOSE 3000

# Running the app
CMD "node" "server.js"