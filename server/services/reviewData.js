const db = require('../services/db');

async function getData(reviewData) {
    const data = await db.query(`SELECT * FROM odate where oDate = '${reviewData.date}' AND skillsId = ${reviewData.skillId}`);
    return {
        data
    };
}

module.exports = {
    getData,
}