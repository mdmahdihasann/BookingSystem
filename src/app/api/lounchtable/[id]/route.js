import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const id = params.id;
    const body = await req.json();

    const updatedData = await prisma.launch.update({
      where: { id },
      data: {
        name: body.name,
        from: body.from,
        to: body.to,
        departureTime: new Date(body.departureTime),
        arrivalTime: new Date(body.arrivalTime),
        seatTypes: {
          create: body.seatTypes.map((st) => ({
            name: st.name,
            price: Number(st.price),
            available: Number(st.available),
          })),
        },
        phone: body.phone,
        status: body.status === true || body.status === "true",
        image: body.image,
      },
    });

    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
