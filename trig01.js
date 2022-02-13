document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    ctx.translate(10, height / 2); // shift the context downwards
    ctx.scale(1, -1); // vertically flip the context
    var computation = {};
    // draw a sine wave
    for (var radians = 0; radians < Math.PI * 2; radians += 0.25) {
        var sine = Math.sin(radians);
        var y = sine * 100;
        var x = radians * 100;
        computation["radians(".concat(radians, ")")] = { sine: sine, x: x, y: y };
        ctx.fillRect(x, y, 3, 3);
    }
    // log the values computed values in browser's console.
    console.table(computation);
});
