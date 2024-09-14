import prisma from "@/lib/db";

export const getPasswordResetToken = async (email: string) => {

    try {
        const passwordResetToken = await prisma.passwordResetToken.findFirst({
            where: { email }
        });
        return passwordResetToken;
    } catch (error) {
        return null;
    }
};
