import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

  export async function GET(req, { params }) {
    const { id } = await params;
    const data = await prisma.booking.findUnique({
      where: {
        id: id
      }
    });
    return Response.json(data);
  }
