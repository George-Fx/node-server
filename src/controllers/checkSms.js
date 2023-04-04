import Twilio from 'twilio';
import {
  TWILIO_SERVICE_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
} from '../config/index.js';

const client = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const checkSms = async (req, res) => {
  try {
    const {phone, code} = req.body;
    await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: phone,
        code: code,
      })
      .then((verification_check) => {
        res.status(201).json({status: verification_check.status});
      });
  } catch (err) {
    res.status(422).send(err.message);
  }
};
