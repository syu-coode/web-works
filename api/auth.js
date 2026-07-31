export default function handler(req, res) {
  const username = "portfolio";
  const password = "web2026";

  const auth = req.headers.authorization;

  if (!auth) {
    res.setHeader(
      "WWW-Authenticate",
      'Basic realm="Portfolio"'
    );
    return res.status(401).send("Authentication required");
  }

  const base64Credentials = auth.split(" ")[1];
  const credentials = Buffer.from(
    base64Credentials,
    "base64"
  ).toString();

  const [user, pass] = credentials.split(":");

  if (user !== username || pass !== password) {
    res.setHeader(
      "WWW-Authenticate",
      'Basic realm="Portfolio"'
    );
    return res.status(401).send("Unauthorized");
  }

  res.status(200).send("OK");
}