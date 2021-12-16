import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign({
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  findByEmail(email: string): User {
    const emailFind = this.users.find(user => user.email === email);
    return emailFind;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    user.admin = true;
    user.created_at = receivedUser.created_at;
    user.email = receivedUser.email;
    user.name = receivedUser.email;
    user.updated_at = new Date();

    return user;
    
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
