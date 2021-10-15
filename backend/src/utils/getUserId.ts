import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

interface DecodedJwt extends JwtPayload {
  userId: string;
}

export default (request: Request) => {
  return new Promise<DecodedJwt>((resolve, reject) => {
    jwt.verify(
      (request.headers.authorization ?? "").split(" ")[1],
      process.env.JWT_SECRET_KEY ?? "",
      (err, decoded) => {
        if (err) {
          reject(null);
        }
        resolve(decoded as DecodedJwt);
      }
    );
  });
};
