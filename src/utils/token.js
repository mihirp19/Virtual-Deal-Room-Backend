import pkg from "jsonwebtoken";
const { sign } = pkg;

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "access-token-secret";

const ACCESS_TOKEN_EXPIRES_IN = "1h";

export function generateAccessToken(payload) {
  return sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
}
