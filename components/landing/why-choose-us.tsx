import { Star } from "./star";

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        <div className="mb-20">
          <span className="inline-flex items-center font-medium text-primary tracking-wide uppercase">
            <Star />
            <span className="ml-4">Why Choose Us</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-8 text-foreground max-w-3xl">
            Why industry giants choose us as their supplier.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="group">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-lg font-mono text-primary">01</span>
              <h3 className="text-2xl font-medium text-foreground">Impeccable Quality</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed pl-10 border-l border-border/50 group-hover:border-primary/50 transition-colors duration-300">
              Our lace products are synonymous with impeccable quality. Trust us to deliver superior
              craftsmanship with our expertise in manufacturing and strict quality control measures.
            </p>
          </div>

          <div className="group">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-lg font-mono text-primary">02</span>
              <h3 className="text-2xl font-medium text-foreground">Manufacturing Expertise</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed pl-10 border-l border-border/50 group-hover:border-primary/50 transition-colors duration-300">
              With over 25 years of experience, we have honed our lace manufacturing expertise,
              ensuring that every product meets our high standards of quality.
            </p>
          </div>

          <div className="group">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-lg font-mono text-primary">03</span>
              <h3 className="text-2xl font-medium text-foreground">On-Time Deliveries</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed pl-10 border-l border-border/50 group-hover:border-primary/50 transition-colors duration-300">
              We understand the importance of timely delivery for our customers. That&apos;s why we
              have streamlined our manufacturing process and shipping logistics to ensure on-time
              delivery of our lace products, every time.
            </p>
          </div>

          <div className="group">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-lg font-mono text-primary">04</span>
              <h3 className="text-2xl font-medium text-foreground">Customer Satisfaction</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed pl-10 border-l border-border/50 group-hover:border-primary/50 transition-colors duration-300">
              We take pride in delivering impeccable quality lace products and providing exceptional
              customer service, ensuring that our customers are happy and confident in their choice
              to choose us as their supplier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
