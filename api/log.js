export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log("Received data:", data); // view this in Vercel logs
    res.status(200).json({ message: "Data received safely" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
