import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import "dotenv/config";

const tenantId = process.env.AZURE_TENANT_ID;

export const requireAuth = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys`,
  }),
  audience: process.env.AZURE_CLIENT_ID,
  issuer: `https://login.microsoftonline.com/${tenantId}/v2.0`,
  algorithms: ["RS256"],
});
