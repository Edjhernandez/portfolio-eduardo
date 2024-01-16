import { z } from "zod";

// validation for form

const lettersSpacesRegex = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/);
const emailRegex = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
);

export const inputSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please, enter at least 2 characters" })
    .max(20, { message: "Please, enter a maximum of 20 characters" })
    .regex(lettersSpacesRegex, {
      message: "Please, enter only letters and spaces",
    }),
  email: z
    .string()
    .regex(emailRegex, { message: "Please, enter a valid email address" }),
  message: z
    .string()
    .min(2, { message: "Please, enter at least 2 characters" })
    .max(255, { message: "Please, enter a maximum of 255 characters" }),
});
