export async function onRequest(context) {

  const username = "k_syuto_portfolio";
  const password = "0922password";

  const auth = context.request.headers.get("Authorization");

  if (!auth) {
    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Portfolio"',
      },
    });
  }

  const base64 = auth.split(" ")[1];
  const decoded = atob(base64);

  if (decoded !== `${username}:${password}`) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Portfolio"',
      },
    });
  }

  return context.next();
}