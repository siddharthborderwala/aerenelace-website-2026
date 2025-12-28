import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "@/components/landing/star";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 md:px-12 lg:px-16 text-center">
      <div className="mb-8 animate-pulse">
        <Star />
      </div>
      <h1 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
        Our collection is <br className="hidden sm:block" /> coming soon.
      </h1>
      <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
        We are currently updating our product catalog to bring you the best selection of GPO Lace,
        Embroidery Lace, and Elastic Tapes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
