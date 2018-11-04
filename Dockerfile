# Use an official node runtime as a parent image: https://github.com/nodejs/docker-node
FROM node:8.11.1-slim

# Install yarn
RUN npm install yarn

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Copy package json and install dependencies. Fail if doesn't match yarn.lock
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# Run app when the container launches
CMD ["yarn", "start"]