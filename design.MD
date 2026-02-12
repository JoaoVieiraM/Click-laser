# 🎨 DESIGN.MD — Click Laser Estética | Especificações de Design

---

## 🎯 Direção Criativa

**Conceito:** *"Delicadeza Premium com Autoridade Clínica"*

A página deve transmitir a sensação de que a cliente está entrando em um espaço sofisticado e acolhedor, onde cada detalhe foi pensado para ela. A estética visual combina a elegância da marca (elementos ornamentais dourados da logo) com a modernidade e limpeza de um design contemporâneo inspirado na referência visual fornecida.

**Sentimentos a transmitir:**
- ✨ Delicadeza e feminilidade (sem ser infantil)
- 🛡️ Segurança e confiança profissional
- 👑 Autoridade e experiência de 22 anos
- 🌸 Acolhimento e bem-estar

**Tom visual:** Luxo acessível — premium mas convidativo, clínico mas acolhedor.

---

## 🎨 Paleta de Cores

Extraída da logo (vermelho + dourado) e combinada com tons da referência visual (rosé + neutros quentes).

### Cores Principais

| Papel | Nome | HEX | RGB | Uso |
|---|---|---|---|---|
| **Primária** | Borgonha Click | `#8B1A2B` | 139, 26, 43 | Headlines, CTA principal, elementos de destaque, hover states |
| **Secundária** | Dourado Elegance | `#C9A84C` | 201, 168, 76 | Ornamentos, ícones, bordas decorativas, destaques premium |
| **Accent** | Rosé Suave | `#D4A0A0` | 212, 160, 160 | Backgrounds de seção, cards, tags, elementos decorativos |

### Cores de Suporte

| Papel | Nome | HEX | RGB | Uso |
|---|---|---|---|---|
| **Background Principal** | Creme Pérola | `#FBF8F4` | 251, 248, 244 | Fundo principal da página |
| **Background Alternado** | Blush Whisper | `#F5EDED` | 245, 237, 237 | Seções alternadas (sobre, tecnologia) |
| **Background Destaque** | Rosé Section | `#C27878` | 194, 120, 120 | Seções de destaque (como na ref visual — faixas rosé) |
| **Texto Principal** | Grafite Quente | `#2D2226` | 45, 34, 38 | Corpo do texto, parágrafos |
| **Texto Secundário** | Cinza Elegante | `#6B5B5E` | 107, 91, 94 | Subtítulos, textos auxiliares |
| **Branco** | Branco Neve | `#FFFFFF` | 255, 255, 255 | Texto em fundos escuros, cards |
| **Sucesso/Confiança** | Verde Aprovação | `#4A7C59` | 74, 124, 89 | Selo de segurança, badges "ANVISA aprovado" |

### Gradientes

```css
/* Gradiente Hero Overlay */
--gradient-hero: linear-gradient(135deg, rgba(139, 26, 43, 0.85) 0%, rgba(194, 120, 120, 0.7) 100%);

/* Gradiente Dourado (ornamentos) */
--gradient-gold: linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%);

/* Gradiente Rosé Suave (backgrounds) */
--gradient-rose: linear-gradient(180deg, #FBF8F4 0%, #F5EDED 100%);

/* Gradiente CTA Button */
--gradient-cta: linear-gradient(135deg, #8B1A2B 0%, #A62639 100%);
```

---

## ✒️ Tipografia

### Fontes (Google Fonts)

| Uso | Fonte | Peso | Fallback |
|---|---|---|---|
| **Display / H1** | **Playfair Display** | 700 (Bold), 600 (SemiBold) | Georgia, serif |
| **Headings H2-H3** | **Cormorant Garamond** | 600 (SemiBold), 500 (Medium) | Georgia, serif |
| **Body / Parágrafos** | **Lato** | 400 (Regular), 300 (Light) | Helvetica, sans-serif |
| **CTA / Botões** | **Lato** | 600 (SemiBold), 700 (Bold) | Helvetica, sans-serif |
| **Labels / Badges** | **Lato** | 500 (Medium) | Helvetica, sans-serif |

