/**
 * Created by bmotlagh on 10/22/17.
 */

const config = {
    ENV: process.env.NODE_ENV || 'dev',
    SWAGGER: process.env.SWAGGER || 'localhost:3000',
    MONGO: process.env.MONGO || 'mongodb://10.0.0.2:27017/ue-boilerplate',
    REPLICA: process.env.REPLICA || 'rs0',
    UEAUTH: process.env.UEAUTH || 'https://domainqa.unitedeffects.com',
    webhook: process.env.WEBHOOK || 'NM1Xx7tRD5F6SmOfDYqE3Vc8NwqqNxwU',
};

module.exports = config;
