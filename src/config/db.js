import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const initDBConnection = async () => {
    if (!MONGO_URI) {
        console.error("MONGO_URI is not defined in the environment variables.");
        process.exit(1);
    }

    try {
        await connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to the MongoDB database.");
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }
};

export default initDBConnection;
