document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("grow-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerX = width / 2;
    const centerY = height / 2;
    const baseRadius = 100;
    const offset = 50;
    const speed = 0.1;
    let angle = 0;

    render();

    function render() {
        const rsin = baseRadius + Math.sin(angle) * offset;
        const rcos = baseRadius + Math.cos(angle) * offset;
        const rtan = baseRadius + Math.abs(Math.tan(angle)) * offset;

        ctx.clearRect(0,0,width,height);
        ctx.beginPath();
        ctx.arc(centerX / 2, centerY / 2, rsin, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.fill();
        ctx.arc(centerX, centerY, rcos, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.fill();
        ctx.arc(centerX * (3 / 2), centerY * (3 / 2), rtan, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.fill();

        angle += speed;

        requestAnimationFrame(render)
    }
})