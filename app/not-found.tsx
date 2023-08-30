import Link from "next/link";
import { Buttons } from "./components/ui/Styles";

export default async function NotFound() {
  return (
    <main className="min-h-[75vh] md:min-h-[100vh] px-24 text-center text-white bg-black grid place-content-center">
      <h1 className="text-[8rem] rainbow-neon text-center">404</h1>
      <p className="mb-12">What Are You Exactly Looking For ?</p>
      <div className="px-8">
        <Link href="/" className={Buttons}>
          Back To Home
        </Link>
      </div>
    </main>
  );
}
