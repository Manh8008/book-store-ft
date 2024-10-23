import z from 'zod'

export const LoginSchema = z.object({
    email: z
        .string()
        .email({ message: 'Email không hợp lệ!' })
        .min(1, { message: 'Email là bắt buộc!' }),
    password: z.string().min(1, { message: 'Mật khẩu là bắt buộc!' })
})

export const RegisterSchema = z
    .object({
        name: z.string().min(1, { message: 'Tên tài khoản là bắt buộc!' }),
        email: z
            .string()
            .email({ message: 'Email không hợp lệ!' })
            .min(1, { message: 'Email là bắt buộc!' }),
        password: z
            .string()
            .min(6, { message: 'Mật khẩu cần ít nhất 6 kí tự!' })
            .min(1, { message: 'Mật khẩu là bắt buộc!' }),
        confirmPassword: z.string()
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: 'Mật khẩu không khớp!',
        path: ['confirmPassword']
    })

export const VerificationSchema = z.object({
    verificationCode: z.string().min(1, { message: 'Mã xác thực là bắt buộc!' })
})
