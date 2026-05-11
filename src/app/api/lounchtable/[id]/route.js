import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const id = params.id;
    const body = await req.json();

    await prisma.launch.update({
      where: { id },
      data: {
        name: body.name,
        from: body.from,
        to: body.to,
        departureTime: new Date(body.departureTime),
        arrivalTime: new Date(body.arrivalTime),
        phone: body.phone,
        status: body.status === true || body.status === "true",
        image: body.image || [],
      },
    });

    if (body.seatTypes) {
      await prisma.seatType.deleteMany({
        where: { launchId: id },
      });
    }
    if (body.seatTypes.length > 0) {
      await prisma.seatType.createMany({
        data: body.seatTypes.map((st) => ({
          launchId: id,
          name: st.name,
          price: Number(st.price),
          available: st.available,
          bookSeat: 0,
        })),
      });
    }

    const result = await prisma.launch.findUnique({
      where: { id },
      include: { seatTypes: true },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
