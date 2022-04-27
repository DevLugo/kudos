import { getToken } from "../../utils";

export const getAuthentication = async () => {
    const token = await getToken();
    return token ? `Bearer ${token}` : "";
};