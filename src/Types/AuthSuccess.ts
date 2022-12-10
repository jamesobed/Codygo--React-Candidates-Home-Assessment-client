export interface AuthSuccess {
  message: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  userType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profilePicture: string;
}