### Escala Tipográfica

```css
/* Desktop */
--font-h1: 56px / 1.1 — Playfair Display Bold — letter-spacing: -0.02em
--font-h2: 40px / 1.2 — Cormorant Garamond SemiBold — letter-spacing: -0.01em
--font-h3: 28px / 1.3 — Cormorant Garamond Medium
--font-body: 17px / 1.7 — Lato Regular
--font-body-lg: 20px / 1.6 — Lato Light (subtítulos)
--font-small: 14px / 1.5 — Lato Regular
--font-button: 16px / 1 — Lato SemiBold — letter-spacing: 0.05em — text-transform: uppercase
--font-caption: 12px / 1.4 — Lato Medium — letter-spacing: 0.08em — text-transform: uppercase

/* Mobile */
--font-h1-mobile: 36px / 1.15
--font-h2-mobile: 30px / 1.25
--font-h3-mobile: 22px / 1.3
--font-body-mobile: 16px / 1.7
```

### Justificativa
- **Playfair Display** para headlines transmite sofisticação editorial, remetendo ao universo premium da marca.
- **Cormorant Garamond** para H2/H3 adiciona elegância clássica e feminina sem ser antiquada.
- **Lato** para corpo e botões oferece excelente legibilidade e modernidade como contraponto às serifadas.

---

## 📐 Layout e Grid

### Grid System

```css
/* Container máximo */
max-width: 1280px;
padding: 0 60px; /* Desktop */
padding: 0 24px; /* Mobile */

/* Grid */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 24px; /* Desktop */
gap: 16px; /* Mobile */
```

### Breakpoints

| Nome | Largura | Colunas |
|---|---|---|
| **Desktop Large** | ≥ 1280px | 12 colunas |
| **Desktop** | ≥ 1024px | 12 colunas |
| **Tablet** | ≥ 768px | 8 colunas |
| **Mobile** | < 768px | 4 colunas |

### Espaçamento entre Seções

```css
--section-padding-desktop: 120px 0;
--section-padding-tablet: 80px 0;
--section-padding-mobile: 64px 0;
```

---

## 🧩 Layout por Seção

### 1. HEADER
- **Posição:** `position: fixed; top: 0; z-index: 1000;`
- **Altura:** 80px desktop / 64px mobile
- **Background inicial:** `transparent`
- **Background scroll:** `rgba(251, 248, 244, 0.95)` com `backdrop-filter: blur(20px)`
- **Transição:** fade suave de 0.4s
- **Logo:** lado esquerdo, altura 48px
- **Nav links:** centro, Lato Medium 14px uppercase, tracking wide
- **CTA botão:** lado direito, bordas arredondadas (border-radius: 50px), fundo borgonha

### 2. HERO SECTION
- **Layout:** Full-width, full-viewport (100vh), imagem de fundo com texto sobreposto via HTML/CSS
- **Background image desktop:** `Design_sem_nome.png` (16:9) — silhueta feminina, luz dramática borgonha/creme
- **Foto da dona (`fotodona.jpg`):** com border orgânico ou moldura dourada decorativa, clip-path elegante
- **Foto da equipe (`IMG_6895.HEIC`):** full-width com overlay sutil e texto "Nossa Equipe" sobreposto
- **Background:** `#F5EDED` (blush whisper)
- **Detalhe:** Linha ornamental dourada separadora no topo da seção
- **Nome "Cibele dos Santos Ribeiro"** em Cormorant Garamond Italic + cargo em Lato Light uppercase
- **Assinatura:** elemento cursivo estilizado abaixo do texto

### 4. TECNOLOGIA
- **Layout:** Headline + subtítulo centralizados, seguidos de 4 cards em grid (2x2 desktop, 1 coluna mobile)
- **Background:** `#FBF8F4` (creme)
- **Cards:** Fundo branco, shadow suave, ícone dourado no topo, border-left com gradiente borgonha
- **Imagem do equipamento:** posicionada ao lado ou integrada como background com overlay
- **Badge "Soprano Ice Platinum":** Estilo premium com borda dourada

