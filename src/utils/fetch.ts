export const appFetch = async <T = any>(...args: Parameters<typeof fetch>) => {
	const headers = new Headers(args[1]?.headers);

	headers.set("Accept", "application/json");

	const res = await fetch(args[0], { ...(args[1] || {}), headers });

	if (res.ok) {
		return res.json() as T;
	}

	throw res;
};
