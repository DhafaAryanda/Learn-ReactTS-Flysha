import prisma from "../../../../../lib/prisma";

export const getMyTickets = async (id: string) => {
  try {
    const data = await prisma.ticket.findMany({
      where: {
        customerId: id,
      },
      select: {
        id: true,
        flight: {
          select: {
            plane: true,
            departureDate: true,
            departureCityCode: true,
            arrivalDate: true,
          },
        },
        seat: {
          select: {
            type: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
