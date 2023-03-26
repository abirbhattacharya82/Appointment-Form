const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url=""; // connection url for Mongo DB
const port = process.env.PORT || 8000;
const app=express();

app.get('/fix_appointment',(req,res)=>{
    const name=req.query.name;
    const email=req.query.email;
    const phone=req.query.phone;
    const date=req.query.date;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('Appointment');
        var myobj = { _id:{email:email}, name:name, phone:phone, date:date };
        dbo.collection('appointment-collection').insertOne(myobj, function (err, result) {
            if (err)
            {
                res.send(
                    {
                        "status":"404"
                    }
                );
                db.close();
            }
            else
            {
                res.send(
                    {
                        "status":"200"
                    }
                )
            }
        });
    });

});

app.listen(port);