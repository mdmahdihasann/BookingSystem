import { Prisma } from "@prisma/client";
export async function POST(req){
    const {email, password} = await req.json();

    const user = await Prisma.user.findUnique({
        where: {email}
    })

    if(!user){
        return Response.json(
            {message: "Invalid Credentails"},
            {status: 401}
        )
    }

    const isValid = await comparePassword(password, user.password);

    if(!isValid){
        return Response.json(
            {message: "Invalid Credentails"},
            {status: 401}
        )
    }

    await loginUser(user)
    return Response.json({ message: "Login successful" });
}