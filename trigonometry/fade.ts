document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("fade-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")
    const width  = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerX = width / 2;
    const centerY = height / 2;
    const baseAlpha = 0.5;
    const offset = 0.5;
    const speed = 0.1;
    let angle = 0;

    render();

    function render() {
        const asin = baseAlpha + Math.sin(angle) * offset;
        const acos = baseAlpha + Math.cos(angle) * offset;
        const atan = baseAlpha + Math.tan(angle) * offset;

        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillRect(0, 0, width, height)
        
        ctx.fillStyle = `rgba(255, 255, 255, ${asin})`
        ctx.beginPath()
        ctx.arc(centerX / 2, centerY / 2, 100, 0, Math.PI * 2, false);
        ctx.closePath()
        ctx.fill()

        ctx.fillStyle = `rgba(255, 255, 255, ${acos})`
        ctx.beginPath()
        ctx.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
        ctx.closePath()
        ctx.fill()

        ctx.fillStyle = `rgba(255, 255, 255, ${atan})`
        ctx.beginPath()
        ctx.arc(centerX * (3 / 2), centerY * (3 / 2), 100, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.fill()

        angle += speed

        requestAnimationFrame(render)
    }
})