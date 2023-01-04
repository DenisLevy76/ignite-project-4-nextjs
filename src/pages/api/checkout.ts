import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prices } = req.body
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })

  if (!prices)
    return res.status(400).json({ error: 'prices not found.' })

  const productsPrices = prices.map((price: string) => ({
    price: price, quantity: 1
  }))

  console.log('test');

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: productsPrices,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  console.log(checkoutSession);


  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}

export default handler
