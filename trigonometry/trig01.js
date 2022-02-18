document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    // center the sine wave
    ctx.translate(10, height / 2); // translate the context downwards because y will be negative at some points
    ctx.scale(1, -1); // vertically flip the context because in the browser top-left corner is the origin
    var computation = {};
    /**
     * draw a sine wave when the hypotenuse is 100 units long.
    */
    for (var h = 100; h < 1000; h += 100) {
        for (var radians = 0; radians < Math.PI * 2; radians += 0.01) {
            var sine = Math.sin(radians);
            var y = sine * h;
            var x = radians * h;
            // draw a point
            ctx.fillRect(x, y, 3, 3);
            computation["radians(".concat(radians, ")")] = { sine: sine, x: x, y: y };
        }
    }
    // log the values computed values in browser's console.
    console.table(computation);
});
