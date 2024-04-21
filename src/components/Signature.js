// signature.js
import crypto from 'crypto';

export const generateSignature = (data, secretKey) => {
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(data);
  return hmac.digest('base64');
};
