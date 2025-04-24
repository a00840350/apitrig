import { RectangleDB } from "../types/rectangle";
import { SquareDB } from "../types/square";
import { TriangleDB } from "../types/triangle";
const FAKE_TRIANGLES = [
   { base: 1, height: 10 },
   { base: 5, height: 2 },
   { base: 7, height: 5 },
   { base: 13, height: 6 },
]

const FAKE_SQUARES = [
    { side: 3 },
    { side: 4 },
    { side: 6 },
    { side: 1 },
    { side: 8 },
]

const FAKE_RECTANGLES = [
    { width: 1, height: 10 },
    { width: 5, height: 2 },
    { width: 7, height: 5 },
    { width: 13, height: 6 },
 ]

export class FakeService {

    async getTriangleById(id: number): Promise<TriangleDB>{
        return FAKE_TRIANGLES[id];
    }

    async getSquareById(id: number): Promise<SquareDB>{
        return FAKE_SQUARES[id];
    }

    async getRectangleById(id: number): Promise<RectangleDB>{
        return FAKE_RECTANGLES[id];
    }
}