export const cookieMaxByteSize = 4096;
export const cookieMaxCount = 50;

export const isCookieEnabled = (): void => {
  if (!navigator.cookieEnabled) throw Error("Cookies are disabled by the browser");
};
