import express from "express";

const app=express();

// app.get("/",(req,res) => {
//     res.send("server is running")
// })


app.get("/api/jokes",(req,res) => {
    const jokes=[
        {
            id:1,
            tittle:"tittle no 1",
            content:"this is 1st joke"
        },
        {
            id:2,
            tittle:"tittle no 2",
            content:"this is 2nd joke"
        },
        {
            id:3,
            tittle:"tittle no 3",
            content:"this is 3rd joke"
        }


    ]
    res.json(jokes);
})

const port=process.env.PORT ||3000;

app.listen(port,()=>{
    console.log("app is listen on http://localhost:3000");

});