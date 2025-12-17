# CLT Scale - Landing Page

Landing page independente extraída do projeto CLT com Grana, focada na página LP2.

## 🚀 Tecnologias

- **Vite** - Build tool ultrarrápido
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animações
- **Radix UI** - Componentes acessíveis

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (copie de `.env.example`):

```env
# Facebook Pixel ID(s) - separar múltiplos por vírgula
VITE_FACEBOOK_PIXEL_IDS=1597639481206943

# Clarity Project ID
VITE_CLARITY_PROJECT_ID=tx61eiszrq
```

### Checkout URL

Para alterar a URL de checkout, edite o arquivo `src/config/variations.ts`:

```typescript
checkout: {
  checkoutUrl: 'https://pay.hotmart.com/SEU_LINK',
  // ...
}
```

## 📁 Estrutura

```
clt-scale/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e mídia
│   ├── components/      # Componentes React
│   │   └── ui/          # Componentes UI reutilizáveis
│   ├── config/          # Configurações (preços, checkout)
│   ├── hooks/           # Custom hooks (pixel, clarity)
│   ├── lib/             # Utilitários
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Design System

O projeto utiliza CSS variables para cores e tokens. Principais cores:

- **Primary (Laranja)**: `--primary` / `hsl(16 83% 55%)`
- **Secondary (Verde)**: `--secondary` / `hsl(160 84% 39%)`
- **Background**: `--background` / `hsl(0 0% 3.9%)`

## 📊 Analytics

### Facebook Pixel

Configurado via `useFacebookPixel` hook. O pixel é carregado após o HeroSection ser visível para melhor performance.

### Microsoft Clarity

Configurado via `useClarityInline` hook com ID do projeto.

## 🚀 Deploy

### Netlify

```bash
npm run build
# Deploy da pasta 'dist'
```

### Vercel

```bash
npm run build
# Deploy da pasta 'dist'
```

## 📝 Notas

- Este projeto é uma extração independente da página `/b/lp2` do projeto principal CLT com Grana
- Mantém o mesmo design system e arquitetura, mas é 100% standalone
- Otimizado para performance e SEO
