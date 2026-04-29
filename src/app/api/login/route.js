import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { compare } from "bcryptjs";


export async function POST(req) {
  try {
    const body = await req.json();
    const user = await prisma.user.findUnique({
      where: { email: body.email }
    });

    if (!user) {
      return NextResponse.json({ success: false, message: "user not found" }, { status: 404 });
    }

    const isMatch = await compare(body.password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "wrong password" }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      message: 'Login Successfully',
      user
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


