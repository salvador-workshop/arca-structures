"use strict"

const wallModule = require('./wall.js')
const wallEntrywayModule = require('./wall-entryway.js')

const wallsEntrywaysInit = ({ jscad, swcadJs }) => {
    const wallsEntryways = {
        wall: wallModule.init({ jscad, swcadJs }),
        wallEntryway: wallEntrywayModule.init({ jscad, swcadJs }),
    }

    return wallsEntryways
}

module.exports = {
    init: wallsEntrywaysInit,
};
