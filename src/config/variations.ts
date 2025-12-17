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

// Configurações por variação de preço
const variations: Record<string, VariationConfig> = {
  // /a = R$ 37
  a: {
    id: 'lps-a',
    pricing: {
      originalPrice: 'R$ 497',
      installmentPrice: 'R$ 4,54',
      installmentCount: 12,
      cashPrice: 'R$ 37',
      discountPercentage: '93%',
      bonusValue: 'R$ 1.802'
    },
    checkout: {
      title: 'Só mais um passo pra liberar seu acesso completo.',
      description: 'Preencha seus dados pra seguir direto pro checkout.',
      checkoutUrl: 'https://pay.hotmart.com/V103446931R?off=y8ddj7dk&checkoutMode=10',
      utmParams: {
        utm_source: 'trafego',
        utm_medium: 'paid',
        utm_campaign: 'clt-scale-lps',
        utm_content: 'offer-37'
      }
    }
  },
  // /b = R$ 47
  b: {
    id: 'lps-b',
    pricing: {
      originalPrice: 'R$ 497',
      installmentPrice: 'R$ 5,76',
      installmentCount: 12,
      cashPrice: 'R$ 47',
      discountPercentage: '91%',
      bonusValue: 'R$ 1.802'
    },
    checkout: {
      title: 'Só mais um passo pra liberar seu acesso completo.',
      description: 'Preencha seus dados pra seguir direto pro checkout.',
      checkoutUrl: 'https://pay.hotmart.com/V103446931R?off=12ryc9al&checkoutMode=10',
      utmParams: {
        utm_source: 'trafego',
        utm_medium: 'paid',
        utm_campaign: 'clt-scale-lps',
        utm_content: 'offer-47'
      }
    }
  },
  // /c = R$ 67
  c: {
    id: 'lps-c',
    pricing: {
      originalPrice: 'R$ 497',
      installmentPrice: 'R$ 8,21',
      installmentCount: 12,
      cashPrice: 'R$ 67',
      discountPercentage: '87%',
      bonusValue: 'R$ 1.802'
    },
    checkout: {
      title: 'Só mais um passo pra liberar seu acesso completo.',
      description: 'Preencha seus dados pra seguir direto pro checkout.',
      checkoutUrl: 'https://pay.hotmart.com/V103446931R?off=rzjxzbus&checkoutMode=10',
      utmParams: {
        utm_source: 'trafego',
        utm_medium: 'paid',
        utm_campaign: 'clt-scale-lps',
        utm_content: 'offer-67'
      }
    }
  }
};

// Configuração padrão (fallback para /b = R$ 47)
const defaultVariation = 'b';

export const getVariationConfig = (): VariationConfig => {
  if (typeof window === 'undefined') return variations[defaultVariation];
  
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  const variation = path.split('/')[0]; // pega 'a', 'b' ou 'c'
  
  return variations[variation] || variations[defaultVariation];
};
