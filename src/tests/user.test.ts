import { UserServices } from "../services/userServices";
import { UserRepository } from "../repository/userRepository";
import { User } from "../models/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

jest.mock("../repository/UserRepository");

describe("UserServices", () => {
  let userServices: UserServices;
  let userRepoMock: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepoMock = new UserRepository() as jest.Mocked<UserRepository>;
    userServices = new UserServices();
    (userServices as any).userRepo = userRepoMock;
  });

  test("register - deve criar um usuário com senha hash", async () => {
    const mockUser = User.build({
      id: 1,
      email: "test@example.com",
      username: "testuser",
      password: "hashedpassword",
    });

    userRepoMock.createUser.mockResolvedValue(mockUser);

    const user = await userServices.register(
      "test@example.com",
      "testuser",
      "password123"
    );

    expect(userRepoMock.createUser).toHaveBeenCalledWith(
      "test@example.com",
      "testuser",
      expect.any(String)
    );
    expect(user).toHaveProperty("id");
  });

  test("login - deve retornar um token JWT para credenciais válidas", async () => {
    const mockUser = User.build({
      id: 1,
      email: "test@example.com",
      username: "testuser",
      password: await bcrypt.hash("password123", 10),
    });

    userRepoMock.getUserByEmail.mockResolvedValue(mockUser);
    (jest.spyOn(jwt, "sign") as jest.SpyInstance).mockReturnValue("fake-token");

    const token = await userServices.login("test@example.com", "password123");

    expect(userRepoMock.getUserByEmail).toHaveBeenCalledWith("test@example.com");
    expect(token).toBe("fake-token");
  });

  test("getUserById - deve retornar um usuário pelo ID", async () => {
    const mockUser = User.build({
      id: 1,
      email: "test@example.com",
      username: "testuser",
      password: "hashedpassword",
    });

    userRepoMock.getUserById.mockResolvedValue(mockUser);

    const user = await userServices.getUserById(1);

    expect(userRepoMock.getUserById).toHaveBeenCalledWith(1);
    expect(user).toEqual(mockUser);
  });

  test("updateUserUsername - deve atualizar o username de um usuário", async () => {
    userRepoMock.updateUserUsername.mockResolvedValue([1]);

    const result = await userServices.updateUserUsername(1, "newuser");

    expect(userRepoMock.updateUserUsername).toHaveBeenCalledWith(1, "newuser");
    expect(result).toEqual([1]);
  });

  test("deleteUser - deve deletar um usuário existente", async () => {
    userRepoMock.deleteUser.mockResolvedValue(1);

    const result = await userServices.deleteUser(1);

    expect(userRepoMock.deleteUser).toHaveBeenCalledWith(1);
    expect(result).toBe(1);
  });

  test("getAllUsers - deve retornar todos os usuários", async () => {
    const mockUsers = [
      User.build({ id: 1, email: "test1@example.com", username: "user1", password: "hashed1" }),
      User.build({ id: 2, email: "test2@example.com", username: "user2", password: "hashed2" }),
    ];

    userRepoMock.getAllUsers.mockResolvedValue(mockUsers);

    const users = await userServices.getAllUsers();

    expect(userRepoMock.getAllUsers).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});
