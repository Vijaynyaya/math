document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var centerY = height / 2;
    var centerX = width / 2;
    var offset = height / 4;
    // speeds
    var _a = [0.033, 0.066, 0.1], slowS = _a[0], fastS = _a[1], fasterS = _a[2];
    // angles
    var _b = [0, 0, 0], slowA = _b[0], fastA = _b[1], fasterA = _b[2];
    render();
    function render() {
        // vertical translation
        var yslow = centerY + Math.sin(slowA) * offset;
        var yfast = centerY + Math.sin(fastA) * offset;
        var yfaster = centerY + Math.sin(fasterA) * offset;
        ctx.clearRect(0, 0, width, height);
        // draw circles
        ctx.beginPath();
        ctx.arc(width / 4, yslow, 50, 0, Math.PI * 2, false);
        ctx.arc(width / 2, yfast, 50, 0, Math.PI * 2, false);
        ctx.arc(3 * (width / 4), yfaster, 50, 0, Math.PI * 2, false);
        ctx.fill();
        slowA += slowS;
        fastA += fastS;
        fasterA += fasterS;
        requestAnimationFrame(render);
    }
});
