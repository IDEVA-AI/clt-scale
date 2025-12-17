import { Shield, Clock, Sparkles, Check } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { VariationConfig } from "@/config/variations";

interface DynamicFinalOfferSectionProps {
  config: VariationConfig;
  ctaClassName?: string;
}

const DynamicFinalOfferSection = ({ config, ctaClassName }: DynamicFinalOfferSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const buildCheckoutUrl = () => {
    try {
      const url = new URL(config.checkout.checkoutUrl);
      const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;
      const hasWindow = typeof window !== 'undefined';
      const searchParams = hasWindow ? new URLSearchParams(window.location.search) : null;
      keys.forEach((key) => {
        const fromQuery = searchParams?.get(key);
        const fallback = (config.checkout.utmParams as any)?.[key];
        const value = fromQuery || fallback;
        if (value) url.searchParams.set(key, value);
      });
      return url.toString();
    } catch {
      return config.checkout.checkoutUrl;
    }
  };

  const handleGoToCheckout = () => {
    const target = buildCheckoutUrl();
    if (typeof window !== 'undefined') {
      window.location.href = target;
    }
  };

  const installmentValue = config.pricing.installmentPrice.replace(/^R\$\s*/, "");
  const [installWhole, installCents] = installmentValue.split(",");
  const installmentNumber = parseFloat(`${installWhole}.${installCents}`);
  const original = parseFloat(config.pricing.originalPrice.replace(/[^0-9,.-]/g, '').replace(/\./g, '').replace(',', '.')) || 0;
  const cash = parseFloat(config.pricing.cashPrice.replace(/[^0-9,.-]/g, '').replace(/\./g, '').replace(',', '.')) || 0;
  const savings = Math.max(original - cash, 0);
  const discountPct = original ? Math.round((savings / original) * 100) : 0;
  const perDay = (installmentNumber * config.pricing.installmentCount) / 365;
  const perDayBRL = perDay.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section id="final-offer" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_20%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_20%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 py-12 md:py-[100px]" ref={ref}>
        <div className="w-full max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-5 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Badge className="bg-error/20 border-error/50 text-error px-3 py-1.5">
                <Clock className="w-4 h-4 mr-2" aria-hidden="true" focusable="false" />
                OFERTA ESPECIAL — ÚLTIMAS VAGAS DISPONÍVEIS
              </Badge>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-4 leading-snug md:leading-tight tracking-tight font-bold">
              Crie e venda <span className="text-gradient-orange-glow">sites com I.A</span><br className="hidden md:block" />
              <span className="text-zinc-300"> ainda HOJE!</span>
            </h2>

            <p className="text-sm md:text-xl text-zinc-300 max-w-2xl mx-auto">Mesmo começando do zero, sem experiência e sem ser "da tecnologia".</p>
          </motion.div>

          <motion.div 
            className="relative bg-white/95 border-2 border-zinc-200 rounded-lg md:rounded-xl p-2 md:p-4 mb-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-primary via-orange-500 to-primary border-2 border-background px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base shadow-lg rounded-xl md:rounded-2xl">
                <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" focusable="false" />
                Tudo o que você vai receber hoje.
              </Badge>
            </div>

            <div className="text-center mb-2 pt-4"></div>

            {/* Layout em duas colunas: Conteúdos (col1) + Oferta (col2) */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 px-2 md:px-6 pt-2">
              
              {/* Coluna 1: Lista de Conteúdos Incluídos */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">O que está incluído:</h3>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
              {[
                "Propostas prontas pra fechar cliente",
                "Agente de Vendas treinado pra você copiar",
                "Modelo de Contrato simples e direto",
                "Curso CLT com Grana passo a passo",
                "Ferramenta exclusiva de I.A para criar sites em minutos",
                "Aula ao vivo tira-dúvidas",
                "Suporte direto no WhatsApp",
                "Atualizações gratuitas",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 text-left"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
                </div>
              </div>

              {/* Coluna 2: Oferta de Hoje */}
              <div className="flex-1 flex flex-col items-center justify-start">
              <motion.div 
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 md:p-6 shadow-xl border-2 border-orange-200 relative overflow-hidden w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className={`glowbox glowbox-active absolute inset-0`}>
                  {!reducedMotion && (
                    <div className="glowbox-animations">
                      <div className="glowbox-glow"></div>
                      <div className="glowbox-stars-masker">
                        <div className="glowbox-stars"></div>
                      </div>
                    </div>
                  )}
                  <div className="glowbox-borders-masker">
                    <div className="glowbox-borders"></div>
                  </div>
                </div>
                
                <div className="relative z-10 text-center space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-gray-800 text-xl md:text-2xl font-bold">Oferta de Hoje</h3>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Investimento</p>
                  </div>
                  
                  {discountPct > 0 && (
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full shadow-md">
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      <span className="text-xs md:text-sm font-bold">{discountPct}% OFF</span>
                    </div>
                  )}
                  
                  <div className="mb-1">
                    <p className="text-sm md:text-base text-gray-400 line-through">{config.pricing.originalPrice}</p>
                  </div>
                  
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-3 py-1">
                      <Clock className="w-3.5 h-3.5 text-red-600" aria-hidden="true" />
                      <span className="text-xs md:text-sm font-semibold text-red-700">
                        Oferta por tempo limitado
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="relative inline-flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-sm md:text-base font-semibold text-gray-600" aria-hidden="true">
                        {config.pricing.installmentCount}x de
                      </span>
                      <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500" aria-hidden="true">
                        R$ {installWhole}
                      </span>
                      <span className="text-2xl md:text-3xl font-bold text-orange-500" aria-hidden="true">,
                      </span>
                      <span className="text-2xl md:text-3xl font-bold text-orange-500" aria-hidden="true">{installCents}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 font-medium">Apenas {perDayBRL}/dia</p>
                  </div>
                  
                  <div className="pt-2 border-t border-orange-200/50 mb-2">
                    <p className="text-sm md:text-base text-gray-700 font-semibold">
                      ou <span className="text-orange-600 font-bold">{config.pricing.cashPrice}</span> à vista
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <GlowButton onClick={handleGoToCheckout} className={`w-full max-w-xs text-base ${ctaClassName ?? ""}`} aria-describedby="payment-safe">
                      GARANTIR MINHA VAGA AGORA
                    </GlowButton>
                    
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                      <Shield className="w-3 h-3 flex-shrink-0" aria-hidden="true" focusable="false" />
                      <span id="payment-safe">Pagamento 100% seguro e criptografado</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 md:p-6 text-center shadow-lg border border-orange-100 mt-3 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2 md:p-3 shadow-sm">
                  <Shield className="w-5 md:w-6 h-5 md:h-6 text-orange-500" aria-hidden="true" focusable="false" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Garantia Blindada de 7 Dias
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2 md:mb-3">
              Se você não vender seu primeiro site em <span className="text-orange-600 font-semibold">7 dias</span> seguindo o método, 
              devolvemos <span className="text-orange-600 font-semibold">100% do seu investimento</span>.
            </p>
            <div className="inline-flex items-center gap-2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-orange-200 mt-2 md:mt-3">
              <Shield className="w-3 md:w-4 h-3 md:h-4 text-orange-500" aria-hidden="true" />
              <span className="text-sm md:text-base font-medium text-orange-700">Não vendeu? Devolvemos 100%.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DynamicFinalOfferSection;
