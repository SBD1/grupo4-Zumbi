const { getDBConnection } = require('../connections');
const { script } = require('./insertAll');


const insertData = async () => {
  await getDBConnection(script, false);
}

(async () => {
  await insertData();
  console.log('Procedures criados com sucesso!');
  process.exit(0);
})();