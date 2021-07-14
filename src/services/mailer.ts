import logger from 'src/utils/logger';
import axios from 'axios';

type MailData = {
  emailTo: string;
  subject: string;
  mailBody: string;
  mailBodyHTML: string;
}

export const sendMail = async ({ emailTo, subject, mailBody, mailBodyHTML }: MailData) => {
  const msg = {
    emailTo,
    subject,
    mailBody,
    mailBodyHTML,
  }

  const mailerUrl = process.env.MAILER_URL;

  try {
    await axios.post(mailerUrl, msg);
    logger.info('Email sent')
  } catch(error) {
    logger.error('Email send failed');
    logger.error(error);
  }
}