import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const body = await req.json();
    const regData = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        password: await hashPassword(body.password),
        image: body.image,
        role: "user",
        isActive: body.isActive,
        bookings: body.bookings
          ? { create: body.bookings }
          : undefined
      }
    })
    return NextResponse.json({ success: true, data: regData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}