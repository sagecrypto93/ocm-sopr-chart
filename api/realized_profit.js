export default async function handler(req, res) {
  const token = "0d866412-d29c-41ed-a044-7be4fb52478a";
  const endpoint = `https://api.researchbitcoin.net/v1/realized_profit?token=${token}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
