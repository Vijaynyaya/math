document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    // center context
    ctx.translate(width / 4, height / 2);
    ctx.scale(1, -1);
    var _loop_1 = function (radians) {
        var values = [Math.sin(radians), Math.cos(radians), Math.tan(radians)];
        var x = radians * 100;
        var colors = ["#565", "#e63", "#50f"];
        values.forEach(function (value, i) {
            var y = value * 100;
            ctx.fillStyle = colors[i];
            ctx.fillRect(x, y, 3, 3);
        });
    };
    for (var radians = 0; radians < Math.PI * 2; radians += 0.01) {
        _loop_1(radians);
    }
});
