import mongoose from "mongoose";

const connectionURL =
  "mongodb+srv://admin-user:6321@task-management.m80wlb2.mongodb.net/task-management?retryWrites=true&w=majority";

const connectDB = async () => {
  return mongoose.connect(connectionURL as string);
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

export default connectDB;
