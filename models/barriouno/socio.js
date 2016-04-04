"use strict";
/*
 * Model for Footer entity
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;

// initialise the model
var Socio = new keystone.List("Socio", {
    map: { name: "familia" },
    defaultColumns: "familia, nombre1, dni1",
    label: "Socio"
});

// add fields
Socio.add({
    familia: {
        type: Types.Text,
        label: "Apellido de familia"
    },
    telefono1: {
        type: Types.Text,
        label: "Telefono de la familia"
    },
    direccion: {
        type: Types.Text,
        label: "Direccion"
    },
    nombre1: {
        type: Types.Text,
        label: "Nombre de titular"
    },
    email1: {
        type: Types.Text,
        label: "Email del titular"
    },
    dni1: {
        type: Types.Text,
        label: "DNI del titular"
    },
    nacimiento1: {
        type: Types.Text,
        label: "Fecha de Nac. del titular"
    }
});


// register the model with keystone
Socio.register();

/* this module does not export anything */