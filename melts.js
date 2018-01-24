(() => {
    "use strict";
    const is = require("is.modern");
    const up = Object.assign(Object.assign.bind(), {
        w: {configurable: true, writable: true},
        e: {configurable: true, enumerable: true},
        c: {configurable: true},
        a: {configurable: true, writable: true, enumerable: true}
    });
    
    is.server && (module.exports = up);
    is.server || up(this, {up});
})();