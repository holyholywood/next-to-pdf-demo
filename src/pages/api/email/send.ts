import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import JualInviteUser from "./jual-user-invitation";

const resend = new Resend(process.env.EMAIL_KEY);

export default async function GET(req: NextRequest) {
  try {
    const data = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: "ditotisi.rasyid@praktis.co",
      subject: "Hello",
      react: JualInviteUser(),
    });

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ err });
  }
}
