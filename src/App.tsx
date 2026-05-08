import { motion } from "motion/react";
import { Bot, Smartphone, Headphones, ShoppingCart, ExternalLink, Zap, Shield, Truck, Instagram, MessageCircle, Music } from "lucide-react";

// ============================================================
// CONFIGURAÇÃO DOS SEUS LINKS (ALTERE AQUI MANUALMENTE)
// ============================================================
const STORE_CONFIG = {
  // Loja Marketplace
  mercadoLivre: "https://www.mercadolivre.com.br/notebook-asus-tuf-gaming-a15-rtx2050-ryzen-7-16gb-512gb-w11/up/MLBU3365156088?pdp_filters=item_id%3AMLB4162910849&matt_tool=38524122#origin=share&sid=share&wid=MLB4162910849&action=copy",
  shopee: "https://shopee.com.br/Console-Playstation-5-Sony-Slim-SSD-1TB-Edi%C3%A7%C3%A3o-Disk-i.1343318906.41309772410?extraParams=%7B%22display_model_id%22%3A290820296198%2C%22model_selection_logic%22%3A3%7D&sp_atk=231cff59-75ba-4493-93a9-2985cbbb7796&xptdk=231cff59-75ba-4493-93a9-2985cbbb7796",
  
  // Redes Sociais e Contato
  instagram: "https://www.instagram.com/coden_shop?igsh=aHRudTZhM2NvdXdu",
  tiktok: "https://www.tiktok.com/@coden.shop?_r=1&_t=ZS-96C9aIzj01k",
  whatsapp: "https://wa.me/qr/CVBKEX7BRDX4C1" // Formato: https://wa.me/55 + DDD + Numero
};

