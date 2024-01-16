FROM ghcr.io/puppeteer/puppeteer:21.7.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies including Socket.IO
RUN npm ci

# Copy the rest of the code
COPY . .

# Start command
CMD [ "node", "server.cjs" ]
