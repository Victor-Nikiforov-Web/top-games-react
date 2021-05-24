const mongoose = require("mongoose");

function connectAsync() {
    return new Promise((resolve, reject) => {
        mongoose.connect("***",
            { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(db);
            });
    });
}

async function connectToDatabase() {
    try {
        await connectAsync();
        console.log("We're connected to database on MongoDB");
    }
    catch (err) {
        console.error(err);
    }
}

connectToDatabase();