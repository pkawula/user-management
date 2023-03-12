import { User } from "@/types/api";
import { API_USERS } from "@/utils/constants/api-routes";
import { appFetch } from "@/utils/fetch";

export const getUsers = async (options?: RequestInit) => await appFetch<User[]>(API_USERS, options);
