const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');

router.use('/', routes);
router.use('/api', apiRoutes);

module.exports = router;