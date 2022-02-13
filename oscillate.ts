document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerY = height / 2;
    const centerX = width / 2;
    const offset = height / 4;
    // speeds
    const [slowS, fastS, fasterS] = [0.033, 0.066, 0.1];
    // angles
    let [slowA, fastA, fasterA] = [0, 0, 0];

    render();

    function render() {
        // vertical translation
        const yslow = centerY + Math.sin(slowA) * offset;
        const yfast = centerY + Math.sin(fastA) * offset;
        const yfaster = centerY + Math.sin(fasterA) * offset;

        ctx.clearRect(0, 0, width, height);
        // draw circles
        ctx.beginPath()
        ctx.arc(width / 4, yslow, 50, 0, Math.PI * 2, false);
        ctx.arc(width / 2, yfast, 50, 0, Math.PI * 2, false);
        ctx.arc(3 * (width / 4), yfaster, 50, 0, Math.PI * 2, false);
        ctx.fill();

        slowA += slowS; fastA += fastS; fasterA += fasterS;
        requestAnimationFrame(render)
    }
})