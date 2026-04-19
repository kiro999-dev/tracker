const express = require('express');
const app = express();

app.get('/pixel', (req, res) => {
  const { user_id, campaign } = req.query;

  console.log({
    user_id,
    campaign,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    time: new Date()
  });

  // 1x1 transparent GIF
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
    'base64'
  );

  res.set('Content-Type', 'image/gif');
  res.send(pixel);
});

app.listen(3000, () => console.log('Server running'));
