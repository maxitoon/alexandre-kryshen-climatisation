import { describe, expect, it } from 'vitest';

import { quoteRequestSchema } from '../src/lib/quote-schema.mjs';

const validRequest = {
  name: 'Camille Martin',
  email: 'camille@example.test',
  phone: '',
  locality: 'Nice 06000',
  propertyType: 'apartment',
  timing: 'planning',
  preferredContact: 'email',
  message: 'Installation pour un appartement de trois pièces.',
  consent: 'yes',
  website: '',
};

describe('quote request schema', () => {
  it('accepts the minimal useful request', () => {
    expect(quoteRequestSchema.safeParse(validRequest).success).toBe(true);
  });

  it('requires email for email contact', () => {
    const result = quoteRequestSchema.safeParse({
      ...validRequest,
      email: '',
      phone: '',
    });
    expect(result.success).toBe(false);
  });

  it('requires a phone number for phone and WhatsApp contact', () => {
    for (const preferredContact of ['phone', 'whatsapp']) {
      const result = quoteRequestSchema.safeParse({
        ...validRequest,
        email: '',
        phone: '',
        preferredContact,
      });
      expect(result.success).toBe(false);
    }

    expect(
      quoteRequestSchema.safeParse({
        ...validRequest,
        email: '',
        phone: '+33 6 00 00 00 00',
        preferredContact: 'whatsapp',
      }).success,
    ).toBe(true);
  });

  it('rejects bots using the honeypot', () => {
    const result = quoteRequestSchema.safeParse({
      ...validRequest,
      website: 'https://spam.example',
    });
    expect(result.success).toBe(false);
  });
});
