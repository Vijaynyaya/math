document.addEventListener("DOMContentLoaded", () => {
    // setup canvas
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // center the sine wave
    ctx.translate(10, height / 2) // translate the context downwards because y will be negative at some points
    ctx.scale(1, -1); // vertically flip the context because in the browser top-left corner is the origin

    const computation: any = {}
    /**
     * draw a sine wave when the hypotenuse is 100 units long.
    */
    for (let h = 100; h < 1000; h += 100) {
        for (let radians = 0; radians < Math.PI * 2; radians += 0.01) {
            const sine = Math.sin(radians)
            const y = sine * h;
            const x = radians * h;
            // draw a point
            ctx.fillRect(x, y, 3, 3)

            computation[`radians(${radians})`] = { sine, x, y }
        }
    }
    // log the values computed values in browser's console.
    console.table(computation)
})