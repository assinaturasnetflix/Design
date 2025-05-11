import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ArrowRight, CheckCircle, Star, 
  Twitter, Facebook, Instagram, Linkedin, ChevronDown,
  Github, ArrowUpRight
} from 'lucide-react';
import './index.css';

// Componente de Navegação
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text"
          >
            TechNova
          </motion.div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['recursos', 'como-funciona', 'depoimentos', 'preços'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-5 py-2 rounded-full font-medium"
            onClick={() => scrollTo('contato')}
          >
            Começar Agora
          </motion.button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['recursos', 'como-funciona', 'depoimentos', 'preços'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2 text-left font-medium"
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-5 py-3 rounded-full font-medium text-center"
                onClick={() => scrollTo('contato')}
              >
                Começar Agora
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">Transforme</span> o Futuro com Nossa Tecnologia
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Plataforma inovadora que combina IA, automação e análise avançada para impulsionar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center justify-center"
            >
              Experimente Grátis <ArrowRight className="ml-2" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-full font-bold hover:border-primary-500 transition-colors flex items-center justify-center"
            >
              Demonstração <ArrowUpRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 relative"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#FFFFFF" d="M45.2,-76.1C59.2,-69.5,71.4,-58.9,79.7,-45.4C88,-31.9,92.3,-16,94.1,1.1C95.9,18.1,95.1,36.2,86.2,48.2C77.3,60.2,60.3,66,44.8,69.5C29.3,73,14.7,74.2,-0.6,75.2C-15.8,76.2,-31.6,77.1,-45.1,71.1C-58.6,65.1,-69.7,52.2,-75.9,37.8C-82.1,23.4,-83.3,7.4,-82.5,-8.9C-81.7,-25.3,-78.9,-42,-69.4,-52.9C-59.9,-63.7,-43.8,-68.8,-29.3,-75.2C-14.9,-81.6,-2.2,-89.3,9.9,-87.4C22,-85.5,31.2,-82.8,45.2,-76.1Z" transform="translate(100 100)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 aspect-video bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col">
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="h-5 w-1/3 bg-gray-200 dark:bg-gray-600 rounded-md ml-4"></div>
                  </div>
                  <div className="flex flex-1 p-4">
                    <div className="w-1/3 flex flex-col gap-2">
                      <div className="h-6 w-4/5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                      <div className="h-6 w-3/5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                      <div className="h-6 w-4/5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                      <div className="h-6 w-3/5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-2 pl-4">
                      <div className="h-24 w-full bg-primary-200 dark:bg-primary-900/30 rounded-lg"></div>
                      <div className="h-16 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                      <div className="h-8 w-1/3 ml-auto bg-secondary-500 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg p-2 flex items-center">
                <CheckCircle size={24} className="mr-2" />
                <span className="font-medium">99,9% Tempo Ativo</span>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3">
            <motion.div
              animate={{ rotate: [0, -5, 0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-lg p-2 flex items-center">
                <Star size={20} className="mr-2 fill-yellow-500" />
                <span className="font-medium">4.9/5 Avaliações</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { title: "500+", subtitle: "Empresas" },
            { title: "99%", subtitle: "Satisfação" },
            { title: "24/7", subtitle: "Suporte" },
            { title: "15+", subtitle: "Países" }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-bold font-display text-primary-600 dark:text-primary-400">{stat.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    { 
      title: "IA Avançada", 
      description: "Algoritmos de aprendizado de máquina para automação e previsões precisas.",
      color: "from-blue-500 to-cyan-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="stroke-white" strokeWidth="2"/>
          <path d="M7.5 12.5L10.5 15.5L16.5 9.5" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: "Análise em Tempo Real", 
      description: "Visualize e analise dados importantes instantaneamente para decisões rápidas.",
      color: "from-purple-500 to-pink-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21H3V3" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 9L15 15L9 9L3 15" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: "Segurança Garantida", 
      description: "Criptografia de ponta a ponta e conformidade com regulamentações globais.",
      color: "from-green-500 to-teal-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: "Integração Perfeita", 
      description: "Conecte-se facilmente com todas suas ferramentas e plataformas existentes.",
      color: "from-orange-500 to-red-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" className="stroke-white" strokeWidth="2"/>
          <path d="M9 7H15" className="stroke-white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 12H15" className="stroke-white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 17H13" className="stroke-white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="recursos" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Recursos Avançados</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nossa plataforma combina tecnologias de ponta para oferecer uma solução completa para seu negócio.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`h-24 bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      title: "Conecte Suas Fontes de Dados",
      description: "Integre facilmente com suas ferramentas existentes e comece a coletar dados em minutos."
    },
    {
      title: "IA Analisa seu Negócio",
      description: "Nossos algoritmos avançados processam seus dados e identificam padrões importantes."
    },
    {
      title: "Receba Insights Personalizados",
      description: "Visualize recomendações específicas para seu negócio através de dashboards intuitivos."
    },
    {
      title: "Implemente e Acompanhe",
      description: "Coloque os insights em prática e monitore o progresso em tempo real."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Um processo simples de quatro etapas para transformar seu negócio com nossos recursos de IA.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <ArrowRight className="text-primary-500" size={24} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO da TechStart",
      avatar: "AS",
      content: "Implementamos esta solução há 6 meses e já vimos um aumento de 40% em nossa eficiência operacional. A interface intuitiva tornou a adoção pela equipe extremamente fácil.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de Tecnologia",
      avatar: "CM",
      content: "A capacidade de analisar dados em tempo real revolucionou nossa tomada de decisões. O suporte é excepcional, sempre disponível quando precisamos.",
      rating: 5
    },
    {
      name: "Marina Costa",
      role: "Gerente de Projetos",
      avatar: "MC",
      content: "Nossa produtividade aumentou significativamente desde que começamos a usar esta plataforma. As integrações com nossas ferramentas existentes funcionam perfeitamente.",
      rating: 4
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça as experiências de empresas que transformaram seus negócios com nossa plataforma.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-5 right-5 h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                {testimonial.avatar}
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$99",
      period: "/mês",
      description: "Perfeito para pequenas empresas começando a explorar soluções de IA.",
      features: [
        "Até 5 usuários",
        "10GB de armazenamento",
        "Análise básica de dados",
        "Suporte por email"
      ],
      cta: "Começar Gratuitamente",
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$299",
      period: "/mês",
      description: "Para negócios em crescimento que precisam de recursos avançados.",
      features: [
        "Até 20 usuários",
        "100GB de armazenamento",
        "Análise avançada de dados",
        "IA preditiva",
        "Integrações personalizadas",
        "Suporte prioritário"
      ],
      cta: "Iniciar Teste Gratuito",
      highlighted: true
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      period: "",
      description: "Soluções sob medida para grandes empresas com necessidades específicas.",
      features: [
        "Usuários ilimitados",
        "Armazenamento ilimitado",
        "Recursos personalizados",
        "API completa",
        "Gerente de conta dedicado",
        "SLA garantido"
      ],
      cta: "Fale Conosco",
      highlighted: false
    }
  ];

  return (
    <section id="preços" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Preços Transparentes</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às necessidades da sua empresa.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden relative ${plan.highlighted ? 'ring-2 ring-primary-500 transform md:-translate-y-4' : ''}`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 font-bold">
                  Mais Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-primary-500 mr-2" size={18} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-4">Pronto para Começar?</h2>
              <p className="text-white/80 mb-6">
                Entre em contato conosco para uma demonstração personalizada e descubra como podemos impulsionar seu negócio.
              </p>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <div>
                  <textarea placeholder="Mensagem" rows="4" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-bold py-3 px-6 rounded-lg shadow-lg"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/10 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Escritório Principal</h3>
                  <p className="text-white/80">
                    Av. Paulista, 1000<br />
                    São Paulo, SP, Brasil
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-white/80">contato@technova.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                  <p className="text-white/80">+55 (11) 3456-7890</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Nos siga</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "Como a plataforma pode se integrar com meus sistemas atuais?",
      answer: "Nossa plataforma oferece APIs robustas e conectores pré-construídos para as principais soluções de negócios, incluindo CRMs, ERPs e ferramentas de marketing. A maioria das integrações pode ser configurada em minutos sem necessidade de desenvolvimento personalizado."
    },
    {
      question: "Quanto tempo leva para implementar a solução completa?",
      answer: "A maioria dos clientes consegue implementar nossa solução básica em 1-2 semanas. Para implementações mais complexas com integrações personalizadas, o prazo típico é de 4-6 semanas, incluindo treinamento e onboarding da equipe."
    },
    {
      question: "A plataforma é segura para dados sensíveis de negócios?",
      answer: "Absolutamente. Utilizamos criptografia de nível bancário para todos os dados em trânsito e em repouso. Nossa plataforma é compatível com GDPR, LGPD e outras regulamentações de privacidade. Realizamos auditorias de segurança regulares e mantemos certificações ISO 27001."
    },
    {
      question: "É possível personalizar os relatórios e painéis conforme nossas necessidades?",
      answer: "Sim, nossa plataforma oferece extensas opções de personalização. Você pode criar dashboards personalizados, definir KPIs específicos e configurar relatórios automáticos. Nossa interface drag-and-drop facilita estas personalizações sem necessidade de conhecimentos técnicos."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossa plataforma.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex justify-between items-center"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-gray-900 rounded-b-xl shadow-md px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-400 pt-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text mb-4">TechNova</h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Transformando negócios com soluções de IA avançadas e análises de dados em tempo real.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Casos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Segurança</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comunidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 TechNova. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Termos de Serviço</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);