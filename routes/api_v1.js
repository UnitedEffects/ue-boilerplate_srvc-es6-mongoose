import express from 'express';
import email from '../services/yourservice/api';
import log from '../services/log/api';

const pJson = require('../package.json');

const router = express.Router();

/**
 * You'll want to change these values
 */
router.get('/', (req,res) => {
    res.json({
        service: 'Boilerplate Es6 MongoDB via Mongoose Node Service',
        git: 'https://github.com/UnitedEffects/ue-boilerplate_srvc-es6-mongoose',
        api: 'REST',
        version: pJson.version,
        currentMaintainers: pJson.contributors
    });
});

/* Your API Calls */
router.get('/helloworld', email.helloworld);

/**
 * Log API Calls
 */
router.get('/logs', log.getLogs);
router.get('/logs/:code', log.getLogByCode);
router.get('/logs/:code/:timestamp', log.getLog);
router.post('/logs', log.writeLog);

export default router;
