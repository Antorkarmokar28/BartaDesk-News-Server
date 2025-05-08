import { z } from "zod";

const registerUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z
      .enum(["admin", "editor", "reporter"])
      .optional()
      .default("reporter"),
    bio: z.string().optional(),
    profilePhoto: z.string().optional(),
  }),
});

const updateRegisterUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    email: z.string().email("Invalid email address").optional(),
    password: z.string().min(6, "Password must be at least 6 characters").optional(),
    role: z
      .enum(["admin", "editor", "reporter"])
      .optional()
      .default("reporter"),
    bio: z.string().optional(),
    profilePhoto: z.string().optional(),
  }),
});

export const UserValidationSchema = {
  registerUserValidationSchema,
  updateRegisterUserValidationSchema
};
