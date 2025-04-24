import { TriangleDB  } from '../../db/types/triangle';

export class Triangle {
    base: number = 0;
    height: number = 0;
    area: number = 0;
    perimeter: number = 0;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
    }
    
    getArea(): number {
        return this.base * this.height / 2;
    }

    getPerimeter(): number {
        // Calculate the hypotenuse using Pythagorean theorem
        const hypotenuse = Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2));
        // Perimeter is the sum of all three sides
        return this.base + this.height + hypotenuse;
    }
}