### 5. SERVIÇOS
- **Layout:** 3 cards em linha (desktop), stack (mobile)
- **Estilo cards:** 
  - Fundo com imagem sutil + overlay semi-transparente rosé/borgonha
  - Ícone ou ilustração minimalista no topo
  - Título em Cormorant Garamond
  - Descrição em Lato Light
  - Botão "Saiba mais" → âncora ou modal
- **Background seção:** faixa em `#C27878` (rosé section) com texto branco — referência ao layout da imagem de inspiração
- **Hover effect:** card levanta (translateY -8px) + sombra mais pronunciada

### 6. UNIDADES
- **Layout:** 6 cards, scroll horizontal no mobile, grid 3+3 no desktop
- **Estilo card:**
  - Número grande estilizado (01, 02, 03...) em Playfair Display, cor dourada
  - Nome da unidade em bold
  - Endereço em texto secundário
  - Botão WhatsApp (verde WhatsApp `#25D366` com ícone)
  - Botão Maps (outline borgonha)
- **Background:** `#FBF8F4`
- **Elemento decorativo:** Mini mapa estilizado ou pin icons dourados

### 7. DEPOIMENTOS
- **Layout:** Carrossel (swiper) com 1 depoimento visível por vez (desktop), swipe no mobile
- **Estilo:**
  - Aspas grandes em Playfair Display, cor dourada (decorativas)
  - Texto do depoimento em Lato Italic
  - Nome + estrelas abaixo
  - Foto circular com border dourada (se disponível)
- **Background:** `#F5EDED`
- **Navegação:** Dots + setas elegantes
- **Auto-play:** 5 segundos por slide

### 8. FAQ
- **Layout:** Accordion centralizado, max-width 800px
- **Estilo:**
  - Pergunta: Cormorant Garamond SemiBold 20px, cor borgonha
  - Ícone +/- animado com rotação suave
  - Resposta: Lato Regular, cor grafite, padding generoso
  - Separador: linha fina dourada entre itens
- **Background:** `#FBF8F4`

### 9. CTA FINAL
- **Layout:** Full-width, centralizado
- **Background:** Gradiente borgonha escuro com textura sutil (noise/grain)
- **Texto:** Branco, headline em Playfair Display
- **Botão:** Grande, fundo dourado, texto borgonha, hover inverte
- **Ornamento:** Elementos decorativos dourados (da identidade visual da logo) como moldura

### 10. FOOTER
- **Background:** `#2D2226` (grafite quente — escuro)
- **Texto:** Branco e rosé suave
- **Layout:** 3 colunas (Logo+sobre | Unidades | Contato+Social)
- **Logo:** Versão clara/branca
- **Links:** Hover com underline dourado
- **Social icons:** Estilo outline, hover preenchimento dourado

---

## 🎬 GSAP — Plano de Animações

### Dependências

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
```

### Configuração Global

```javascript
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Configuração padrão
gsap.defaults({
  ease: "power3.out",
  duration: 1
});
```

---

### Animação 1: Page Load — Header

```javascript
// Header fade in
gsap.from(".header", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.2
});
```

### Animação 2: Hero Section — Cinematic Reveal

```javascript
const heroTL = gsap.timeline({ delay: 0.3 });

// Background image zoom-in sutil
heroTL
  .from(".hero-bg", {
    scale: 1.15,
    duration: 2.5,
    ease: "power2.out"
  })
  // Título "Click Laser" — clip-path reveal dramático
  .from(".hero-title", {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  }, "-=1.8")
  // Subtítulo "Depilação a Laser, Estética & Beleza" — fade por linha
  .from(".hero-subtitle-line", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out"
  }, "-=0.6")
  // CTA button
  .from(".hero-cta", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3")
  // Badges de prova social
  .from(".hero-badges > *", {
    y: 15,
    opacity: 0,
    duration: 0.4,
    stagger: 0.08,
    ease: "power2.out"
  }, "-=0.2");

// Parallax no scroll — imagem move mais lento
gsap.to(".hero-bg", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: 1
  },
  y: 100,
  scale: 1.05,
  ease: "none"
});
```

### Animação 3: Scroll Reveal Genérico (Seções)

```javascript
// Reveal universal para seções
gsap.utils.toArray(".section-title").forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

