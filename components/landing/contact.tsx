import Link from "next/link";
import { Star } from "./star";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  SmartPhone01Icon,
  WhatsappIcon,
  Mail01Icon,
  ArrowMoveUpRightIcon,
} from "@hugeicons/core-free-icons";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        <div className="mb-16">
          <span className="inline-flex items-center font-medium text-primary tracking-wide uppercase">
            <Star />
            <span className="ml-4">Contact Us</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-8 text-foreground max-w-3xl">
            Get in touch with us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="space-y-10">
                {/* Phone Section */}
                <div className="flex flex-col sm:flex-row items-start gap-4 group">
                  <div className="p-3 rounded-md bg-background text-primary border border-border/50">
                    <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={1.5} className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="space-y-8">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <p className="text-foreground font-bold text-lg">Mrs. Simmy Borderwala</p>
                        <div>
                          <p className="text-foreground text-lg">+91 96647 91874</p>
                          <p className="text-foreground text-lg">aerenelace@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button asChild className="w-32 mt-4">
                            <a
                              href="https://wa.me/+919664791874"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <HugeiconsIcon
                                icon={WhatsappIcon}
                                strokeWidth={1.5}
                                className="h-4 w-4"
                              />
                              WhatsApp
                            </a>
                          </Button>
                          <Button asChild variant="outline" className="w-32 mt-4">
                            <a
                              href="mailto:aerenelace@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <HugeiconsIcon
                                icon={Mail01Icon}
                                strokeWidth={1.5}
                                className="h-4 w-4"
                              />
                              Email
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            {/* Location Section */}
            <div className="flex flex-col sm:flex-row items-start gap-4 group h-full">
              <div className="p-3 rounded-md bg-background text-primary border border-border/50">
                <HugeiconsIcon icon={Location01Icon} strokeWidth={1.5} className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-foreground">Office Address</h3>
                <address className="text-foreground not-italic leading-relaxed mb-6 block text-lg">
                  1st Floor, Laxminarayan Industries, D - 21, <br />
                  Baroda Rayon Corporation, Compound, <br />
                  Udhana, Surat, Gujarat 394210
                </address>

                <Button asChild variant="default">
                  <Link
                    href="https://maps.app.goo.gl/JJrkZyrKGiE5NpKT8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HugeiconsIcon
                      icon={ArrowMoveUpRightIcon}
                      strokeWidth={1.5}
                      className="h-4 w-4"
                    />
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
