document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("grow-canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var centerX = width / 2;
    var centerY = height / 2;
    var baseRadius = 100;
    var offset = 50;
    var speed = 0.1;
    var angle = 0;
    render();
    function render() {
        var rsin = baseRadius + Math.sin(angle) * offset;
        var rcos = baseRadius + Math.cos(angle) * offset;
        var rtan = baseRadius + Math.abs(Math.tan(angle)) * offset;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(centerX / 2, centerY / 2, rsin, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.arc(centerX, centerY, rcos, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.arc(centerX * (3 / 2), centerY * (3 / 2), rtan, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
});
