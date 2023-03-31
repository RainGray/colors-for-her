import { osList } from "../../database";

export function getOperatingSystem(): string {
    const userAgent = window.navigator.userAgent;
    let os = 'Unknown';
  
    if (/Win/.test(userAgent)) {
      os = osList.windows;
    } else if (/Mac/.test(userAgent)) {
      os = osList.macos;
    } else if (/Linux/.test(userAgent)) {
      os = osList.linux;
    } else if (/Android/.test(userAgent)) {
      os = osList.android;
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
      os = osList.ios;
    }
  
    return os;
  }
  