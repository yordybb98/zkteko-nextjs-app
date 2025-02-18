import winston from "winston";

// Define log format
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

// Create Winston logger
const logger = winston.createLogger({
    level: "info", // Default log level
    format: winston.format.combine(winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston.format.colorize(), logFormat),
    transports: [
        new winston.transports.Console(), // Logs to console
        new winston.transports.File({ filename: "logs/error.log", level: "error" }), // Logs errors to file
        new winston.transports.File({ filename: "logs/combined.log" }), // Logs everything to file
    ],
});

// Export logger
export default logger;
