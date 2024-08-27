"use server";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { airplanneFormSchema } from "./validation";
import { redirect } from "next/navigation";
import { uploadFile } from "@/lib/supabase";
import prisma from "../../../../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveAirplane(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const values = airplanneFormSchema.safeParse({
    name: formData.get("name"),
    code: formData.get("code"),
    image: formData.get("image"),
  });

  if (!values.success) {
    const errorDesc = values.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const uploadedFile = await uploadFile(values.data.image);

  if (uploadedFile instanceof Error) {
    return {
      errorTitle: "Failed to upload file",
      errorDesc: ["Terjadi masalah, silahkan coba lagi"],
    };
  }

  try {
    const data = await prisma.airplane.create({
      data: {
        name: values.data.name,
        code: values.data.code,
        image: uploadedFile as string,
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to insert data",
      errorDesc: ["Terjadi masalah, silahkan coba lagi"],
    };
  }

  revalidatePath("/dashboard/airplanes");
  redirect("/dashboard/airplanes");
}
