const { getDBConnection } = require('../connections');
const { script } = require('./script');

const createAllTables = async () => {
  await getDBConnection(script, false);
}

(async () => {
  await createAllTables();
  console.log('As tabelas foram criadas!');
  process.exit(0);
})();