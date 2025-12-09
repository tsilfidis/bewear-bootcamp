"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";

import { db } from "@/db";
import { auth } from "@/lib/auth";

export const getShippingAddresses = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return [];
  }

  try {
    const addresses = await db.query.shippingAddressTable.findMany({
      where: (shippingAddress) => eq(shippingAddress.userId, session.user.id),
      orderBy: (shippingAddress, { desc }) => [desc(shippingAddress.createdAt)],
    });

    return addresses;
  } catch (error) {
    console.error("Error fetching shipping addresses:", error);
    // Em caso de falha, retorna um array vazio ou lança um erro, dependendo da necessidade de UI
    return [];
  }
};
