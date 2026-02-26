import jwt from "jsonwebtoken";
export async function jwtAuth(req, res, next){
    const header = req.headers.authorization
    const token = header.split(" ")[1];
    if (!token) return res.status(401).send("No token");

    try {
        jwt.verify(token, "secret");
        next();
    } catch {
        res.status(401).send("Invalid token");
    }
}