const db = require('../services/db');

async function getData(){
  const data = await db.query('SELECT * FROM skills');
  return {
    data
  };
}

async function postData(){
    const data = await db.query('UPDATE COLS FROM skills');
    let message = 'Quote created successfully';
    return {
      message
    };
  }

module.exports = {
    getData,
    postData
}