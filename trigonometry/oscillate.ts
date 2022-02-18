document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("oscillate-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    // Shadow
    ctx.shadowColor = 'rgba(125, 255, 0, .8)';
    ctx.shadowBlur = 9;

    const centerY = height / 2;
    const centerX = width / 2;
    const offset = height / 4;
    // speeds
    const speed = 0.05;
    // angles
    let angle = 0;

    render();

    function render() {
        // Background
        const gradient = ctx.createLinearGradient(0, height / 20, 0, height);
        // Add three color stops
        gradient.addColorStop(0, 'lightgreen');
        gradient.addColorStop(.7, 'lightgrey');
        gradient.addColorStop(1, 'lightgreen');
        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Vertical translation
        const ysin = centerY + Math.sin(angle) * offset;
        const ycos = centerY + Math.cos(angle) * offset;
        const ytan = centerY + Math.tan(angle) * offset;
        // Draw circles
        ctx.fillStyle = "#120"
        ctx.beginPath()
        ctx.arc(width / 4, ysin, 50, 0, Math.PI * 2, false);
        ctx.closePath()
        ctx.fill();
        ctx.arc(width / 2, ycos, 50, 0, Math.PI * 2, false);
        ctx.closePath()
        ctx.fill();
        ctx.arc(3 * (width / 4), ytan, 50, 0, Math.PI * 2, false);
        ctx.closePath()
        ctx.fill();

        angle += speed
        requestAnimationFrame(render)
    }
})