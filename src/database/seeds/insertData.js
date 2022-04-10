const { getDBConnection } = require('../connections');
const { script } = require('./insertAll');


const insertData = async () => {
  await getDBConnection(script, false);
}

(async () => {
  await insertData();
  console.log('As tabelas foram populadas com sucesso!');
  process.exit(0);
})();