const db = require('./models/db');

const { HelpTexts } = db.sequelize.models;

const findByLangAndPageId = async (lang, pageid) => {
  return await HelpTexts.findOne({ where: { lang, pageid } });
};

module.exports = {
  findByLangAndPageId
};
