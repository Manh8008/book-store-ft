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
            .min(8, { message: 'Mật khẩu cần ít nhất 8 kí tự!' })
            .min(1, { message: 'Mật khẩu là bắt buộc!' }),
        password_confirm: z.string()
    })
    .refine((values) => values.password === values.password_confirm, {
        message: 'Mật khẩu không khớp!',
        path: ['password_confirm']
    })

export const VerificationSchema = z.object({
    verificationCode: z.string().min(1, { message: 'Mã xác thực là bắt buộc!' })
})

export const changePasswordSchema = z
    .object({
        old_password: z.string().min(1, { message: 'Mật khẩu cũ là bắt buộc!' }),
        password: z.string().min(1, { message: 'Mật khẩu mới là bắt buộc!' }),
        confirm_password: z.string().min(1, { message: 'Mật khẩu không khớp!' })
    })
    .refine((values) => values.password === values.confirm_password, {
        message: 'Mật khẩu không khớp!',
        path: ['confirm_password']
    })

export const ForgotPasswordSchema = z.object({
    email: z
        .string()
        .email({ message: 'Email không hợp lệ!' })
        .min(1, { message: 'Email là bắt buộc!' })
})

export const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, { message: 'Mật khẩu cần ít nhất 8 kí tự!' })
            .min(1, { message: 'Mật khẩu là bắt buộc!' }),
        confirm_password: z.string()
    })
    .refine((values) => values.password === values.confirm_password, {
        message: 'Mật khẩu không khớp!',
        path: ['confirm_password']
    })

export const AddressSchema = z.object({
    address_line: z
        .string()
        .min(1, { message: 'Địa chỉ cụ thể là bắt buộc!' })
        .max(255, { message: 'Địa chỉ cụ thể không được vượt quá 255 ký tự!' }),
    name: z
        .string()
        .min(1, { message: 'Tên là bắt buộc!' })
        .max(100, { message: 'Tên không được vượt quá 100 ký tự!' }),
    phone: z
        .string()
        .min(10, { message: 'Số điện thoại cần ít nhất 10 chữ số!' })
        .max(11, { message: 'Số điện thoại không được vượt quá 11 chữ số!' })
        .regex(/^\d+$/, { message: 'Số điện thoại chỉ được chứa chữ số!' }),
    province: z.string().min(1, { message: 'Tỉnh/Thành phố là bắt buộc!' }),
    district: z.string().min(1, { message: 'Quận/Huyện là bắt buộc!' }),
    town: z.string().min(1, { message: 'Phường/Xã là bắt buộc!' })
})

export const resendOtpSchema = z.object({
    email: z
        .string()
        .email({ message: 'Email không hợp lệ!' })
        .min(1, { message: 'Email là bắt buộc!' }),
    otp_code: z.string().min(1, { message: 'Mã xác thực là bắt buộc!' })
})

export const createCatalogSchema = z.object({
    name: z.string().min(1, 'Tên danh mục là bắt buộc'),
    image:
        z.custom <
        File >
        ((v) => v instanceof File,
        {
            message: 'Image is required'
        })
})
