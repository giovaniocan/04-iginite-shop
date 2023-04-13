import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

interface Request {
  pricesIds: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pricesIds } = req.body as Request;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!pricesIds) {
    return res.status(400).json({ error: 'Prices not found.' });
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: 'payment',
    line_items: pricesIds.map(price => {
      return {
        price: price ,
        quantity: 1
      }
    })
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}