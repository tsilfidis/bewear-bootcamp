import { z } from "zod";

export const finishOrderSchema = z.object({
  shippingAddressId: z.string(),
  items: z.array(
    z.object({
      productVariantId: z.string(),
      quantity: z.number().min(1),
    }),
  ),
});

export type FinishOrderSchema = z.infer<typeof finishOrderSchema>;
