document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // draw a line
    ctx.moveTo(50, 50)
    ctx.lineTo(150, 150)
    ctx.stroke()
})