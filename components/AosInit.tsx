"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 50, // Offset (in px) from the original trigger point
      duration: 800, // Values from 0 to 3000, with step 50ms
      easing: "ease-out-cubic", // Default easing for AOS animations
    });
  }, []);

  return null;
}
