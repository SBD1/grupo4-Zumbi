const { getDBConnection } = require('../connections');
const { script } = require('./insertAll');


const insertData = async () => {
  await getDBConnection(script, false);
}

(async () => {
  await insertData();
  console.log('Triggers criados com sucesso!');
  process.exit(0);
})();