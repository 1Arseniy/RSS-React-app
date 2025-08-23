import z from 'zod';

const typeFiles = ['image/jpeg', 'image/png'];
const maxFileSize = 1024 * 1024 * 5;

const basicSchema = z.object({
  name: z.string().refine((value) => /^[A-Z]/.test(value), {
    message: 'first letter must be [A-Z]',
  }),
  email: z.string().email({ message: 'Invalid email format' }),
  age: z.string().refine((value) => /^[0-9]\d*$/.test(value), {
    message: 'number must be positive',
  }),
  password: z
    .string()
    .refine((password) => /[0-9]/.test(password), {
      message: 'must contain [0-9]',
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'must contain [A-Z]',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'must contain [a-z]',
    })
    .refine((password) => /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(password), {
      message: 'must contain one special character',
    }),
  confirmPassword: z.string(),
  select: z.enum(['Male', 'Female'], { message: 'field is required' }),
  country: z.string().min(1, { message: 'country is required field' }),
});

const nonControlledFields = z.object({
  checkboxNonControlled: z.enum(['on'], { message: 'flag must be checked' }),
  fileNonControlled: z
    .instanceof(File)
    .refine((file) => typeFiles.includes(file.type), {
      message: 'must be image .png or .jpg',
    })
    .refine((file) => file.size < maxFileSize),
});

const controlledFields = z.object({
  checkboxControlled: z.literal(true, { message: 'flag must be checked' }),
  fileControlled: z
    .instanceof(FileList)
    .refine((files) => typeFiles.includes(files?.[0]?.type), {
      message: 'must be image .png or .jpg',
    })
    .refine((files) => files?.[0]?.size < maxFileSize),
});

export const nonControlledSchema = basicSchema
  .merge(nonControlledFields)
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const controlledSchema = basicSchema
  .merge(controlledFields)
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
