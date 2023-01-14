import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connect(){
    const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri)
    log.info("Database connected successfully 🚀");
    
  } catch (error) {
    log.error("could not connect to database");
    process.exit(1);
    
  }
}

export default connect;