const express = require('express');
const http = require('http');
const app = express();
const appService = require('./app.service');

app.get('/helptext', async (req, res) => {
  const lang = req.query.lang ? req.query.lang : 'en';
  const pageId = req.query.pageId ? req.query.pageId : '/home';
  const helpInfo = await appService.findByLangAndPageId(lang, pageId);
  res.status(200).send(helpInfo.helptext);
});

const httpserver = http.Server(app);
httpserver.listen(process.env.PORT, () => {
  console.log(`Node App started on port: ${process.env.PORT}`);
});
