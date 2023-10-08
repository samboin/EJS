import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    const date = new Date();
    const day = date.getDay();

    // 
    
    let type = "a weekday";
    let adv = "its time to work hard";

    if(day == 0 || day == 6){

        let type = "the weekend";
        let adv = "its time to have some fun";
    
    }

res.render("index.ejs" , {
    dayType : type , 
    advice : adv,
});
});

app.listen (port,() =>{
  console.log(`Listening on port ${port}`);
}) 