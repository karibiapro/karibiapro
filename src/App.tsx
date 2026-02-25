import { motion } from "motion/react";
import { 
  Bot, 
  Cpu, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Workflow,
  CheckCircle2,
  ArrowRight,
  Mail,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Search
} from "lucide-react";
import { useState } from "react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="KARIB'IA Logo" className="w-12 h-12 object-contain" />
          <span className="font-display font-bold text-2xl tracking-tight">KARIB'IA</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/50">
          <a href="#services" className="hover:text-white transition-colors">Expertises</a>
          <a href="#contact" className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">
            Disponible pour de nouveaux projets
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-10 leading-[0.9] text-white">
          L'IA qui <br />
          <span className="text-gradient">propulse</span> votre <br />
          croissance.
        </h1>
        <p className="max-w-xl text-xl text-white/50 mb-12 leading-relaxed">
          Karib'IA transforme vos processus métier grâce à des automatisations intelligentes et des agents IA sur mesure. Basé en Martinique, au service du monde.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="#contact" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-brand-primary transition-all duration-300 flex items-center gap-3 group">
            Démarrer l'automatisation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
            Nos expertises
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card p-10 hover-lift group"
  >
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-white/40 leading-relaxed text-lg">{description}</p>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-32 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Des solutions <span className="text-white/40">sans limites.</span></h2>
          <p className="text-white/50 text-xl leading-relaxed">
            Nous construisons l'infrastructure de demain pour les entreprises d'aujourd'hui. De la prospection automatisée à l'intégration profonde de LLM.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
            6 Expertises Clés
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          icon={Search}
          title="Prospection Automatisée"
          description="Systèmes intelligents de génération de leads et de prospection multicanale (Email, LinkedIn) pour booster vos ventes."
          delay={0.1}
        />
        <ServiceCard 
          icon={Bot}
          title="Agents IA Autonomes"
          description="Déploiement d'agents capables de gérer le support client et la qualification de leads 24/7 sans intervention humaine."
          delay={0.2}
        />
        <ServiceCard 
          icon={Workflow}
          title="Automatisation de Workflows"
          description="Connexion de vos outils (CRM, ERP, Slack) pour éliminer les tâches répétitives et libérer du temps créatif."
          delay={0.3}
        />
        <ServiceCard 
          icon={MessageSquare}
          title="IA Conversationnelle"
          description="Chatbots avancés utilisant GPT-4 et Claude pour une interaction naturelle et contextuelle avec vos clients."
          delay={0.4}
        />
        <ServiceCard 
          icon={Cpu}
          title="Intégration LLM"
          description="Intégration sur mesure de modèles de langage directement dans vos produits et infrastructures existantes."
          delay={0.5}
        />
        <ServiceCard 
          icon={Zap}
          title="Audit & Stratégie"
          description="Analyse de vos processus pour identifier les opportunités d'automatisation à fort impact sur votre ROI."
          delay={0.6}
        />
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbx_n2Bh7nC3s6TfLgoA3L0m7bKi45T6-RxcvB8urAU3P68S43SY01E9BNm6myNX3HpB/exec", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok || response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur de connexion. Veuillez réessayer.");
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Parlons de votre <span className="text-brand-primary">futur.</span></h2>
            <p className="text-white/50 text-xl mb-12 leading-relaxed">
              Vous avez un projet ou une question ? Notre équipe est prête à vous accompagner dans votre transformation numérique.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Téléphone</p>
                  <p className="text-xl font-medium">06 33 63 78 74</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Localisation</p>
                  <p className="text-xl font-medium">Martinique</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-xl font-medium">karibia.pro@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="text-brand-primary w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message envoyé !</h3>
                <p className="text-white/50 text-lg">Nous vous recontacterons sous 24 heures.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-primary transition-colors text-lg" 
                      placeholder="Votre nom" 
                    />
                  </div>
                  <div>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-primary transition-colors text-lg" 
                      placeholder="Email professionnel" 
                    />
                  </div>
                  <div>
                    <textarea 
                      required 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand-primary transition-colors text-lg resize-none" 
                      placeholder="Votre projet en quelques mots..."
                    ></textarea>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-brand-primary transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current stroke-[6]">
                <path d="M35 25 V75 M35 50 L65 25 M45 42 L65 75" strokeLinecap="square" />
                <circle cx="35" cy="25" r="3" fill="currentColor" />
                <circle cx="35" cy="75" r="3" fill="currentColor" />
                <circle cx="65" cy="25" r="3" fill="currentColor" />
                <circle cx="65" cy="75" r="3" fill="currentColor" />
              </svg>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">KARIB'IA</span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed">
            L'excellence technologique au service de l'automatisation. Basé en Martinique, Karib'IA accompagne les entreprises dans leur transformation digitale.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Navigation</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Mentions Légales</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/40">Réseaux Sociaux</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="https://www.linkedin.com/in/leny-fleury-3448281b6/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
            <li><a href="https://www.instagram.com/karib.ia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <p className="text-white/30 text-sm">
          © 2026 Karib'IA. Tous droits réservés.
        </p>
        <div className="flex gap-8 text-white/30 text-sm">
          <span>Martinique, France</span>
          <span>06 33 63 78 74</span>
        </div>
      </div>
    </div>
  </footer>
);

const About = () => (
  <section id="about" className="py-32 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">L'Innovation au <span className="text-white/40">Cœur des Antilles.</span></h2>
          <p className="text-white/50 text-xl leading-relaxed mb-8">
            Karib'IA est née de la volonté de propulser les entreprises locales et internationales vers l'excellence technologique. Nous combinons l'expertise en Intelligence Artificielle avec une compréhension profonde des enjeux business.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2 tracking-tighter">100%</p>
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Automatisé</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 tracking-tighter">24/7</p>
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Disponibilité</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10"
        >
          <img 
            src="https://picsum.photos/seed/karibia-office/800/800" 
            alt="Karib'IA Office" 
            className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="noise" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
