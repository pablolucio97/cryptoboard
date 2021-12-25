import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import connectDb from "../../services/MongoClient";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { dbConnect } = await connectDb();
  switch (req.method) {
    case "GET":
      try {
        const session = await getSession({ req });
        const { email } = session.user;
        const wallet = await dbConnect.collection("users").findOne({ email });

        return res.status(200).json({ success: true, data: wallet });
      } catch (error) {
        console.log(error);
      }
      break;
    case "POST":
      try {
        const session = await getSession({ req });
        const { email } = session.user;

        const {
          id,
          coin,
          iconUrl,
          quantity,
          valueInBuyDate,
          buyDate,
          investedValue,
        } = req.body;

        const newCrypto = await dbConnect.collection("users").updateOne(
          { email },
          {
            $push: {
              cryptos: {
                id,
                coin,
                iconUrl,
                quantity,
                valueInBuyDate,
                buyDate,
                investedValue,
              },
            },
          }
        );

        return res.status(200).json({ success: true, data: newCrypto });
      } catch (error) {}
    default:
  }
};
