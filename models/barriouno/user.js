"use strict";
/*
 * Model for User entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;

// initialise the model
var User = new keystone.List("User", {
    // use nodelete to prevent people from deleting the demo admin user

});

User.add(
    {
        name: { type: Types.Text, required: true, index: true },
        email: { type: Types.Email, initial: true, required: true, index: true },
        password: { type: Types.Password, initial: true }
    },
    "Permissions",
    {
        isAdmin: { type: Boolean, label: "Can access Keystone" }
    });

// Provide access to Keystone
User.schema.virtual("canAccessKeystone").get(function () {
    return this.isAdmin;
});


// register the model with keystone
User.register();

/* this module does not export anything */