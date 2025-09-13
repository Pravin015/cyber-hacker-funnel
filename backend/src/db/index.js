import mysql from "mysql2/promise";

const connectDB = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 3306, // Add port if Railway gives a specific one
        connectTimeout: 10000, // wait longer to avoid early timeout
      });

      console.log("✅ MySQL database connected successfully!");
      return connection;
    } catch (error) {
      console.error(
        `❌ DB connection failed [${i + 1}/${retries}]: ${error.message}`
      );
      if (i < retries - 1) {
        console.log(`🔁 Retrying in ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("❌ All retries failed. Exiting.");
        process.exit(1);
      }
    }
  }
};

export default connectDB;
