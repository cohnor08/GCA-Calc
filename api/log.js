// api/log.js
export default function handler(req, res) {
  // Allow requests from any origin (for GitHub Pages frontend)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end(); // preflight check
    return;
  }

  if (req.method === 'POST') {
    const data = req.body;
    console.log("GCA Submission:", data); // view in Vercel logs
    res.status(200).json({ message: "GCA logged successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
