import axios from "@/core/axios";
import {
  LoginFormDTO,
  LoginResponseDTO,
  RegisterFormDTO,
} from "./dto/auth.dto";
import { destroyCookie } from "nookies";

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponseDTO> => {
  return (await axios.post("/auth/login", values)).data;
};

export const register = async (values: RegisterFormDTO) => {
  return (await axios.post("/auth/register", values)).data;
};

export const getMe = async () => {
  return (await axios.get("/users/me")).data;
};

export const logout = async () => {
  destroyCookie(null, "_token", { path: "/" });
};
