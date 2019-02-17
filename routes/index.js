const express = require('express');
const router = express.Router();
const whitelisted = process.env.WHITELISTED || 'mib';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/custom-code/iris_license.php', function (req, res) {
  const code = req.query.activation_code;
  const fp = req.query.machine_fingerprint;
  const version = req.query.version;
  if (code === whitelisted) res.send('SUCCESS');
  else res.send('NO_SUCH_CODE');
});

module.exports = router;
