import { UserAdpartes } from "../infrastructure/adapter/UserAdaptar";
import { User } from "../domain/User";

export class UserApplicationService {
  private userAdapter: UserAdpartes;

  constructor(userAdapter: UserAdpartes) {
    this.userAdapter = userAdapter;
  }

  async createUser(user: Omit<User, "id">): Promise<number> {
    return this.userAdapter.createUser(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userAdapter.getUserById(id);
  }

  async getUserByEmail(correo: string): Promise<User | null> {
    return this.userAdapter.getUserByEmail(correo);
  }

  async getUserByName(nombre: string): Promise<User | null> {
    return this.userAdapter.getUserByName(nombre);
  }

  async getAllUser(): Promise<User[]> {
    return this.userAdapter.getAllUsers();
  }

  async updateUser(id: number, user: Partial<User>): Promise<boolean> {
    return this.userAdapter.updateUser(id, user);
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.userAdapter.deleteUser(id);
  }
}
