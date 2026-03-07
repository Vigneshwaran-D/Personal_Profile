"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true
    });
  }, []);

  return null;
}

