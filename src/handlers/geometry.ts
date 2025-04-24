import  { Request, Response } from 'express';
import { GeometryController } from '../controllers/geometry.controller.ts/geometry';
import { Result } from './types/result';

export class GeometryHandler {
    geometryController: GeometryController;
    constructor(geometryController: GeometryController){
        this.geometryController = geometryController;
    }

    async getTriangleArea(request: Request, response: Response): Promise<void> {
        try {
            const id = parseInt(request.params.id);
            const triangle = await this.geometryController.getTriangleById(id);
            const result: Result = { result: (await triangle).getArea() };
            response.json(result);
        } catch (error){
            response.status(500).json({ error: 'an error' });
        }
    }

    async getTrianglePermiter(request: Request, response: Response): Promise<void> {
        try {
            const id = parseInt(request.params.id);
            const triangle = this.geometryController.getTriangleById(id);
            const result: Result = { result: (await triangle).getPerimeter() };
            response.json(result);
        } catch (error){
            response.status(500).json({ error: 'an error' });
        }
    }
}