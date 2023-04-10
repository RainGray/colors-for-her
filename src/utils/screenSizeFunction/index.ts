import { ScreenSize } from "../../models";

const sizeTable = {
  xs: 200,
  s: 400,
  m: 600,
  l: 850,
  xl: 1075,
};

export function screenSizeFunction(screenWidth: number) {
  var size = ScreenSize.xl;

  if (screenWidth < sizeTable["xl"]) {
    size = ScreenSize.l;
  }
  if (screenWidth < sizeTable["l"]) {
    size = ScreenSize.m;
  }
  if (screenWidth < sizeTable["m"]) {
    size = ScreenSize.s;
  }
  if (screenWidth < sizeTable["s"]) {
    size = ScreenSize.xs;
  }

  return size;
}

export function isMobileScreen(screenSize: ScreenSize) {
  if ([ScreenSize.xl, ScreenSize.l, ScreenSize.m].includes(screenSize)) {
    return false;
  } else {
    return true;
  }
}
