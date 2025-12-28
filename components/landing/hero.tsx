import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto md:px-12 lg:px-16 lg:py-32 py-24 px-5 relative">
        <div className="text-center space-y-4">
          <h1 className="text-foreground font-medium lg:text-7xl sm:text-5xl md:text-6xl text-4xl tracking-tighter">
            High Quality <br /> Narrow Fabrics
          </h1>
          <h2 className="text-lg max-w-xs text-muted-foreground mx-auto">
            GPO Lace (Guipure Lace), Elastic Tapes, and Embroidery Lace.
          </h2>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <Button asChild size="lg">
            <Link href="/#offerings">Show Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="relative w-full h-[360px] sm:h-[480px] md:h-[600px]">
        <Image
          src="/images/hero-alternate.webp"
          alt="Embroidered Lace"
          loading="eager"
          fill
          className="object-cover"
          style={{
            objectPosition: "center 20%",
          }}
        />
      </div>
    </header>
  );
};
