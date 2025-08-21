import z from 'zod';

const typeFiles = ['image/jpeg', 'image/png'];

const formSchema = z
  .object({
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
      .refine(
        (password) => /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(password),
        {
          message: 'must contain one special character',
        }
      ),
    confirmPassword: z.string(),
    select: z.enum(['Male', 'Female'], { message: 'field is required' }),
    checkbox: z.enum(['on'], { message: 'flag must be checked' }),
    country: z.string().min(1, { message: 'field is required' }),
    file: z.instanceof(File).refine((img) => typeFiles.includes(img.type), {
      message: 'must be image .png or .jpg',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export default formSchema;
