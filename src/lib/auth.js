import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// token generate
export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

// login করলে cookie set
export async function loginUser(user) {
  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
}

// token verify করার জন্য (middleware later use করবো)
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}