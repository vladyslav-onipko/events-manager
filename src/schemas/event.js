import { z } from 'zod';

import { EVENT_CATEGORYES, EVENT_STATUSES } from '../utils/constants';

export const eventSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(50, { message: 'Must be 50 or fewer characters long' }),
  description: z
    .string({ required_error: 'Description is required' })
    .min(10, { message: 'Must be 10 or more characters long' })
    .max(100, { message: 'Must be 100 or fewer characters long' }),
  category: z.enum(EVENT_CATEGORYES, { message: 'Category should be selected from above' }),
  status: z.enum(EVENT_STATUSES, { message: 'Status should be selected from above' }),
  date: z.string().refine((date) => new Date(date) >= new Date(), {
    message: 'Date should be selected and cannot be in the past',
  }),
});
