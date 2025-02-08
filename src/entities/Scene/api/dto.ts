import { z } from "zod";
import { GetSceneDtoSchema } from "../model/schemas";

export type GetSceneDto = z.infer<typeof GetSceneDtoSchema>