import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/NavbarMenu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <Hero />
    </div>
  );
}
