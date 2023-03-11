import { isServer } from "@/utils/helpers";
import { worker } from "./browser";
import { server } from "./server";

if (isServer) {
	server().listen({ onUnhandledRequest: "bypass" });
} else {
	worker().start({ onUnhandledRequest: "bypass" });
}
