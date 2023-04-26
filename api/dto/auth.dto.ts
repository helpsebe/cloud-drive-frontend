export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
}

export interface RegisterFormDTO {
  email: string;
  password: string;
  fullName: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
}
