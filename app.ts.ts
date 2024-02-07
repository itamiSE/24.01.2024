class Rect {

    private x1: number;
    public x2: number;
    y1: number;
    private readonly MAX_COORD = 1000;
    y2: number;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number){
        this.x1;
        this.x2;
        this.y1;
        this.y2;

    }

    square () {
        return Math.abs(this.x1 - this.x2) * 
        Math.abs(this.y1 - this.y2)
    }
}
let rect1: Rect = new Rect(10, 9);
let rect2: Rect = new Rect();
rect1.x1 = 4;
rect1.x2 = 47865;
rect1.y1 = 256234;

console.log(rect1.square())