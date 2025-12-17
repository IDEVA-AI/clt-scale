import React from "react";
import MobilePrintsCarousel from "@/components/MobilePrintsCarousel";
import testimonial1 from "@/assets/testimonial-1-optimized.jpg";
import testimonial2 from "@/assets/testimonial-2-optimized.jpg";
import testimonial3 from "@/assets/testimonial-3-optimized.jpg";
import testimonial4 from "@/assets/testimonial-4-optimized.jpg";
import testimonial5 from "@/assets/testimonial-5-optimized.jpg";

interface TestimonialsProps { variant?: "rich" | "mobilePrints" }

const TestimonialsSection = React.memo(({ variant = "rich" }: TestimonialsProps) => {
  if (variant === "mobilePrints") {
    return (
      <MobilePrintsCarousel
        images={[testimonial1, testimonial2, testimonial3, testimonial4, testimonial5]}
        titleNode={
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Veja o que nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 block">
              alunos estão dizendo
            </span>
          </h2>
        }
      />
    );
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_20%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_20%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  );
});

export default TestimonialsSection;
