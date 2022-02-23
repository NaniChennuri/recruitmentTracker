const db = require('../services/db');

async function getData(managerId) {
  const data = await db.query(`SELECT * FROM skills where managerId = ${managerId}`);
  return {
    data
  };
}

async function postData(skillsData) {
  let message = 'Data updated successfully';

  if(skillsData && skillsData.length !== 0) {
    let queries = 'INSERT INTO skills (id, skill, oDate, oPos, interviewd, shortlisted, offered, posStatus, managerId) VALUES ';

    skillsData.forEach((item) => {
      queries += `(${item.id}, '${item.technology}', '${item.oDate}', ${item.open_positions}, ${item.interviewed}, ${item.shortlist}, ${item.offer}, '${item.Status}', ${item.managerId}), `
    });
    queries = queries.slice(0, -2);
    queries += ' ON DUPLICATE KEY UPDATE oPos = VALUES(oPos), interviewd = VALUES(interviewd), shortlisted = VALUES(shortlisted), offered = VALUES(offered), posStatus = VALUES(posStatus);';

    await db.query(queries);
  }

  return {
    message
  };
}

module.exports = {
  getData,
  postData
}