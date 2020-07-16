var expr=require('express');
const hbs=require('hbs');
const _=require('lodash');
const fs=require('fs');
var app=expr();

const port=process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials')   

app.use((req,res,next)=>{  
    console.log("Sudhir Project is Running"+new Date().getDate());
    next();
});

//Mam used middleware function in below and above statement block
app.use((req,res,next)=>{   
    var log=`${req.method} ${req.url}`;
    console.log("Project is Running ( Method | URL):",log);
    fs.appendFile('somefile.log',log+'\n',(err)=>{
        if(err)
        {
            console.log("Some Issue");
        }
    });
    next();
}) 


app.get('/',(req,res)=>{
    
    res.render('index.hbs');
});

app.get('/trip',(req,res)=>{
    res.render('trip.hbs',{
        
            visit:'Paris(France)',
            p_name:'J Retham, Amartya Saha, Surya',
            date:'10 July 2020',
            time:'12:00 AM',
            Departure:'Hyderabad'
    });
    
});

app.get('/about',(req,res) => {
  res.render('about.hbs');
});


app.get('/cancel',(req,res) => {
  res.render('cancel.hbs');
});

app.get('/update',(req,res) => {
  res.render('updation.hbs');
});

app.get('*',(req,res)=>{
    res.send("<br><center><h1>Error 404: Page Not Found</h1><center>")
})

 app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});