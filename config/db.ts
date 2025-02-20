import mysql, { Connection } from "mysql2";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create a single database connection
const connection: Connection = mysql.createConnection({
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
});

console.log("Database Connection Details:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Function to establish MySQL connection
const initiateMysqlConnection = async (): Promise<void> => {
  try {
    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL:", err);
        process.exit(1); // Exit the application if the connection fails
      }
      console.log("Connected to MySQL database");
    });
  } catch (e) {
    throw e;
  }
};

// Export the connection and initialization function
export { connection, initiateMysqlConnection };
