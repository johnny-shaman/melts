describe("test of meltsUp", () => {
    const up = require("../melts.js");
    it("definition up", () => expect(up === Object.assign).toBe(false));
    it("up", () => expect(up({}, {test: 0}).test).toBe(0));
    it("up.c", () => expect(up.c.configurable).toBe(true));
    it("up.w", () => expect(up.w.writable && up.w.configurable).toBe(true));
    it("up.e", () => expect(up.e.enumerable && up.e.configurable).toBe(true));
    it("up.a", () => expect(up.a.writable && up.a.writable && up.a.configurable).toBe(true));
});