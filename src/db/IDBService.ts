import { RectangleDB } from "./types/rectangle";
import { SquareDB } from "./types/square";
import { TriangleDB } from "./types/triangle";

export interface IDBService {
    getTriangleById(id: number): Promise<TriangleDB>
    getSquareById(id: number): Promise<SquareDB>
    getRectangleById(id: number): Promise<RectangleDB>
}