export const isBrowser = typeof window !== "undefined";
export const isMobile = isBrowser
  ? window.matchMedia("(pointer: coarse)").matches
  : false;
export const canUseDOM: boolean =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";
// Use UA-CH (userAgentData) when available; fall back to userAgent. Avoid deprecated navigator.platform.
type UAData = { platform?: string; brands?: Array<{ brand: string; version: string }> };

export const isApple: boolean = canUseDOM
  ? (() => {
    const nav = navigator as Navigator & { userAgentData?: UAData };
    const platform = nav.userAgentData?.platform || "";
    const ua = nav.userAgent || "";

    const isMac = /Mac/i.test(platform) || /Mac/i.test(ua);
    const isIPhone = /iPhone/i.test(platform) || /iPhone/i.test(ua);
    // iPadOS 13+ may report as Mac; detect via touch points as a heuristic
    const isIPad =
      /iPad/i.test(platform) ||
      /iPad/i.test(ua) ||
      (isMac && (nav.maxTouchPoints || 0) > 1);
    const isIPod = /iPod/i.test(platform) || /iPod/i.test(ua);

    return isMac || isIPhone || isIPad || isIPod;
  })()
  : false;
