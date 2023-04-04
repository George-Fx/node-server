import express from 'express';

import {sendSms} from '../controllers/sendSms.js';
import {checkSms} from '../controllers/checkSms.js';

export const router = express.Router();

router.post('/send-sms', sendSms);
router.post('/check-sms', checkSms);
