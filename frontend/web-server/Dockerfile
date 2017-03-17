FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install npm dependencies
COPY package.json /usr/src/app/
RUN npm install

# Expose port 2000
EXPOSE 2000

# Gets called when container starts
CMD ["npm", "run", "dev"]
