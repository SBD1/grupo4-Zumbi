const pgtools = require('pgtools');
require('dotenv/config');

const dropDataBase = async () => {
  const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432,
    host: process.env.DB_HOST,
  }
  await pgtools.dropdb(config, 'zumbi-db', function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log('Banco excluído com sucesso!');
  });
}

(async () => {
  await dropDataBase();
})();
