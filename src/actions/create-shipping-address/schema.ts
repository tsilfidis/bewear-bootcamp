import { z } from "zod";

export const createShippingAddressSchema = z.object({
  email: z.email("E-mail inválido"),
  fullName: z.string().min(1, "O nome completo é obrigatório"),
  cpf: z.string().min(11, "Documento inválido"),
  phone: z.string().min(1, "O celular é obrigatório"),
  zipCode: z.string().min(8, "O CEP é obrigatório"),
  address: z.string().min(1, "O endereço é obrigatório"),
  number: z.string().min(1, "O número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "O bairro é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  state: z.string().min(1, "O estado é obrigatório"),
});

export type CreateShippingAddressSchema = z.infer<
  typeof createShippingAddressSchema
>;
