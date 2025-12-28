import Image from "next/image";
import Link from "next/link";
import { Star } from "./star";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const OfferingSection = ({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  reversed = false,
}: {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} md:h-100 group mb-20 last:mb-0 gap-8 md:gap-16`}
    >
      <div className="flex-1 flex flex-col justify-center items-start">
        <h3 className="text-3xl font-medium tracking-tight mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">{description}</p>
        <Button
          asChild
          variant="link"
          className="p-0 h-auto text-primary font-medium hover:no-underline group/btn text-lg"
        >
          <Link href={link}>
            Show More{" "}
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              strokeWidth={1.5}
              className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </Button>
      </div>
      <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden rounded-xl">
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export const Offerings = () => {
  return (
    <section id="offerings" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        <div className="mb-24">
          <span className="inline-flex items-center font-medium text-primary tracking-wide uppercase">
            <Star />
            <span className="ml-4">What we offer</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-8 text-foreground max-w-3xl">
            Best products for your every need.
          </h2>
        </div>

        <div className="space-y-4">
          <OfferingSection
            title="GPO Lace (Guipure Lace)"
            description="Elevate your designs with GPO lace - a luxurious and durable option that adds a touch of timeless elegance to any garment."
            link="/products/gpo-lace"
            imageSrc="/images/gpo-professional.webp"
            imageAlt="GPO Lace"
          />
          <OfferingSection
            title="Embroidery Lace"
            description="Add romance and intricate detail to your designs with delicate embroidery lace. Perfect for achieving a vintage or bohemian look that never goes out of style."
            link="/products/embroidery-lace"
            imageSrc="/images/embroidery-professional.webp"
            imageAlt="Embroidery Lace"
            reversed
          />
          <OfferingSection
            title="Elastic Tapes"
            description="High-quality elastic tapes designed for comfort and durability. Ideal for waistbands, sportswear, and various garment applications requiring flexibility."
            link="/products/elastic-tapes"
            imageSrc="/images/collection-professional.webp"
            imageAlt="Elastic Tapes"
          />
        </div>
      </div>
    </section>
  );
};
