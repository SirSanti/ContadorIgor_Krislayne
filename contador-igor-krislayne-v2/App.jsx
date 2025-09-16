import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Heart, Music, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import casalFoto from './assets/casal-foto.jpg'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'
import foto7 from './assets/foto7.jpg'
import foto8 from './assets/foto8.jpg'
import foto9 from './assets/foto9.jpg'
import foto10 from './assets/foto10.jpg'
import heartsBg from './assets/hearts-bg.jpg'
import romanticBg from './assets/romantic-bg.jpg'
import coupleSilhouette from './assets/couple-silhouette.jpg'
import './App.css'

function App() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Data de início do relacionamento: 16 de maio de 2024
  const startDate = new Date(2024, 4, 16) // Mês 4 = maio (0-indexado)

  // Fotos do casal e backgrounds românticos
  const photos = [
    { src: casalFoto, alt: "Igor e Krislayne - Foto Original", type: "photo" },
    { src: foto1, alt: "Igor e Krislayne na Praia", type: "photo" },
    { src: foto2, alt: "Igor e Krislayne - Momento Carinhoso", type: "photo" },
    { src: foto3, alt: "Igor e Krislayne - Beijo no Coração", type: "photo" },
    { src: foto4, alt: "Igor e Krislayne na Praia", type: "photo" },
    { src: foto5, alt: "Igor e Krislayne - Selfie Romântica", type: "photo" },
    { src: foto6, alt: "Igor e Krislayne - Noite Especial", type: "photo" },
    { src: foto7, alt: "Igor e Krislayne - Sorrisos", type: "photo" },
    { src: foto8, alt: "Igor e Krislayne em Casa", type: "photo" },
    { src: foto9, alt: "Igor e Krislayne - Look Combinando", type: "photo" },
    { src: foto10, alt: "Igor e Krislayne - Elegantes", type: "photo" },
    { src: heartsBg, alt: "Corações Românticos", type: "background" },
    { src: romanticBg, alt: "Fundo Romântico", type: "background" },
    { src: coupleSilhouette, alt: "Silhueta do Casal", type: "background" }
  ]

  // Função para calcular tempo decorrido com precisão
  const calculateTimeElapsed = () => {
    const now = new Date()
    
    let years = now.getFullYear() - startDate.getFullYear()
    let months = now.getMonth() - startDate.getMonth()
    let days = now.getDate() - startDate.getDate()
    
    // Ajustar se o dia atual é menor que o dia de início
    if (days < 0) {
      months--
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
      days += lastMonth.getDate()
    }
    
    // Ajustar se o mês atual é menor que o mês de início
    if (months < 0) {
      years--
      months += 12
    }
    
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    
    return { years, months, days, hours, minutes, seconds }
  }

  // Atualizar contador a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed())
    }, 1000)

    // Calcular imediatamente na primeira renderização
    setTimeElapsed(calculateTimeElapsed())

    return () => clearInterval(interval)
  }, [])

  // Auto-avançar carrossel a cada 4 segundos (mais rápido para mostrar mais fotos)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [photos.length])

  // Função para tocar/pausar música
  const toggleMusic = () => {
    if (isPlaying) {
      // Pausar música
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setIsPlaying(false)
    } else {
      // Tocar música (usando embed do YouTube)
      setIsPlaying(true)
      // Simular reprodução por 3 segundos para demonstração
      setTimeout(() => {
        setIsPlaying(false)
      }, 3000)
    }
  }

  // Navegação do carrossel
  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const currentPhoto = photos[currentPhotoIndex]

  return (
    <div className="min-h-screen love-gradient flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-white pulse-glow">
        {/* Cabeçalho com nomes */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-400 heartbeat" />
            <h1 className="text-4xl font-bold romantic-title bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Igor + Krislayne
            </h1>
            <Heart className="w-8 h-8 text-red-400 heartbeat" />
          </div>
          <p className="text-sm opacity-80 elegant-script text-lg">
            Nosso amor desde 16 de maio de 2024 💕
          </p>
        </div>

        {/* Carrossel de fotos */}
        <div className="relative mb-8 float">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.alt}
              className={`w-full h-full transition-all duration-500 ${
                currentPhoto.type === 'photo' ? 'object-cover' : 'object-cover opacity-80'
              }`}
            />
            
            {/* Overlay para backgrounds */}
            {currentPhoto.type === 'background' && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-red-400 mx-auto mb-4 heartbeat" />
                  <h2 className="text-2xl font-bold romantic-title">Igor ❤️ Krislayne</h2>
                  <p className="text-sm opacity-90 mt-2 elegant-script">Amor Eterno</p>
                </div>
              </div>
            )}

            {/* Contador de fotos */}
            <div className="absolute top-4 right-4 bg-black/50 rounded-full px-3 py-1 text-xs">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          </div>
          
          {/* Controles do carrossel */}
          <button 
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all hover:scale-110 hover-lift"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all hover:scale-110 hover-lift"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores do carrossel */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 max-w-xs overflow-x-auto">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`w-2 h-2 rounded-full transition-all hover:scale-125 flex-shrink-0 ${
                  index === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contador de tempo */}
        <div className="space-y-3 mb-8">
          <div className="counter-card rounded-2xl p-4 text-center hover-lift">
            <div className="text-2xl font-bold pacifico">{timeElapsed.years}</div>
            <div className="text-sm opacity-90 elegant-script">
              {timeElapsed.years === 1 ? 'ano' : 'anos'}
            </div>
          </div>
          
          <div className="counter-card rounded-2xl p-4 text-center hover-lift">
            <div className="text-2xl font-bold pacifico">{timeElapsed.months}</div>
            <div className="text-sm opacity-90 elegant-script">
              {timeElapsed.months === 1 ? 'mês' : 'meses'}
            </div>
          </div>
          
          <div className="counter-card rounded-2xl p-4 text-center hover-lift">
            <div className="text-2xl font-bold pacifico">{timeElapsed.days}</div>
            <div className="text-sm opacity-90 elegant-script">
              {timeElapsed.days === 1 ? 'dia' : 'dias'}
            </div>
          </div>
          
          <div className="counter-card rounded-2xl p-4 text-center hover-lift">
            <div className="text-2xl font-bold pacifico">{timeElapsed.hours}</div>
            <div className="text-sm opacity-90 elegant-script">
              {timeElapsed.hours === 1 ? 'hora' : 'horas'}
            </div>
          </div>
          
          <div className="counter-card rounded-2xl p-4 text-center hover-lift">
            <div className="text-2xl font-bold pacifico">{timeElapsed.minutes}</div>
            <div className="text-sm opacity-90 elegant-script">
              {timeElapsed.minutes === 1 ? 'minuto' : 'minutos'}
            </div>
          </div>
          
          <div className="counter-card rounded-2xl p-4 text-center hover-lift">
            <div className="text-2xl font-bold pacifico animate-pulse">{timeElapsed.seconds}</div>
            <div className="text-sm opacity-90 elegant-script">
              {timeElapsed.seconds === 1 ? 'segundo' : 'segundos'}
            </div>
          </div>
        </div>

        {/* Botão Nossa Música */}
        <div className="text-center">
          <Button 
            onClick={toggleMusic}
            className={`w-full py-4 text-lg font-semibold rounded-2xl music-button elegant-script ${
              isPlaying 
                ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
                : ''
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-6 h-6 mr-2" />
                Tocando...
              </>
            ) : (
              <>
                <Play className="w-6 h-6 mr-2" />
                Nossa Música
              </>
            )}
          </Button>
          {isPlaying && (
            <div className="mt-3 p-3 bg-black/20 rounded-xl backdrop-blur-sm">
              <p className="text-sm font-medium elegant-script">
                🎵 "É Por Você Que Canto" - Leandro & Leonardo
              </p>
              <div className="mt-2 bg-white/20 rounded-full h-1 overflow-hidden">
                <div className="bg-green-400 h-1 rounded-full shimmer" style={{width: '30%'}}></div>
              </div>
              <p className="text-xs mt-1 opacity-70">
                Uma música especial para um amor especial ❤️
              </p>
            </div>
          )}
        </div>

        {/* Player de música oculto (para futura implementação) */}
        <audio ref={audioRef} style={{display: 'none'}}>
          {/* Aqui seria adicionado o arquivo de áudio */}
        </audio>

        {/* Mensagem romântica no rodapé */}
        <div className="text-center mt-6 opacity-80">
          <p className="text-xs belle-aurore">
            "O tempo pode passar, mas nosso amor só cresce a cada segundo" 💖
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
