FROM nodejs:14-ubi8-minimal
WORKDIR /opt/app-root/src
COPY package.json .
RUN npm install --global smee-client