import validator from 'validator';

/**
 * Validates and sanitizes contact form request payload.
 * @param {object} body - Request body { name, email, message, bot_field }
 * @returns {{ isValid: boolean, sanitized: object, errors: string[] }}
 */
export const validateContactInput = (body = {}) => {
  const errors = [];
  const rawName = (body.name || '').toString().trim();
  const rawEmail = (body.email || '').toString().trim();
  const rawMessage = (body.message || '').toString().trim();
  const botField = (body.bot_field || body._gotcha || '').toString().trim();

  // Honeypot check for bots
  if (botField.length > 0) {
    return {
      isValid: false,
      isSpam: true,
      sanitized: {},
      errors: ['Spam detected.'],
    };
  }

  // Name validation
  if (!rawName) {
    errors.push('Name is required.');
  } else if (rawName.length < 2) {
    errors.push('Name must be at least 2 characters.');
  } else if (rawName.length > 100) {
    errors.push('Name must be 100 characters or fewer.');
  }

  // Email validation
  if (!rawEmail) {
    errors.push('Email is required.');
  } else if (!validator.isEmail(rawEmail)) {
    errors.push('Please provide a valid email address.');
  } else if (rawEmail.length > 254) {
    errors.push('Email is too long.');
  }

  // Message validation
  if (!rawMessage) {
    errors.push('Message is required.');
  } else if (rawMessage.length < 10) {
    errors.push('Message must be at least 10 characters.');
  } else if (rawMessage.length > 3000) {
    errors.push('Message cannot exceed 3000 characters.');
  }

  // Escape HTML entities to avoid injection
  const sanitized = {
    name: validator.escape(rawName),
    email: validator.normalizeEmail(rawEmail) || rawEmail.toLowerCase(),
    message: validator.escape(rawMessage),
  };

  return {
    isValid: errors.length === 0,
    isSpam: false,
    sanitized,
    errors,
  };
};
