export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.launch.findMany({
    include: {
      seatTypes: true,
    },
  });
  return Response.json(data);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const newData = await prisma.launch.create({
      data: {
        name: body.name,
        from: body.from,
        to: body.to,
        departureTime: new Date(body.departureTime),
        arrivalTime: new Date(body.arrivalTime),
        phone: body.phone,
        startPrice: Number(body.startPrice) || "",
        shortDes: body.shortDes || "",
        description: body.description || "",
        Features: body.Features || [],
        seatTypes: {
          create: body.seatTypes.map((st) => ({
            name: st.name,
            price: Number(st.price),
            available: st.available,
          })),
        },
        status: body.status === true || body.status === "true",
        image: body.image || [],
      },
    });

    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();

    const { id, images } = body;

    if (!id) {
      return NextResponse.json({ error: "ID missing" }, { status: 400 });
    }

    if (images && images.length > 0) {
      for (const img of images) {
        const filePath = path.join(process.cwd(), "public", img);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    }

    await prisma.launch.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
