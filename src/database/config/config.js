require('dotenv').config();

module.exports = {
    secret: process.env.AUTH_SECRET,
    expires: process.env.AUTH_EXPIRES || "24h",
    rounds: process.env.AUTH_ROUNDS || 10,
  "development": {
    "username": "root",
    "password": null,
    "database": "cambalache",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "cambalache",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "cambalache",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
