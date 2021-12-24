import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import connectDb from "../../services/MongoClient";

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
        const { id, coin, iconUrl, targetValue, isActive } = req.body;

        const newAlarm = await dbConnect.collection("users").updateOne(
          { email },
          {
            $push: {
              alarms: {
                id,
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

        const { id, coin, targetValue, isActive } = req.body;

        const newAlarm = dbConnect.collection("users").updateOne(
          { email },
          {
            id,
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
    case "DELETE":
      try {
        const session = await getSession({ req });
        const { email } = session.user;
        const { dbConnect } = await connectDb();
        const { id } = req.body;
        const removedAlarm = await dbConnect.collection("users").updateOne(
          { email },
          {
            $pull: {
              alarms: { id },
            },
          }
        );
        return res.status(200).json({ success: true, data: removedAlarm });
      } catch (error) {}
    default:
  }
};
