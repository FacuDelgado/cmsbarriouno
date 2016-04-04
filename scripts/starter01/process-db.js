"use strict";
/*
 * Script for cleaning up or recreating the DB
 */
var mongoose = require("mongoose");
var async = require("async");
var colors = require("colors");
var fs = require("fs");
var csv = require("fast-csv");

var keystone = require("keystone");
var Project = keystone.list("Project");
var User = keystone.list("User");
var insertMockupData;
var projectRows = [];

module.exports = function processDb(target, action, extraParam) {
    
    insertMockupData = action === "reset";
    if (!insertMockupData && action !== "clean") {
        console.log("Unknown action: '" + action + "'");
        process.exit(-1);
    }
    
    async.series([
        readProjectsCsv,
        countProjects,
        countUsers,
        removeProjects,
        removeUsers,
        addProjects,
        addUsers
    ], onSeriesFinish);

}
function readProjectsCsv(cb) {
    if (insertMockupData) {
        console.log("Read CSV file".yellow);
        
        // Read CSV file into string
        var csvString = fs.readFileSync(__dirname + "\\projects.csv");
        
        // parse into projectRows array        
        csv.fromString(csvString, { headers: false })
        .on("data", function (data) {
            projectRows.push(data);
        })
        .on("end", function () {
            cb(null, "csv copied to array");
        });
    }
    else {
        cb(null);
    }
}

function countProjects(cb) {
    
    console.log("Count Projects".yellow);
    
    Project.model.count(function onCount(err, doc) {
        
        if (err) {
            
            cb(new Error("Error executing Count Projects " + err.message));
        } else {
            
            cb(null, doc);
        }
    });
}

function countUsers(cb) {
    
    console.log("Count Users".yellow);
    
    User.model.count(function onCount(err, doc) {
        
        if (err) {
            
            cb(new Error("Error executing Count Users " + err.message));
        } else {
            
            cb(null, doc);
        }
    });
}

function removeUsers(cb) {
    
    console.log("Remove Users".yellow);
    
    User.model.remove(function onRemove(err, doc) {
        
        if (err) {
            
            cb(new Error("Error executing Remove Users " + err.message));
        } else {
            
            cb(null, doc);
        }
    });
}

function removeProjects(cb) {
    
    console.log("Remove Projects".yellow);
    
    Project.model.remove(function onRemove(err, doc) {
        
        if (err) {
            
            cb(new Error("Error executing Remove Projects " + err.message));
        } else {
            
            cb(null, doc);
        }
    });
}

function addUsers(cb) {
    
    if (insertMockupData) {
        
        var user = new User.model({ name: "Admin", email: "contacto@tercerplaneta.com", isAdmin: true, isProtected: true });
        console.log(("Adding user: " + user.name).yellow);
        user.save(function (err, user) {
            
            if (err) {
                console.log(("Error!" + err.message).red);
                cb(new Error("Error adding user" + err.message));
            } else {
                cb(null, "User added: " + user.name);
            }
        });
    }
    else {
        cb(null);
    }
}

function addProjects(cb) {
    
    if (insertMockupData) {
        
        async.each(
            projectRows,
            function eachRow(row, cb2) {
                // once for each element 
                var startDate = row[5] ? Date.parse(row[5]): null;
                var project = new Project.model({ order: row[0], code: row[1], name: row[2], description: row[3], started: row[4] === "1", startDate: startDate });
                console.log(("Adding project: " + row[2]).yellow);
                project.save(function (err, product) {
                    if (err) {
                        console.log(("Error!" + err.message).red);
                    }
                    else {
                        console.log(("Added project: " + row[2]).green);
                    }
                    cb2();
                });            },
            function onEnd() {
                // all elements processed
                cb(null, "done adding");
            }
        );
    }
    else {
        cb(null);
    }
}

function onSeriesFinish(err, result) {
    
    if (err) {
        
        console.log(err.bgRed);
        process.exit(1);
    }
    
    console.log(JSON.stringify(result, null, 2).bgGreen);
    
    process.exit(0);
}