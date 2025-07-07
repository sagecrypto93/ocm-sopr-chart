export default async function handler(req, res) {
  const token = "0d866412-d29c-41ed-a044-7be4fb52478a";

  const { category, field } = req.query;

  if (!category || !field) {
    return res.status(400).json({ error: "Missing category or field" });
  }

  const endpoint = `https://api.researchbitcoin.net/v1/${category}/${field}?token=${token}&output_format=json&date_field=2023-01-01`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data || data.status === "fail") {
      return res.status(500).json({ error: "Failed to fetch valid data", details: data });
    }

    res.status(200).json(data.data);
  } catch (err) {
    res.status(500).json({ error: "Fetch error", details: err.message });
  }
}
