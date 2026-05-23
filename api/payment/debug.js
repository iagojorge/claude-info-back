import { MercadoPagoConfig, Payment } from 'mercadopago';

const mpClient = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || 'test',
  options: { timeout: 5000 }
});
const paymentClient = new Payment(mpClient);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const payment = await paymentClient.create({
      body: {
        transaction_amount: 19.90,
        description: 'Debug PIX',
        payment_method_id: 'pix',
        payer: { email: 'debug@test.com' }
      }
    });

    // Return full structure with all keys
    return res.status(200).json({
      _full_response: payment,
      _keys: Object.keys(payment),
      point_of_interaction_keys: payment.point_of_interaction ? Object.keys(payment.point_of_interaction) : null,
      transaction_details_keys: payment.transaction_details ? Object.keys(payment.transaction_details) : null,
      pix_keys: payment.pix ? Object.keys(payment.pix) : null
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
