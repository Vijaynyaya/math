document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("waves-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    // center context
    ctx.translate(width / 4, height / 2);
    ctx.scale(1, -1)

    for (let radians = 0; radians < Math.PI * 2; radians += 0.01) {
        const values = [Math.sin(radians), Math.cos(radians), Math.tan(radians)]
        const x = radians * 100;
        const colors = [ "#565", "#e63","#50f"]
        values.forEach((value, i) => {
            const y =  value * 100;
            ctx.fillStyle = colors[i];
            ctx.fillRect(x, y, 3, 3)
        })
    }
})