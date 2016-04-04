"use strict";
/*
 * Stand-alone generic script that calls a process-db.js script for the selected target database, i.e. "starter01"
 * Usage (scripts)
 *      npm run clean-db starter01         // cleans up DB
 *      npm run reset-db starter01         // cleans up DB and fills with sample data
 */

var mongoose = require("mongoose");
var dbc = require("../libs/db-connect.js");
var keystone = require("keystone");
keystone.set("mongoose", mongoose);
require("dotenv").load();

// parse parameters
var action = process.argv[2];
var target = process.argv[3];
var extraParam = process.argv[4];  // optional extra param, i.e.:  npm run reset-db starter01 demo
if (!action || !target) {
    console.log("Both action and target are required.");
    process.exit(-1);
}

// initialise models for the current target
require("../models/" + target);

// initialise process-db for the current target 
var dbProcessor = require("./" + target + "/process-db.js");

// get connection string and connect db
var dbUri = process.env[target + "_URI"];
if (!dbUri) {
    console.log("Missing URI for target '" + target + "'");
    process.exit(-1);
}

// invoke the processor once the connection is started
mongoose.connection.on("connected", function onDBConnectionSuccess() {
    dbProcessor(target, action, extraParam);
});

dbc.init(dbUri);
