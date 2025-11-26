export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { username, password } = req.body;

  // ---- YOUR LOGIN DETAILS ----
  const CORRECT_USER = "admin";
  const CORRECT_PASS = "11115"; // যেটা তুমি ব্যবহার করবে

  if (username === CORRECT_USER && password === CORRECT_PASS) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(200).json({ success: false });
  }
}
