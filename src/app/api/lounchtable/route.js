export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const newData = await prisma.lounchTable.create({
      data: {
        lounch_name: body.lounch_name,
        seat_capacity: Number(body.seat_capacity),
        time: body.time,
        status: body.status === true || body.status === "true",
        image: body.image || "",
      },
    });

    return NextResponse.json({ success: true, data: newData });

  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}