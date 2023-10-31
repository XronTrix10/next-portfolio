"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Notfound(props: { text: string}) {
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
        window.location.href = "/"; // Redirect using window.location
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  return (
    <section className="relative z-10 min-h-[75vh] md:h-[90vh] px-24 text-center text-white bg-black grid place-content-center">
      <h1 className="text-[8rem] rainbow-neon text-center">404</h1>
      <p className="mb-2">{props.text}</p>
      <p className="mb-8 text-[12px] text-gray-500">Returning in {countdown} seconds</p>
      <div className="px-8">
        <Link href="/" id="btn">
          Home
        </Link>
      </div>
    </section>
  );
}

export default Notfound;
