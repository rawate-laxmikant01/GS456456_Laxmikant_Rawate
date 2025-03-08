export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager",
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
}
