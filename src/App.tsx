import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import ForWhoSection from "@/components/ForWhoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import DynamicFinalOfferSection from "@/components/DynamicFinalOfferSection";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Footer from "@/components/Footer";
import Lp2VTurbVideo from "@/components/Lp2VTurbVideo";
import { getVariationConfig } from "@/config/variations";
import { useFacebookPixel } from "@/hooks/use-facebook-pixel";
import { useLazyScripts } from "@/hooks/use-lazy-scripts";
import { useClarityInline } from "@/hooks/use-clarity-inline";

const App = () => {
  const config = getVariationConfig();
  const { heroLoaded } = useLazyScripts();
  
  const fbEnv = (import.meta as any)?.env || {};
  const fbPixelIds = fbEnv.VITE_FACEBOOK_PIXEL_IDS;
  useFacebookPixel(heroLoaded, fbPixelIds);
  
  const clarityId = fbEnv.VITE_CLARITY_PROJECT_ID || 'tx61eiszrq';
  useClarityInline(clarityId);

  if (!config) {
    return <div>Configuração não encontrada</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* SVG Gradient Definition */}
      <svg className="gradient-defs" aria-hidden="true">
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EB5F2E', stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: '#FF8C42', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#FFD93D', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF9F4A', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <HeroSection />
      <Lp2VTurbVideo />
      <BackgroundWrapper>
        <StorySection />
        <SolutionSection variant="concise" />
        <TestimonialsSection variant="mobilePrints" />
        <HowItWorksSection />
        <DynamicFinalOfferSection config={config} ctaClassName="lp2-green" />
        <BenefitsSection />
        <ForWhoSection />
        <FAQSection />
        <GuaranteeSection />
      </BackgroundWrapper>
      <Footer />
    </main>
  );
};

export default App;
