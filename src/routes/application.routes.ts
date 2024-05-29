import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { ValidateBody } from "../middlewares/validateBody.middlewares";
import { applicationCreateSchema } from "../schemas/application.schemas";
import { ValidateToken } from "../middlewares/validateToken.middlewares";

export const applicationRouter = Router();

const applicationControllers = new ApplicationControllers();

applicationRouter.post(
  "/:id/applications",
  ValidateBody.execute(applicationCreateSchema),
  applicationControllers.create
);
applicationRouter.get(
  "/:id/applications",
  ValidateToken.execute,
  applicationControllers.findMany
);
