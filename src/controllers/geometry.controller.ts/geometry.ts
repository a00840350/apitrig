import { IDBService } from "../../db/IDBService";
import { Triangle } from "../types/triangle" 

export class GeometryController{

    dbService: IDBService

    constructor(dbService: IDBService){
        this.dbService = dbService;
    }

    async getTriangleById(id: number): Promise<Triangle>{
        const triangleDB = await this.dbService.getTriangleById(id)
        const triangle = new Triangle(triangleDB.base, triangleDB.height)
        return triangle;
    }

}