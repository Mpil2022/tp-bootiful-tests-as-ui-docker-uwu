# syntax=docker/dockerfile:1
FROM node:16.13.2
COPY front-adder .
RUN npm install -g npm@8.3.2
RUN npm install
CMD cd front-adder & ng serve
