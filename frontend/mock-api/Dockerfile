FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install npm dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g json-server

# Expose port 2001
EXPOSE 2001

# Gets called when container starts
CMD ["npm", "run", "dev"]
