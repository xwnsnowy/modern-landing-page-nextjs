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
    <section className="py-4 lg:py-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full py-2 px-4 items-center">
          <div>
            <Image
              src={logoImage}
              alt="Layers Logo"
              className="h-9 w-auto md:h-auto"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-2">
            <Menu className="md:hidden" />
            <Button className="border border-white/80 rounded-full bg-transparent md:inline-flex hidden">
              Log In
            </Button>
            <Button
              className="bg-yellow-400 text-primary rounded-full md:inline-flex hidden"
              variant={"outline"}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
