import { Resend } from "resend";

import type { NextApiRequest, NextApiResponse } from "next";
import JualInviteUser from "./email/jual-user-invitation";

type Data = {
  name: string;
};

const resend = new Resend(process.env.EMAIL_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const dataList: dataListType[] = [];

    for (const user of receiver) {
      const data = await resend.sendEmail({
        from: "admin@ditotisi.com",
        to: user.email,
        subject: "Email Template User Invitation Test",
        react: JualInviteUser({
          company_name: "Apa Aja",
          name: user.name,
          targetRole: "Admin",
        }),
      });

      const list = {
        target_name: user.name,
        target_email: user.email,
        message_code: data.id,
      };

      dataList.push(list);
    }

    return res.json(dataList);
  } catch (err) {
    console.error(err);
    return res.json({ err });
  }
}

type dataListType = {
  target_name: string;
  target_email: string;
  message_code: string;
};
const receiver = [
  {
    name: "Dito new",
    email: "dito.devs@gmail.com",
  },
  {
    name: "Dito new",
    email: "ditotisi.rasyid@praktis.co",
  },
];
