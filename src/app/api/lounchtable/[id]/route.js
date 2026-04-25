import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const id = params.id;
    const body = await req.json();

    const updatedData = await prisma.lounchTable.update({
      where: { id },
      data: {
        lounch_name: body.lounch_name,
        seat_capacity: Number(body.seat_capacity),
        time: body.time,
        phone: body.phone,
        status: body.status === true || body.status === "true",
        image: body.image || "",
      },
    });

    return NextResponse.json({ success: true, data: updatedData });

  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}