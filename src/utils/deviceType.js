export const deviceType = (width) => {
    if (width < 479) return "Mobile-portrait";
    if (width >= 480 && width < 599) return "Mobile-landscape";
    if (width > 600 && width < 799) return "Tablet-portrait";
    if (width > 800 && width < 1023) return "Tablet-landscape";
    if (width > 1024) return "Desktop";
  };