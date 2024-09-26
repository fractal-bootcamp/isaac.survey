import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

const main = async () => {
    const addResponse = await prisma.responses.create({
        data: {
            Name: "Prisma",
            Response: "123456678",
        },
    });
    console.log(addResponse);
};

main();

