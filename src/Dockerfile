# Step 1: Use an official Node.js image
FROM node:23-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm ci

# Step 5: Copy the source code into the container
COPY . .

# Step 6: Install TypeScript globally (optional)
RUN npm install -g typescript

# Step 7: Expose the application port
EXPOSE 3000

# Step 8: Run the TypeScript application
CMD ["npm", "run", "dev"]
