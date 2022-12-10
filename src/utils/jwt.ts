import jwtDecode from "jwt-decode";
import httpService from "../Api/api";

let refreshTokenTimeout: ReturnType<typeof setTimeout> | null = null;

const setSession = (accessToken: string | null) => {
  if (!accessToken) {
    localStorage.removeItem("accessToken");

    delete httpService.defaults.headers.common.Authorization;
    return;
  }

  localStorage.setItem("accessToken", accessToken);
  httpService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const setRefreshToken = (refreshToken: string | null) => {
  if (!refreshToken) {
    localStorage.removeItem("refreshToken");
    return;
  }

  localStorage.setItem("refreshToken", refreshToken);
};

const refreshToken = async () => {
  const rToken = localStorage.getItem("refreshToken");

  const response = await httpService.post<any>("/api/auth/refresh", {
    refreshToken: rToken,
  });

  const { accessToken, refreshToken, expiresIn } = response.data;

  setSession(accessToken);
  setRefreshToken(refreshToken);
  setRefreshTimeout(expiresIn);
};

const setRefreshTimeout = (expiresIn: number) => {
  const tokenExpiresAt = new Date().getTime() + expiresIn;

  localStorage.setItem("tokenExpiresAt", tokenExpiresAt.toString());

  const oneMinuteBeforeExpiration = expiresIn - 60 * 1000;

  refreshTokenTimeout = setTimeout(() => {
    refreshToken();
  }, oneMinuteBeforeExpiration);
};

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode<{
    exp: number;
  }>(accessToken);

  const currentTime = new Date().getTime() / 1000;

  const isStillValid = decodedToken.exp > currentTime;

  return isStillValid;
};

export {
  setSession,
  setRefreshToken,
  setRefreshTimeout,
  refreshTokenTimeout,
  isValidToken,
  refreshToken,
};
