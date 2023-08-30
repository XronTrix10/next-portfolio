import { Buttons } from "@/app/components/ui/Styles";
import Link from "next/link";
import React from "react";

function Notproject() {
  return (
    <section className="min-h-[75vh] md:min-h-[90vh] px-24 text-center text-white bg-black grid place-content-center">
      <h1 className="text-[8rem] rainbow-neon text-center">404</h1>
      <p className="mb-12">I Don't Have the Project that you are looking for</p>
      <div className="px-8">
        <Link href="/" className={Buttons}>
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default Notproject;
