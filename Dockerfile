FROM node

# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install app dependencies
RUN npm install 
 
# Copy the rest of the application code
COPY . .


# Define the command to run your app
ENTRYPOINT ["npm", "start"]
