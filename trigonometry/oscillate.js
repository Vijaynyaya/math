document.addEventListener("DOMContentLoaded", function () {
    // setup canvas
    var canvas = document.getElementById("oscillate-canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    // Shadow
    ctx.shadowColor = 'rgba(125, 255, 0, .8)';
    ctx.shadowBlur = 9;
    var centerY = height / 2;
    var centerX = width / 2;
    var offset = height / 4;
    // speeds
    var speed = 0.05;
    // angles
    var angle = 0;
    render();
    function render() {
        // Background
        var gradient = ctx.createLinearGradient(0, height / 20, 0, height);
        // Add three color stops
        gradient.addColorStop(0, 'lightgreen');
        gradient.addColorStop(.7, 'lightgrey');
        gradient.addColorStop(1, 'lightgreen');
        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        // Vertical translation
        var ysin = centerY + Math.sin(angle) * offset;
        var ycos = centerY + Math.cos(angle) * offset;
        var ytan = centerY + Math.tan(angle) * offset;
        // Draw circles
        ctx.fillStyle = "#120";
        ctx.beginPath();
        ctx.arc(width / 4, ysin, 50, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.arc(width / 2, ycos, 50, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.arc(3 * (width / 4), ytan, 50, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
});
