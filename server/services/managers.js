const db = require('../services/db');

async function getManagers(){
  const data = await db.query('SELECT * FROM managers');
  return {
    data
  }
}

module.exports = {
    getManagers
}