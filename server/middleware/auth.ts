import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("NO TOKEN FOUND");
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error: any) {
    console.log("AUTH ERROR:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default auth;
