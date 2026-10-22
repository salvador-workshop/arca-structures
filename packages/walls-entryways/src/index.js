"use strict"

const wallModule = require('./wall')
const wallEntrywayModule = require('./wall-entryway')

const wallsEntrywaysInit = ({ jscad, swcadJs }) => {
    const wall = wallModule.init({ jscad, swcadJs })

    const preLib = {
        ...swcadJs
    }
    preLib.models.structure = {
        wall
    }

    const structure = {
        wall: wallModule.init({ jscad, swcadJs }),
        wallEntryway: wallEntrywayModule.init({ jscad, swcadJs }),
    }

    return structure
}

module.exports = {
    init: wallsEntrywaysInit,
};
