export default function handler(req, res) {
  const ADMIN_SECRET = "@Traderparvej@"; // তোমার admin password

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { adminKey, deviceId, days } = req.body;

  if (adminKey !== ADMIN_SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const expiry = Date.now() + days * 24 * 60 * 60 * 1000;
  const rand = Math.floor(Math.random() * 900000 + 100000);
  const payload = `${deviceId}|${expiry}|${rand}`;

  const license = Buffer.from(payload).toString("base64");

  return res.status(200).json({ license });
}