const products = [
  {
    id: 1,
    name: "Video Games (PS5)",
    category: "Consoles",
    price: "R$ 3.000,00",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=600&auto=format&fit=crop",
    brand: "Sony"
  },
  {
    id: 2,
    name: "Celulares (Samsung)",
    category: "Smartphones",
    price: "R$ 1.956,05",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop",
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Notebooks (TUF Gaming)",
    category: "Computers",
    price: "R$ 10.999,00",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop",
    brand: "ASUS"
  },
  {
    id: 4,
    name: "Video Games (Nintendo)",
    category: "Consoles",
    price: "R$ 2.384,10",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=600&auto=format&fit=crop",
    brand: "Nintendo"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-cyan-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center neon-glow">
              <Bot className="text-zinc-950 w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">CODEN</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#products" className="hover:text-cyan-400 transition-colors">Produtos</a>
            <a href="#marketplaces" className="hover:text-cyan-400 transition-colors">Onde Comprar</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>

          <button className="bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all active:scale-95 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Loja Online
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-bold text-cyan-400 mb-8 uppercase tracking-widest leading-none">
                <Zap className="w-3 h-3 fill-current" />
                Novidades 2024
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8">
                A tecnologia do <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">futuro está aqui.</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Explore o melhor em eletrônicos premium. Dos dispositivos mais avançados aos gadgets que simplificam sua rotina.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#products" className="w-full sm:w-auto bg-cyan-500 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all active:scale-95">
                  Ver Coleção
                </a>
                <a href="#marketplaces" className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold text-white hover:bg-zinc-800 transition-all border border-zinc-800">
                  Comprar via Marketplace
                </a>
              </div>
            </motion.div>

            {/* Floating Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-20 relative"
            >
              <div className="aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden glass p-4 border border-zinc-800/50">
                <img 
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tech Showcase"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden lg:block">
                <div className="glass p-6 rounded-2xl border border-zinc-800 animate-bounce group cursor-pointer">
                   <div className="text-cyan-400 font-bold mb-1">Qualidade Garantida</div>
                   <div className="text-zinc-500 text-sm italic group-hover:text-zinc-300">Testado rigorosamente</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories / Trust */}
        <section className="py-20 border-y border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Shield className="w-8 h-8 text-cyan-400" />, title: "Garantia Total", desc: "Todos os produtos com 1 ano de garantia." },
                { icon: <Truck className="w-8 h-8 text-cyan-400" />, title: "Entrega Rápida", desc: "Enviamos para todo o Brasil em 24h." },
                { icon: <Zap className="w-8 h-8 text-cyan-400" />, title: "Suporte Técnico", desc: "Equipe especializada pronta para ajudar." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-zinc-900/50 transition-colors">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4 italic">Catálogo</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Equipamento <span className="text-zinc-600">Essencial</span></h3>
            </div>
            <button className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
              Ver tudo <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border border-zinc-800/50 mb-6 transition-all group-hover:border-zinc-700">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <button className="bg-white text-zinc-950 p-2 rounded-full shadow-xl">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">{product.category}</div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{product.name}</h4>
                  </div>
                  <div className="text-lg font-mono font-bold text-zinc-100">{product.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Marketplaces Section */}
        <section id="marketplaces" className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[40px] p-12 md:p-20 overflow-hidden relative border border-zinc-800">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] -z-10" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
                    Compre onde você <br /> <span className="text-cyan-400">já confia.</span>
                  </h2>
                  <p className="text-zinc-400 text-lg mb-12">
                    Estamos presentes nas maiores plataformas do Brasil. Aproveite cupons de desconto, frete grátis e a segurança que você já conhece.
                  </p>
                  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Mercado Livre Button */}
                    <a 
                      href={STORE_CONFIG.mercadoLivre} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-[#fff159] hover:bg-[#ffe600] text-zinc-900 p-6 rounded-3xl transition-all active:scale-95 flex flex-col items-center gap-4 text-center overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform">
                        <ShoppingCart className="w-20 h-20" />
                      </div>
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <img src="https://static.mlstatic.com/org-img/mkt/home-v2/icons/favicon.ico" alt="ML" className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-black text-lg tracking-tight leading-tight uppercase">Mercado Livre</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 font-bold text-xs bg-black/5 px-4 py-1.5 rounded-full">
                        Comprar Agora <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>

                    {/* Shopee Button */}
                    <a 
                      href={STORE_CONFIG.shopee} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-[#ee4d2d] hover:bg-[#ff5722] text-white p-6 rounded-3xl transition-all active:scale-95 flex flex-col items-center gap-4 text-center overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-150 transition-transform text-white">
                        <ShoppingCart className="w-20 h-20" />
                      </div>
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <div className="w-5 h-5 bg-[#ee4d2d] rounded-sm flex items-center justify-center text-[8px] font-black italic">S</div>
                      </div>
                      <div>
                        <span className="block font-black text-lg tracking-tight leading-tight uppercase">Shopee Brasil</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 font-bold text-xs bg-white/10 px-4 py-1.5 rounded-full">
                        Comprar Agora <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>

                    {/* Instagram Button */}
                    <a 
                      href={STORE_CONFIG.instagram} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:brightness-110 text-white p-6 rounded-3xl transition-all active:scale-95 flex flex-col items-center gap-4 text-center overflow-hidden"
                    >
                      <Instagram className="w-10 h-10 mb-2" />
                      <div>
                        <span className="block font-black text-lg tracking-tight leading-tight uppercase">Instagram</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 font-bold text-xs bg-white/20 px-4 py-1.5 rounded-full">
                        Ver Novidades <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>

                    {/* TikTok Button */}
                    <a 
                      href={STORE_CONFIG.tiktok} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 text-white p-6 rounded-3xl transition-all active:scale-95 flex flex-col items-center gap-4 text-center overflow-hidden"
                    >
                      <Music className="w-10 h-10 mb-2 text-cyan-400" />
                      <div>
                        <span className="block font-black text-lg tracking-tight leading-tight uppercase tracking-widest">TikTok</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 font-bold text-xs bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full">
                        Siga-nos <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="hidden lg:grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square bg-zinc-800/40 rounded-3xl backdrop-blur-sm border border-zinc-700/50 p-8 flex items-center justify-center">
                       <Smartphone className="w-16 h-16 text-zinc-600" />
                    </div>
                    <div className="aspect-[4/3] bg-cyan-500/20 rounded-3xl backdrop-blur-sm border border-cyan-500/30 p-8 flex flex-col justify-end">
                       <div className="text-cyan-400 font-bold">Frete Grátis</div>
                       <div className="text-zinc-400 text-sm">Em compras selecionadas</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="aspect-[3/4] bg-zinc-800/40 rounded-3xl backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col justify-between">
                       <Headphones className="w-12 h-12 text-zinc-600" />
                       <div className="text-zinc-300 font-bold">100% Original</div>
                    </div>
                    <div className="aspect-square bg-zinc-800/40 rounded-3xl backdrop-blur-sm border border-zinc-700/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                  <Bot className="text-zinc-950 w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white uppercase">CODEN</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-6">
                Redefinindo sua experiência tecnológica. Produtos selecionados por especialistas para entusiastas por inovação.
              </p>
              <div className="flex gap-4">
                <a href={STORE_CONFIG.instagram} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass border border-zinc-800 flex items-center justify-center cursor-pointer hover:border-cyan-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={STORE_CONFIG.tiktok} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass border border-zinc-800 flex items-center justify-center cursor-pointer hover:border-cyan-500 transition-colors">
                  <Music className="w-4 h-4 text-cyan-400" />
                </a>
                <a href={STORE_CONFIG.whatsapp} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass border border-zinc-800 flex items-center justify-center cursor-pointer hover:border-cyan-500 transition-colors">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Navegação</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Todos os Produtos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Novidades</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Promoções</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Suporte</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Rastreamento</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:row items-center justify-between gap-4 text-xs font-medium text-zinc-600 uppercase tracking-widest">
            <div>© 2024 Coden Electronics. Todos os direitos reservados.</div>
            <div className="flex gap-8">
              <span>Feito com ❤️ por Coden Team</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={STORE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-90 transition-all flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Fale Conosco agora!
        </span>
      </a>
    </div>
  );
}
