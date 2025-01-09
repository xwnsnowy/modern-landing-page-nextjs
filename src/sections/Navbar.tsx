import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-2 border border-white/15 rounded-full py-2 px-4 items-center">
          <div>
            <Image src={logoImage} alt="Layers Logo" className="h-9 w-auto" />
          </div>
          <div className="flex justify-end">
            <Menu className="md:hidden" />
            <Button className="border border-white/80 rounded-full bg-transparent mr-2">
              Log In
            </Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
