// import { PrismaClient } from "@prisma/client";

// declare global{
//     var prisma: PrismaClient | undefined;
// }

// //if the app is running on local env then next.js will not create PrismaClient
// //again and again, PrismaClient is saved to global variable which is not affected by 
// //next.js hot reload.

// export const db = globalThis.prisma || PrismaClient();

// if(process.env.NODE_ENV !== "production") globalThis.prisma = db;


import { PrismaClient } from '@prisma/client';

declare global{
    var prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;