export function middleware(request) {
  const basicAuth = request.headers.get("authorization");

  const username = "portfolio";
  const password = "web2026";

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];

    const [user, pass] = Buffer.from(
      authValue,
      "base64"
    )
      .toString()
      .split(":");

    if (user === username && pass === password) {
      return;
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Portfolio"',
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};