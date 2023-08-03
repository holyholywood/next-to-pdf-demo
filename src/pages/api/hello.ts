import { Resend } from "resend";

import type { NextApiRequest, NextApiResponse } from "next";
import JualInviteUser from "./email/jual-user-invitation";

type Data = {
  name: string;
};

const resend = new Resend(process.env.EMAIL_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const data = await resend.sendEmail({
      from: "ditotisi@ditotisi.com",
      to: "ditotisi.rasyid@praktis.co",
      subject: "Hello",
      react: JualInviteUser(),
    });

    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.json({ err });
  }
}
