// import * as z from 'zod';

// export const LoginSchema = z.object({
// 	email: z.string({ message: "Некорректный ввод" }).email({
// 		message: "Email обязательное поле"
// 	}),
// 	password: z.string().min(1, { message: "Пароль обязательное поле" }),
// 	rememberMe: z.boolean().optional()
// });

// export const ResetPassSchema = z.object({
// 	email: z.string({ message: "Некорректный ввод" }).email({
// 		message: "Email обязательное поле"
// 	})
// });

// export const NewPassSchema = z
// 	.object({
// 		password: z
// 			.string({ message: "Некорректный ввод" })
// 			.min(8, {
// 				message: "Пароль должен содержать минимум 8 символов"
// 			})
// 			.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!#$%&*?@^-])/, {
// 				message:
// 					"Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ (#?!@$%^&*-)"
// 			}),
// 		confirmPassword: z
// 			.string({
// 				message: "Подтверждение пароля обязательно"
// 			})
// 			.min(8, {
// 				message: "Пароль должен содержать минимум 8 символов"
// 			})
// 	})
// 	.refine(data => data.password === data.confirmPassword, {
// 		message: "Пароли не совпадают",
// 		path: ["confirmPassword"]
// 	});
