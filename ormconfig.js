module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "synchronize": true,
  "extra": {
    "ssl": {
       "rejectUnauthorized": false
     }
  },
  "logging": false,
  "entities": [
    "entity/**/*"
 ],
 "migrations": [
    "src/migration/**/*"
 ],
 "subscribers": [
    "src/subscriber/**/*"
 ],
 "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
 }
}