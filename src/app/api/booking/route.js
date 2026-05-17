import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const newBooking = await prisma.booking.create({
      data: {
        userId: body.userId,
        launchId: body.launchId,
        passengerName: body.passengerName,
        passengerPhone: body.passengerPhone,
        seatNumber: body.seatNumber,
        seatType: body.seatType,
        bookingDate: new Date(body.bookingDate),
        price: Number(body.price),
        status: body.status || "PENDING",
      },
    });

    return NextResponse.json(newBooking);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Booking Failed" }, { status: 500 });
  }
}
