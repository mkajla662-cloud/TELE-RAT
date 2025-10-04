const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7981839991:AAE2SS2__cWThf2C9bTzhWtWDzCk8c66bjk',
  id: isNaN(parsedId) ? 7167916864 : parsedId // replace 12345.. with your telegram chat id
};