gsap.utils.toArray(".section-subtitle").forEach(sub => {
  gsap.from(sub, {
    scrollTrigger: {
      trigger: sub,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    ease: "power3.out"
  });
});
```

### Animação 4: Sobre Nós — Foto + Texto

```javascript
// Foto da dona
gsap.from(".about-photo", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%"
  },
  x: -80,
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power3.out"
});

// Moldura decorativa da foto
gsap.from(".about-photo-frame", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%"
  },
  x: -100,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: "power3.out"
});

// Texto sobre
gsap.from(".about-text > *", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%"
  },
  x: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out"
});
```

### Animação 5: Tecnologia — Cards com Stagger

```javascript
gsap.from(".tech-card", {
  scrollTrigger: {
    trigger: ".tech-section",
    start: "top 70%"
  },
  y: 80,
  opacity: 0,
  scale: 0.95,
  duration: 0.7,
  stagger: 0.15,
  ease: "power3.out"
});

// Ícone do card — bounce sutil
gsap.from(".tech-card-icon", {
  scrollTrigger: {
    trigger: ".tech-section",
    start: "top 70%"
  },
  scale: 0,
  duration: 0.5,
  stagger: 0.15,
  delay: 0.4,
  ease: "back.out(2)"
});
```

### Animação 6: Serviços — Cards Reveal

```javascript
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 70%"
  },
  y: 100,
  opacity: 0,
  rotationX: 10,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});
```

### Animação 7: Unidades — Counting + Cards

```javascript
// Cards das unidades com stagger
gsap.from(".unit-card", {
  scrollTrigger: {
    trigger: ".units-section",
    start: "top 70%"
  },
  y: 60,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power2.out"
});

// Counter animado "6 unidades"
gsap.from(".counter-number", {
  scrollTrigger: {
    trigger: ".units-section",
    start: "top 75%"
  },
  textContent: 0,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 },
  stagger: 0.3
});
```

### Animação 8: Depoimentos — Carousel Entry

```javascript
gsap.from(".testimonials-section", {
  scrollTrigger: {
    trigger: ".testimonials-section",
    start: "top 75%"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

// Aspas decorativas
gsap.from(".quote-mark", {
  scrollTrigger: {
    trigger: ".testimonials-section",
    start: "top 70%"
  },
  scale: 0,
  rotation: -20,
  duration: 0.8,
  ease: "elastic.out(1, 0.6)"
});
```

### Animação 9: FAQ — Accordion

```javascript
// Itens do FAQ aparecem com stagger
gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-section",
    start: "top 70%"
  },
  x: -40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
});

// Animação de abrir/fechar accordion (via JS event)
function toggleFAQ(item) {
  const content = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');
  const isOpen = item.classList.contains('active');

  if (isOpen) {
    gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
    gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
    item.classList.remove('active');
  } else {
    gsap.set(content, { height: "auto" });
    const fullHeight = content.scrollHeight;
    gsap.from(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
    gsap.to(icon, { rotation: 45, duration: 0.3, ease: "power2.out" });
    item.classList.add('active');
  }
}
```

### Animação 10: CTA Final — Impacto

```javascript
gsap.from(".final-cta-headline", {
  scrollTrigger: {
    trigger: ".final-cta-section",
    start: "top 75%"
  },
  y: 50,
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: "power3.out"
});

// Botão CTA com pulse contínuo
gsap.to(".final-cta-button", {
  scrollTrigger: {
    trigger: ".final-cta-section",
    start: "top 75%"
  },
  scale: 1.05,
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1
});
```

### Animação 11: Botão WhatsApp Flutuante

```javascript
// Aparece após scroll do hero
gsap.from(".whatsapp-float", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "bottom 50%",
    toggleActions: "play none none reverse"
  },
  scale: 0,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(2)"
});

