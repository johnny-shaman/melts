(() => {
    "use strict";
    const is = this.is || require("is.modern");
    const up = Object.assign.bind();
    up(up, {c: {configurable: true}});
    
    up(up, {
        w: up(up.c, {writable: true}),
        e: up(up.c, {enumerable: true})
    });
    
    up(up, {a: up(up.w, up.e)});

    is.server && (module.exports = up);
    is.server || up(this, {up});
})();