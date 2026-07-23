import { z } from 'zod';

export const quoteRequestSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    email: z.union([z.email(), z.literal('')]),
    phone: z.string().trim().max(30),
    locality: z.string().trim().min(2).max(120),
    propertyType: z.enum(['apartment', 'house', 'villa', 'business', 'other']),
    timing: z.enum(['planning', 'soon', 'flexible']),
    preferredContact: z.enum(['email', 'phone', 'whatsapp']),
    message: z.string().trim().min(10).max(2000),
    consent: z.literal('yes'),
    website: z.string().max(0),
  })
  .superRefine((value, context) => {
    if (value.preferredContact === 'email' && !value.email) {
      context.addIssue({
        code: 'custom',
        message: 'An email address is required for email contact.',
        path: ['email'],
      });
    }

    if (['phone', 'whatsapp'].includes(value.preferredContact) && !value.phone) {
      context.addIssue({
        code: 'custom',
        message: 'A phone number is required for phone or WhatsApp contact.',
        path: ['phone'],
      });
    }
  });
