import { API_USERS } from "@/utils/constants/api-routes";
import { db } from "../data";

export const usersHandlers = db[API_USERS].toHandlers("rest", process.env.NEXT_PUBLIC_BASE_API_ROUTE);
