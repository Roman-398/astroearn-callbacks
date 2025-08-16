// api/reward.js
export default async function handler(req, res) {
  try {
    const params = req.method === 'GET' ? req.query : req.body;
    const { user_id, amount, tx, transaction_id, status } = params;
    console.log('BitLabs reward callback', { user_id, amount, tx: tx || transaction_id, status });
    return res.status(200).send('OK');
  } catch (e) {
    console.error('reward error', e);
    return res.status(500).send('ERROR');
  }
}
