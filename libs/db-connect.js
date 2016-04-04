"use strict";
/*
 * Start a MongoDB connection - Used in the standalone scripts for DB maintenance
 */

// prepare MongoDB / mongoose
var mongoose = require("mongoose");
var dbError = false;
var connectionString;

// on DB error, activate error flag and try to reconnect
mongoose.connection.on("error", function (error) {
    console.log(error);
    dbError = error;
    setTimeout(startDB, 10000);
});

// on DB successfully opened, reset flag
mongoose.connection.on("connected", function (callback) {
    console.log("DB is connected - " + connectionString);
    dbError = false;
});

// store connection string and connect (first time)
function init(connString) {
    connectionString = connString;
    
    // first connection to the DB
    startDB();
}

// init connection (first time or after failure)
function startDB() {
    console.log("Trying to connect to " +  connectionString);
    mongoose.connect(connectionString);
}

// exports
module.exports = {
    init: init,
    getError: function () { return dbError; }
};
