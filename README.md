# melts
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](./LICENSE)
[![npm version](https://badge.fury.io/js/melts.svg)](https://badge.fury.io/js/melts)
[![Maintainability](https://api.codeclimate.com/v1/badges/18c0321897b83ed1703d/maintainability)](https://codeclimate.com/github/johnny-shaman/melts/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/18c0321897b83ed1703d/test_coverage)](https://codeclimate.com/github/johnny-shaman/melts/test_coverage)
[![Build Status](https://travis-ci.org/johnny-shaman/melts.svg?branch=master)](https://travis-ci.org/johnny-shaman/melts)

Object.assign is most important function on javascript

## usage of node.js...

npm install is.modern

and if use in script Ex.

    const up = require("melts");


## usage of browser

git clone or download melts.js;

and if use on web Ex.

    <script src="myjsFolder/melts.js"></script>
    

## usage of workers

git clone or download melts.js;

and if use on woker Ex.

    importScripts(myjsFolder/melts.js, ...other)


## melts is Useful for Object.defineProperties

up === Object.assign.clone

up.c == {configurable: true}

up.e == {configurable: true, enumerable: true}

up.w == {configurable: true, writable: true}

up.a // allow all


Ex1:

    Object.defineProperties(any, {
        other: up(up.c, {
            get () {
                ...
            }
            set (v) {
                ...
            }
        }),

        mother: up(up.e, {
            value: "Oh Mom ?"
        }),

        father: up(up.w {
            value: "Oh Dad ?"
        }),

        another: up(up.a, {
            value: 10
        })
    })

and more ...

    let MyConstruction = up(function (o) {
        up(this, o);
    }.prototype, {
        me () {
            this.keys.forEach((k) => console.log("k" + this[k]));
        }
    }).constructor;


If Object.assign is shorten then it useful

It's enjoy hacking!