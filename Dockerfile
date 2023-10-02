FROM oven/bun:latest

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will run on (replace 3000 with your desired port)
EXPOSE 3000

# Start the Node.js application
CMD [ "bun", "run", "src/server.ts" ]
