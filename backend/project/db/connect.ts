import mongoose from "mongoose";

async function Connect(url: string) {
    try {
        await mongoose.connect(url);
        console.log(`Database Connected Succefully...😁😁😁😁😁😁😁😁`);
    }
    catch (error: unknown) {
        console.log(`Database not Connected 🤬🤬🤬🤬🤬🤬🤬🤬🤬`);
        console.error(error);
        process.exit(1);
    }
}

export default Connect