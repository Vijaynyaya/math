document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("fade-canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var centerX = width / 2;
    var centerY = height / 2;
    var baseAlpha = 0.5;
    var offset = 0.5;
    var speed = 0.1;
    var angle = 0;
    render();
    function render() {
        var asin = baseAlpha + Math.sin(angle) * offset;
        var acos = baseAlpha + Math.cos(angle) * offset;
        var atan = baseAlpha + Math.tan(angle) * offset;
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "rgba(255, 255, 255, ".concat(asin, ")");
        ctx.beginPath();
        ctx.arc(centerX / 2, centerY / 2, 100, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgba(255, 255, 255, ".concat(acos, ")");
        ctx.beginPath();
        ctx.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgba(255, 255, 255, ".concat(atan, ")");
        ctx.beginPath();
        ctx.arc(centerX * (3 / 2), centerY * (3 / 2), 100, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
});
