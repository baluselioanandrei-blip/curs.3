// Checks an e-mail and password and resolves to true when they match.
//
// DEV STUB: there is no backend yet, so this accepts one demo account.
// Replace the body with a call to the real login endpoint when it exists;
// the login page only depends on signIn(email, password) returning a Promise.
const DEMO_ACCOUNT = { email: "demo@example.com", password: "demo1234" };

function signIn(email, password) {
  const ok = email.trim().toLowerCase() === DEMO_ACCOUNT.email
    && password === DEMO_ACCOUNT.password;
  return Promise.resolve(ok);
}
