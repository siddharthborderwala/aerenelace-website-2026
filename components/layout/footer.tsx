import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook02Icon, InstagramIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import wordmark from "@/app/assets/wordmark.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Link href="/" className="block">
              <img src={wordmark.src} alt="Aerene Lace" className="h-5" />
            </Link>
            <p className="mt-4 text-foreground max-w-sm">
              Leading Manufacturer, Seller, and Exporter of High-Quality Narrow Fabrics in India.
              Discover a wide range of premium lace trims, ribbons, and tapes.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Socials</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/aerenelaceindia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <HugeiconsIcon icon={InstagramIcon} strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/aerenelace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <HugeiconsIcon icon={Facebook02Icon} strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/aerene-lace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <HugeiconsIcon icon={Linkedin02Icon} strokeWidth={1.5} className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Aerene Lace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
