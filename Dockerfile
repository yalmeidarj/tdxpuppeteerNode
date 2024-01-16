# FROM ghcr.io/puppeteer/puppeteer:21.7.0



# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true \
#     PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# WORKDIR /usr/src/app


# COPY package*.json ./
# RUN npm ci

# COPY . .
# CMD [ "node", "server.cjs" ]

FROM ghcr.io/puppeteer/puppeteer:21.7.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies including Socket.IO
RUN npm ci

# Copy the rest of your application's code
COPY . .

# Your start command
CMD [ "node", "server.cjs" ]
