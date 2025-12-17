import React, { useCallback } from "react";
import { Briefcase, Sparkles, List, DollarSign, Shield } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import solutionBg from "@/assets/solution-background.webp";

interface Props { variant?: "default" | "concise" }

const SolutionSection = React.memo(({ variant = "default" }: Props) => {
  const scrollToForm = useCallback(() => {
    const offerSection = document.getElementById('final-offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (variant === "concise") {
    return (
      <section id="solution" className="relative bg-background overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-8 py-8 md:py-[75px]">
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                E se você pudesse <span className="text-gradient-orange-glow">faturar de R$ 500 a R$ 2.000</span> vendendo sites, mesmo sem experiência?
              </h2>
              <div className="space-y-2 text-zinc-300 text-base md:text-lg mb-8">
                <p>Você não precisa programar.</p>
                <p>Não precisa entender de tecnologia.</p>
                <p>E nem precisa ter tempo sobrando.</p>
                <p className="text-gradient-orange-glow font-semibold">A I.A faz 95% do trabalho por você.</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-primary/30 rounded-lg p-6 md:p-8 shadow-lg max-w-3xl mx-auto mb-10 text-left">
                <p className="text-zinc-200 text-base md:text-lg">
                  Milhares de pequenos negócios ainda não têm site e não querem pagar R$ 3.000 a R$ 5.000 para uma agência. <br className="hidden md:block" />
                  <span className="text-gradient-orange-glow font-semibold">Mas pagam com prazer R$ 500 a R$ 1.500 por um site profissional feito com I.A.</span>
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Com nosso método, você:</h3>
              <div className="space-y-4 max-w-3xl mx-auto text-left">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 icon-gradient-orange flex-shrink-0" />
                  <p className="text-zinc-300">Encontra negócios que precisam de site</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 icon-gradient-orange flex-shrink-0" />
                  <p className="text-zinc-300">Cria um site profissional em minutos usando I.A</p>
                </div>
                <div className="flex items-start gap-3">
                  <List className="w-6 h-6 icon-gradient-orange flex-shrink-0" />
                  <p className="text-zinc-300">Personaliza com um passo a passo simples</p>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 icon-gradient-orange flex-shrink-0" />
                  <p className="text-zinc-300">Apresenta, fecha e recebe pelo Pix</p>
                </div>
              </div>
              <p className="text-zinc-300 mt-6">Se você sabe usar WhatsApp, você consegue fazer isso.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="solution" className="relative min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={solutionBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_20%_/_0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_20%_/_0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="container relative z-10 mx-auto px-4 md:px-8 py-8 md:py-[75px]">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-bold lg:text-5xl text-white">
              E se você pudesse <span className="text-gradient-orange-glow px-3 py-1 rounded">faturar de R$ 500 a R$ 2.000</span> vendendo sites, mesmo sem experiência?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SolutionSection;
