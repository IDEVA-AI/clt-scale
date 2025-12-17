export interface VariationConfig {
  id: string;
  pricing: {
    originalPrice: string;
    installmentPrice: string;
    installmentCount: number;
    cashPrice: string;
    discountPercentage: string;
    bonusValue: string;
  };
  checkout: {
    title: string;
    description: string;
    checkoutUrl: string;
    utmParams: {
      utm_source: string;
      utm_medium: string;
      utm_campaign: string;
      utm_content: string;
    };
  };
}

const config: VariationConfig = {
  id: 'lp2',
  pricing: {
    originalPrice: 'R$ 499',
    installmentPrice: 'R$ 9,45',
    installmentCount: 12,
    cashPrice: 'R$ 97',
    discountPercentage: '85%',
    bonusValue: 'R$ 1.802'
  },
  checkout: {
    title: 'Só mais um passo pra liberar seu acesso completo.',
    description: 'Preencha seus dados pra seguir direto pro checkout.',
    checkoutUrl: 'https://pay.hotmart.com/K102191894H?checkoutMode=10',
    utmParams: {
      utm_source: 'afiliado',
      utm_medium: 'referral',
      utm_campaign: 'clt-scale-lp2',
      utm_content: 'final-offer'
    }
  }
};

export const getVariationConfig = (): VariationConfig => {
  return config;
};