// Pulse contínuo para chamar atenção
gsap.to(".whatsapp-float", {
  scale: 1.1,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
```

### Animação 12: Parallax Sutil nos Ornamentos

```javascript
gsap.utils.toArray(".ornament-deco").forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    y: -50,
    ease: "none"
  });
});
```

### Animação 13: Header Scroll Behavior

```javascript
// Header fica sólido ao scrollar
ScrollTrigger.create({
  start: "top -80",
  end: 99999,
  toggleClass: {
    className: "header--scrolled",
    targets: ".header"
  }
});
```

---

## 🖼️ Elementos Visuais e Assets

### Ornamentos e Decorações
- **Ornamento da logo:** Extrair os elementos decorativos dourados (arabescos/volutas) da logo e usar como separadores de seção e detalhes decorativos em SVG
- **Linhas douradas:** Separadores horizontais finos com gradiente dourado
- **Pattern sutil:** Textura de linho ou tecido fino como background overlay (opacity 3-5%)

### Ícones
- **Estilo:** Line icons (outline), peso 1.5px, cor dourada ou borgonha
- **Biblioteca sugerida:** Lucide Icons ou Phosphor Icons
- **Tamanho padrão:** 24px body, 32px cards, 48px features

### Imagens

**Assets disponíveis:**
- `IMG_6895.HEIC` — Foto da equipe (seção Sobre Nós / Nossa Equipe) — localizada na pasta `/assets/` do projeto
- Hero images serão geradas via Nano Banana (ver `prompts-hero-images.MD`)

**Estilo fotográfico:** Tons quentes (3600-4000K), iluminação suave/difusa, ambiente clean spa/clínica premium. Referência: editorial de beleza tipo Vogue Beauty — pele real com glow natural, tons rosé e dourado.
- **Tratamento:** Warm filter sutil, shadows levantados para borgonha, highlights em creme pérola, grain orgânico leve (Kodak Portra 400 look)
- **Formatos:** WebP com fallback JPG, lazy loading
- **Aspect ratios:** Hero desktop (16:9), Hero mobile (9:16), Sobre/Equipe (3:4 portrait), Serviços (4:3), Cards (1:1)

### Botões

```css
/* CTA Primário */
.btn-primary {
  background: var(--gradient-cta);
  color: #FFFFFF;
  padding: 16px 40px;
  border-radius: 50px;
  font: 600 15px/1 'Lato', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 4px 20px rgba(139, 26, 43, 0.3);
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(139, 26, 43, 0.4);
}

/* CTA Secundário */
.btn-secondary {
  background: transparent;
  color: var(--borgonha);
  border: 2px solid var(--borgonha);
  padding: 14px 36px;
  border-radius: 50px;
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  background: var(--borgonha);
  color: #FFFFFF;
}

