import { Router } from 'express';
import { GeometryHandler } from '../handlers/geometry';
import { GeometryController } from '../controllers/geometry.controller.ts/geometry';
import { FakeService } from '../db/fake/fake.service';

const router = Router();
const fakeService = new FakeService();
const geometryController = new GeometryController(fakeService);
const geometryHandler = new GeometryHandler(geometryController);

// Triangle routes
router.get('/triangle/:id/area', geometryHandler.getTriangleArea.bind(geometryHandler));
router.get('/triangle/:id/perimeter', geometryHandler.getTrianglePermiter.bind(geometryHandler));

export default router;