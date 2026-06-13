"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(
  prevState: { error: string | null },
  formData: FormData
) {
  const password = formData.get("password");
  const correctPassword = process.env.PASSWORD;

  if (!correctPassword) {
    return { error: "Server configuration error: password not set." };
  }

  if (password === correctPassword) {
    const cookieStore = await cookies();
    cookieStore.set("site_auth_token", "true", { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    
    redirect("/private");
  } else {
    return { error: "Incorrect password. Please try again." };
  }
}
