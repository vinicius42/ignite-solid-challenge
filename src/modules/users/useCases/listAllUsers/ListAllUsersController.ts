import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      this.listAllUsersUseCase.execute({user_id});
      return response.json(user_id);
    } catch (error) {
      throw new error({message: "You don't have access to list all"})
    }
  }
}

export { ListAllUsersController };
