# ❤️ Contador de Relacionamento - Igor + Krislayne ❤️

Um contador de relacionamento romântico e interativo criado especialmente para Igor e Krislayne, celebrando seu amor desde 16 de maio de 2024.

## ✨ Características

- **Contador de Tempo Preciso**: Calcula exatamente anos, meses, dias, horas, minutos e segundos de relacionamento
- **Carrossel de Fotos**: Galeria interativa com fotos do casal e backgrounds românticos
- **Botão "Nossa Música"**: Reproduz "É Por Você Que Canto" de Leandro & Leonardo
- **Design Romântico**: Layout com gradientes, animações e fontes elegantes
- **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop

## 🎨 Tecnologias Utilizadas

- **React 19** - Framework JavaScript moderno
- **Vite** - Build tool rápido e eficiente
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones elegantes
- **Google Fonts** - Fontes românticas (Great Vibes, Dancing Script, Pacifico)

## 🚀 Como Executar

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Executar servidor de desenvolvimento
pnpm run dev

# Abrir no navegador
http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm run build

# Visualizar build localmente
pnpm run preview
```

## 📱 Deploy no GitHub Pages

1. Faça fork ou clone este repositório
2. Vá para Settings > Pages no GitHub
3. Selecione "GitHub Actions" como source
4. O site será automaticamente deployado em: `https://seu-usuario.github.io/contador-igor-krislayne`

## 💝 Funcionalidades Especiais

### Cálculo Preciso de Datas
O contador considera corretamente:
- Meses com 30 e 31 dias
- Anos bissextos
- Mudanças de mês e ano
- Atualização em tempo real a cada segundo

### Carrossel Interativo
- Navegação manual com setas
- Indicadores visuais
- Auto-avanço a cada 5 segundos
- Efeitos de transição suaves

### Animações e Efeitos
- Corações pulsantes
- Gradientes animados
- Efeitos hover nos cartões
- Transições suaves
- Brilho e sombras dinâmicas

## 🎵 Música

O botão "Nossa Música" está preparado para reproduzir "É Por Você Que Canto" de Leandro & Leonardo. Para implementação completa, adicione o arquivo de áudio ou integre com serviços de streaming.

## 📸 Adicionando Mais Fotos

Para adicionar mais fotos ao carrossel:

1. Coloque as imagens na pasta `src/assets/`
2. Importe no arquivo `App.jsx`
3. Adicione ao array `photos`

```javascript
import novaFoto from './assets/nova-foto.jpg'

const photos = [
  { src: casalFoto, alt: "Igor e Krislayne", type: "photo" },
  { src: novaFoto, alt: "Nova Foto", type: "photo" },
  // ... outras fotos
]
```

## 💕 Personalização

### Alterar Data de Início
Edite a linha no `App.jsx`:
```javascript
const startDate = new Date(2024, 4, 16) // Ano, Mês-1, Dia
```

### Modificar Cores e Estilos
Edite o arquivo `App.css` para personalizar:
- Gradientes de fundo
- Cores dos cartões
- Animações
- Fontes

## 📄 Licença

Este projeto foi criado com amor para Igor e Krislayne. Sinta-se livre para usar como inspiração para seu próprio contador de relacionamento!

---

**Feito com ❤️ para celebrar o amor verdadeiro**

*"O tempo pode passar, mas nosso amor só cresce a cada segundo"* 💖
