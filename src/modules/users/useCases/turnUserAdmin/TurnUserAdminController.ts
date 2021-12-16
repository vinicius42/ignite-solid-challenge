import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.turnUserAdminUseCase.execute({user_id});
      return response.json(user_id);
    } catch (error) {
      throw new error({message: "User don't exists"})
    }
  }
}

export { TurnUserAdminController };
