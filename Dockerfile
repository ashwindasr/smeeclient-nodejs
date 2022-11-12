FROM nodejs:16-ubi8
WORKDIR /opt/app-root/src
COPY package.json .
RUN npm install --global smee-client