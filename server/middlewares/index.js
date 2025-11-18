import cors from "cors";
import bodyParser from "body-parser";
import { corsOptions } from "../config/server.js";

// CORS middleware
export const corsMiddleware = cors(corsOptions);

// Body parser middleware
export const bodyParserJson = bodyParser.json();
export const bodyParserUrlencoded = bodyParser.urlencoded({ extended: true });
export const bodyParserMiddleware = [bodyParserJson, bodyParserUrlencoded];

// Request logging middleware
export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${req.method}] ${req.url} - IP: ${req.ip || req.connection.remoteAddress}`);
  next();
};

