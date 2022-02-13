import { fetchLocation, setLoading, setError } from "../redux/action/action";

class DispatchHandler {
    static async LoadingWrapper(dispatch, { origin, destination }, func) {
        dispatch(setLoading(true));
        try {
            await func(dispatch, { origin, destination });
            console.log("check");
        } catch (e) {
            console.warn(e);
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }
    }
    static async getToken(origin, destination) {
        try {
            const response = await fetch(
                `https://mock-api.dev.lalamove.com/route`,
                {
                    method: "POST",
                    body: JSON.stringify({ origin, destination }),
                    headers: {
                        contentType: "application/json",
                    },
                }
            );
            if (response.status >= 200 && response.status < 300) {
                const data = await response.json();
                return data;
            } else {
                throw new Error("Something went wrong get token");
            }
        } catch (e) {
            throw e;
        }
    }

    static async fetchRoutes(dispatch, { origin, destination }, token) {
        try {
            const response = await fetch(
                `https://mock-api.dev.lalamove.com/route/${token}`,
                {
                    method: "GET",
                    headers: {
                        contentType: "application/json",
                    },
                }
            );
            if (response.status >= 200 && response.status < 300) {
                const data = await response.json();
                console.log(data);
                if (data.status === "in progress") {
                    await DispatchHandler.fetchRoutes(
                        dispatch,
                        {
                            origin,
                            destination,
                        },
                        token
                    );
                    return;
                } else if (data.status === "failure") {
                    throw new Error("Something went wrong status: failure");
                } else if (data.status === "success") {
                    const payload = {
                        origin: data.path[0],
                        destination: data.path[1],
                        current: data.path[2],
                        error: false,
                    };
                    dispatch(fetchLocation(payload));
                    return;
                }
            }
        } catch (e) {
            throw e;
        }
    }
    static async getRoute(dispatch, { origin, destination }) {
        try {
            const token = await DispatchHandler.getToken(origin, destination);
            if (token) {
                await DispatchHandler.fetchRoutes(
                    dispatch,
                    { origin, destination },
                    token.token
                );
            } else {
                throw new Error("Something went wrong getRoute probably token");
            }
        } catch (e) {
            console.warn(e);
            throw e;
        }
    }
}

export default DispatchHandler;
