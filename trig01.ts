document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    ctx.translate(10, height / 2) // shift the context downwards
    ctx.scale(1, -1); // vertically flip the context
    
    const computation: any = {}
    // draw a sine wave
    for (let radians = 0; radians < Math.PI * 2; radians += 0.25) {
        const sine = Math.sin(radians)
        const y = sine * 100;
        const x = radians * 100;
        computation[`radians(${radians})`] = { sine, x, y }
        ctx.fillRect(x,y,3,3)
    }
    // log the values computed values in browser's console.
    console.table(computation)
})