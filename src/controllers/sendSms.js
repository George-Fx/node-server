import Twilio from 'twilio';
import {
  TWILIO_SERVICE_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
} from '../config/index.js';

const client = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const sendSms = async (req, res) => {
  try {
    const {phone} = req.body;
    await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verifications.create({to: phone, channel: 'sms'})
      .then((verification) => {
        // res.status(201).send(verification);
        res.status(201).json({status: verification.status});
      });
  } catch (error) {
    res.status(500).json({error});
  }
};
