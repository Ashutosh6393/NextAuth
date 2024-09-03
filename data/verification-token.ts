import prisma from "@/lib/db"
export const getVerificationTokenByEmail = async (email: string): Promise<any> => {
    try {
        const verificationToken = await prisma.verificationToken.findFirst({
            where: {email}
        })
    } catch (error) {
        return null;
    }
}


export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verificationToken = await prisma.verificationToken.findUnique({
            where: {token}
        })
    } catch (error) {
        return null;
    }
}