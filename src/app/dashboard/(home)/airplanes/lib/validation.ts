import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const MAX_FILE_SIZE = 2 * 1024 * 1024;

export const airplanneFormSchema = z.object({
  name: z
    .string({ required_error: "Nama Pesawat tidak boleh kosong" })
    .min(4, { message: "Nama Pesawat minimal 4 karakter" }),
  code: z
    .string({ required_error: "Kode Pesawat tidak boleh kosong" })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, { message: "Format kode harus [XXX-000]" }),
  image: z
    .any()
    .refine((file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Format file tidak didukung",
    })
    .refine((file: File) => file.size <= MAX_FILE_SIZE, {
      message: "Ukuran file terlalu besar",
    }),
});
