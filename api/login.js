export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Client থেকে username এবং password নেওয়া হবে
  const { username, password } = req.body;

  // ✅ শুধুমাত্র এখানে server-side এ password থাকে
  const correctUser = "Dragonfly11";
  const correctPass = "@Dragon";

  // Login যাচাই
  if (username === correctUser && password === correctPass) {
    return res.status(200).json({ success: true });
  }

  // ভুল হলে
  return res.status(401).json({ success: false });
}
