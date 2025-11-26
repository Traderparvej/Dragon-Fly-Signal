export default function handler(req, res) {
  try {

    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    // Ensure body exists
    if (!req.body) {
      return res.status(400).json({ success: false, message: "Invalid body" });
    }

    const { username, password } = req.body;

    const CORRECT_USER = "admin";
    const CORRECT_PASS = "11115";

    if (username === CORRECT_USER && password === CORRECT_PASS) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(200).json({ success: false, message: "Wrong credentials" });
    }

  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
