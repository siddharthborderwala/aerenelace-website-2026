import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import wordmark from "@/app/assets/wordmark.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src={wordmark.src} alt="Aerene Lace" className="h-5" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 font-medium">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="transition-colors hover:text-primary">
              Products
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full! p-6">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation menu for mobile devices</SheetDescription>
              </VisuallyHidden>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="flex items-center space-x-2">
                  <img src={wordmark.src} alt="Aerene Lace" className="h-5" />
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Products
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
