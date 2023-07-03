import z from 'zod'

export const babyPresentationSchema = z.object({
  motherName: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    .transform((value) => {
      return value
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(' ')
    }),
  fatherName: z.string().transform((value) => {
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }),
  babyName: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    .transform((value) => {
      return value
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(' ')
    }),
  phone: z
    .string()
    .min(10, { message: 'O telefone deve ter pelo menos 10 caracteres' })
    .transform((value) => {
      return '+55' + value.replace(/\D/g, '')
    }),
  babyAge: z.string(),
})
