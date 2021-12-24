import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import connectDb from "../../services/MongoClient";
import users from "./users";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  switch (req.method) {
    case "GET":
      try {
        const session = await getSession({ req });
        const { email } = session.user;
        const { dbConnect } = await connectDb();
        const alarms = await dbConnect.collection("users").findOne({ email });
        return res.json({ alarms });
      } catch (error) {
        console.log(error);
      }
      break;
    case "POST":
      try {
        const { dbConnect } = await connectDb();
        const session = await getSession({ req });
        const { email } = session.user;
        const { coin, iconUrl, targetValue, isActive } = req.body;

        const newAlarm = await dbConnect.collection("users").updateOne(
          { email },
          {
            $push: {
              alarms: {
                coin,
                iconUrl,
                targetValue,
                isActive,
              },
            },
          }
        );
        return res.send(res.json({ success: true, data: newAlarm }));
      } catch (error) {
        console.log(error);
      }
    case "UPDATE":
      try {
        const session = await getSession({ req });
        const { email } = session.user;
        const { dbConnect } = await connectDb();

        const { coin, targetValue, isActive } = req.body;

        const newAlarm = dbConnect.collection("users").updateOne(
          { email },
          {
            coin,
            targetValue,
            isActive,
          }
        );
        res.status(200).json({ success: true, data: { newAlarm } });
      } catch (error) {
        console.log(error);
      }
      break;
    default:
  }
};
