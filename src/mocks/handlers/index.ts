import type { RestHandler } from "msw";
import { usersHandlers } from "./users";

export const handlers: RestHandler[] = [...usersHandlers];
