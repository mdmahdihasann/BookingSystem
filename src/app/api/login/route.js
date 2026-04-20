import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/hash";
import { loginUser } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return Response.json(
      { message: "Invalid Credentials" },
      { status: 401 }
    );
  }

  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    return Response.json(
      { message: "Invalid Credentials" },
      { status: 401 }
    );
  }

  await loginUser(user);

  return Response.json({ message: "Login successful" });
}