/* Botão WhatsApp */
.btn-whatsapp {
  background: #25D366;
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
```

### Sombras

```css
/* Card suave */
--shadow-card: 0 4px 24px rgba(45, 34, 38, 0.08);
/* Card hover */
--shadow-card-hover: 0 12px 40px rgba(45, 34, 38, 0.12);
/* Botão CTA */
--shadow-cta: 0 4px 20px rgba(139, 26, 43, 0.3);
/* Header scrolled */
--shadow-header: 0 2px 20px rgba(45, 34, 38, 0.06);
```

### Border Radius

```css
--radius-sm: 8px;    /* inputs, small elements */
--radius-md: 16px;   /* cards */
--radius-lg: 24px;   /* sections, images */
--radius-full: 50px; /* buttons, pills */
--radius-round: 50%; /* avatars */
```

---

## 📱 Responsividade

### Mobile-First Adjustments

| Elemento | Desktop | Mobile |
|---|---|---|
| **Hero** | 2 colunas lado a lado | Stack vertical, imagem acima |
| **Sobre** | 2 colunas (foto+texto) | Stack, foto centralizada em cima |
| **Tecnologia cards** | Grid 2x2 | Stack 1 coluna |
| **Serviços cards** | 3 em linha | Stack 1 coluna |
| **Unidades** | Grid 3+2 | Scroll horizontal (snap) |
| **Depoimentos** | Carousel com peek | Carousel full-width |
| **FAQ** | Max-width 800px centralizado | Full-width com padding |
| **Header nav** | Links visíveis | Hamburger menu com overlay fullscreen |

### Menu Mobile

- **Ícone:** Hamburger customizado (3 linhas com animação para X)
- **Overlay:** Fullscreen, fundo borgonha escuro, links centralizados em Playfair Display
- **Animação:** GSAP slide-in da direita + stagger nos links

---

## ⚡ Performance e SEO Técnico

### Performance

```
- Imagens: WebP, lazy loading, srcset para diferentes resoluções
- Fontes: font-display: swap, preload das fontes críticas
- CSS: Critical CSS inline no <head>, restante assíncrono
- GSAP: Carregar assíncrono, will-change nos elementos animados
- LCP target: < 2.5s
- CLS target: < 0.1
- FID target: < 100ms
```

### SEO Técnico

```
- HTML semântico: <header>, <nav>, <main>, <section>, <article>, <footer>
- Schema.org JSON-LD: BeautySalon (ver info.MD)
- Alt text descritivo em todas as imagens
- Heading hierarchy: único H1, H2 por seção, H3 para sub-tópicos
- Canonical URL definida
- Open Graph + Twitter Cards
- Sitemap.xml
- robots.txt
- Mobile-friendly (responsive)
- HTTPS obrigatório
- Velocidade de carregamento otimizada
```

---

## 📁 Estrutura de Arquivos Sugerida

```
clicklaser/
├── index.html
├── css/
│   ├── style.css          (estilos principais)
│   ├── animations.css     (classes de animação)
│   └── responsive.css     (media queries)
├── js/
│   ├── main.js            (GSAP + interações)
│   ├── header.js          (scroll behavior + mobile menu)
│   └── faq.js             (accordion logic)
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── logo-white.svg
│   │   ├── hero-desktop.png      (Design_sem_nome.png — sem texto)
│   │   ├── hero-mobile.png       (Inserir_um_subtítulo.png — sem texto)
│   │   ├── fotodona.jpg          (Cibele dos Santos Ribeiro)
│   │   ├── IMG_6895.HEIC         (Foto da equipe)
│   │   ├── imagem1.jpg           (Espaço/clínica)
│   │   ├── imagem2.jpg           (Espaço/clínica)
│   │   ├── imagem3.jpg           (Espaço/clínica)
│   │   └── ...                   (demais imagens numeradas)
│   ├── icons/
│   │   ├── whatsapp.svg
│   │   ├── instagram.svg
│   │   └── map-pin.svg
│   └── ornaments/
│       ├── ornament-top.svg
│       ├── ornament-divider.svg
│       └── ornament-corner.svg
├── favicon.ico
├── sitemap.xml
└── robots.txt
```

---

## ✅ CHECKLIST DE ASSETS NECESSÁRIOS

- [x] Foto da dona (Cibele) → `fotodona.jpg`
- [x] Foto da equipe → `IMG_6895.HEIC`
- [x] Hero image desktop (16:9) → `Design_sem_nome.png`
- [x] Hero image mobile (9:16) → `Inserir_um_subtítulo.png`
- [x] Logo Click versão tipográfica (upload)
- [x] Logo Click versão ornamental (upload)
- [x] Prompts para geração de hero images (ver `prompts-hero-images.MD`)
- [ ] Imagens dos espaços da clínica → `imagem1.jpg`, `imagem2.jpg`, etc. (a serem adicionadas pelo cliente)
- [ ] Logo em SVG (alta resolução, fundo transparente) — pode ser vetorizado da PNG
- [ ] Logo versão branca/clara para footer
- [x] Foto ou render do equipamento Soprano Ice Platinum
- [ ] Ornamentos da logo isolados em SVG
- [ ] Favicon (versão simplificada da logo)
- [ ] OG Image (1200x630px) para compartilhamento social



