import express from "express";

const app =express();
require("dotenv").config();

app.listen(5004,()=>{
    console.log("port number '5004' started");
});