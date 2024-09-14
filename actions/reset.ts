"use server"

import { ResetSchema } from "@/schemas"

import { getUserByEmail } from "@/data/user"
import * as z from "zod"
import { sendPasswordResetEmail } from "@/lib/mail"
import { generatePasswordResetToken } from "@/lib/token"


export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Invalid email!"};
    }

    const {email} = validatedFields.data;

    const existingUser = getUserByEmail(email);

    //Todo: generate token and reset
    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);

    // Todo: Redirect to login page or set a success message to display to the user that the email has been sent.

    return {success: "Reset password email sent!"};

}