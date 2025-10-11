'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const t = {
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        title: 'Computer Engineer | Full-Stack Developer',
        subtitle: '.NET, React, and Angular Specialist',
        cta: 'Get In Touch'
      },
      about: {
        title: 'About Me',
        p1: 'Computer Engineer graduated from UFMT, specialized in .NET (C#), React.js and Angular, with solid experience in full-stack development and modern software architecture.',
        p2: 'Strong expertise in CQRS, Hexagonal Architecture, and Clean Architecture. Hands-on experience in modernizing legacy systems, integrating AI with Semantic Kernel, and delivering scalable, high-performance corporate platforms.',
        p3: 'Recognized for leading development teams and delivering solutions that replace complex legacy systems with modern applications, optimizing costs and increasing productivity.'
      },
      experience: {
        title: 'Professional Experience',
        present: 'Present',
        amaggi: {
          role: 'Systems Development Analyst',
          company: 'Amaggi',
          items: [
            'Developed new features for international export and agricultural credit systems using .NET and React 19',
            'Created and maintained microservices in .NET 8, with automated execution via crontab',
            'Managed logs and data persistence in MongoDB and Oracle',
            'Modernized legacy system using modular architecture based on Hexagonal Architecture'
          ]
        },
        agenda: {
          role: 'Systems Development Analyst',
          company: 'Agenda Assessoria',
          items: [
            'Technical lead for Sisprev+ project, developed in .NET 9 and React 19 using CQRS architecture',
            'Unified three legacy systems into a single modern solution',
            'Integrated corporate AI with Semantic Kernel for automation and intelligent data analysis',
            'Developed complex modules with React.js, Angular, and modern libraries (Zustand, TanStack, Zod)'
          ]
        },
        silo: {
          role: 'Freelance Web Developer',
          company: 'Silo - Arte e Latitude Rural',
          items: [
            'Contributing to the development and maintenance of the organization\'s website at silo.org.br',
            'Working with Jekyll, HTML, SCSS, and JavaScript for a rural art and culture organization',
            'Implementing responsive design and modern web standards for improved user experience'
          ]
        },
        connet: {
          role: 'Freelance .NET / C# Developer',
          company: 'ConnetGroup',
          items: [
            'Developed new features and maintained systems in .NET with C# using MVC architecture',
            'Bug fixes and performance improvements for governmental and private clients including SESI',
            'Ensured code quality with Clean Code practices, Git version control, and unit testing'
          ]
        },
        simples: {
          role: 'Software Developer',
          company: 'Simples IP',
          items: [
            'Developed multi-tenant PABX system with scalable architecture in PHP, reducing hosting costs',
            'Built modern interfaces using React.js and Angular integrated with PHP backend',
            'Developed WebRTC softphone with secure connections and high-quality audio'
          ]
        }
      },
      skills: {
        title: 'Technical Skills',
        languages: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        architecture: 'Architecture',
        aiTools: 'AI & Tools'
      },
      projects: {
        title: 'Highlighted Projects',
        sisprev: {
          title: 'Sisprev+',
          description: 'Modern pension management system built with React 19, .NET 9, and CQRS architecture. Successfully replaced three legacy systems into a unified, scalable solution.'
        },
        webrtc: {
          title: 'WebRTC Softphone',
          description: 'Real-time communication application via WebSocket with modern codecs and secure architecture. Features high-quality audio and secure connections for enterprise use.'
        },
        pabx: {
          title: 'Multi-Tenant PABX',
          description: 'Scalable solution for multiple simultaneous clients with modern interfaces built in React and Angular, significantly reducing operational costs.'
        },
        ai: {
          title: 'AI Integration',
          description: 'Corporate AI solutions using Semantic Kernel and language models for intelligent automation and data analysis.'
        }
      },
      publications: {
        title: 'Academic Publications',
        makiphone: {
          title: 'Makiphone: a React Native Application using WebRTC and Asterisk',
          authors: 'Matheo Rodrigues Bonucia, Joyce Aline de Oliveira Marins, Fabrício B. Carvalho',
          venue: 'XIII Regional School of Informatics of Mato Grosso (ERI-MT 2024)',
          description: 'WebRTC is an emerging technology that uses peer-to-peer (P2P) connections in real-time for media transmission. This article presents Makiphone, a mobile application developed in React Native, which integrates WebRTC with the SIP protocol for audio and video calls. The solution uses an Asterisk server to manage media, deployed on an Amazon Web Services (AWS) platform, enabling a scalable, stable, and intuitive infrastructure.',
          readArticle: 'Read Full Article',
          publisher: 'Brazilian Computer Society (SBC)',
          doi: 'DOI: 10.5753/eri-mt.2024.245928'
        }
      },
      achievements: {
        title: 'Key Achievements',
        items: [
          'Unified three legacy systems into a single modern solution using .NET and React',
          'Implemented CQRS and Hexagonal Architecture for high performance and maintainability',
          'Integrated Semantic Kernel for intelligent automation and data analysis',
          'Modernized legacy systems at Amaggi and Agenda using Clean Architecture',
          'Developed WebRTC Softphone with secure communication and high-quality audio',
          'Author of the Makiphone article, published in SBC and presented at ERI-MT 2024'
        ]
      },
      contact: {
        title: "Let's Work Together",
        subtitle: "I'm always interested in hearing about new projects and opportunities.",
        viewGithub: 'View GitHub',
        viewLinkedin: 'View LinkedIn'
      },
      footer: {
        rights: '© 2025 Matheo Bonucia. Built with Next.js and Tailwind CSS.',
        tagline: 'Computer Engineer | .NET, React, and Angular Specialist'
      }
    },
    pt: {
      nav: {
        about: 'Sobre',
        experience: 'Experiência',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato'
      },
      hero: {
        greeting: 'Olá, eu sou',
        title: 'Engenheiro da Computação | Desenvolvedor Full-Stack',
        subtitle: 'Especialista em .NET, React e Angular',
        cta: 'Entre em Contato'
      },
      about: {
        title: 'Sobre Mim',
        p1: 'Engenheiro da Computação formado pela UFMT, especializado em .NET (C#), React.js e Angular, com sólida experiência em desenvolvimento full-stack e arquitetura de software moderna.',
        p2: 'Forte expertise em CQRS, Arquitetura Hexagonal e Clean Architecture. Experiência prática na modernização de sistemas legados, integração de IA com Semantic Kernel e entrega de plataformas corporativas escaláveis e de alto desempenho.',
        p3: 'Reconhecido por liderar equipes de desenvolvimento e entregar soluções que substituem sistemas legados complexos por aplicações modernas, otimizando custos e aumentando a produtividade.'
      },
      experience: {
        title: 'Experiência Profissional',
        present: 'Atual',
        amaggi: {
          role: 'Analista de Desenvolvimento de Sistemas',
          company: 'Amaggi',
          items: [
            'Desenvolvi novos recursos para sistemas de exportação internacional e crédito agrícola usando .NET e React 19',
            'Criei e mantive microsserviços em .NET 8, com execução automatizada via crontab',
            'Gerenciei logs e persistência de dados em MongoDB e Oracle',
            'Modernizei sistema legado usando arquitetura modular baseada em Arquitetura Hexagonal'
          ]
        },
        agenda: {
          role: 'Analista de Desenvolvimento de Sistemas',
          company: 'Agenda Assessoria',
          items: [
            'Líder técnico do projeto Sisprev+, desenvolvido em .NET 9 e React 19 usando arquitetura CQRS',
            'Unifiquei três sistemas legados em uma única solução moderna',
            'Integrei IA corporativa com Semantic Kernel para automação e análise inteligente de dados',
            'Desenvolvi módulos complexos com React.js, Angular e bibliotecas modernas (Zustand, TanStack, Zod)'
          ]
        },
        silo: {
          role: 'Desenvolvedor Web Freelancer',
          company: 'Silo - Arte e Latitude Rural',
          items: [
            'Contribuindo para o desenvolvimento e manutenção do site da organização em silo.org.br',
            'Trabalhando com Jekyll, HTML, SCSS e JavaScript para uma organização de arte e cultura rural',
            'Implementando design responsivo e padrões web modernos para melhor experiência do usuário'
          ]
        },
        connet: {
          role: 'Desenvolvedor .NET / C# Freelancer',
          company: 'ConnetGroup',
          items: [
            'Desenvolvi novos recursos e mantive sistemas em .NET com C# usando arquitetura MVC',
            'Correção de bugs e melhorias de desempenho para clientes governamentais e privados incluindo SESI',
            'Garanti qualidade de código com práticas de Clean Code, controle de versão Git e testes unitários'
          ]
        },
        simples: {
          role: 'Desenvolvedor de Software',
          company: 'Simples IP',
          items: [
            'Desenvolvi sistema PABX multi-tenant com arquitetura escalável em PHP, reduzindo custos de hospedagem',
            'Construí interfaces modernas usando React.js e Angular integradas com backend PHP',
            'Desenvolvi softphone WebRTC com conexões seguras e áudio de alta qualidade'
          ]
        }
      },
      skills: {
        title: 'Habilidades Técnicas',
        languages: 'Linguagens',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bancos de Dados',
        architecture: 'Arquitetura',
        aiTools: 'IA & Ferramentas'
      },
      projects: {
        title: 'Projetos em Destaque',
        sisprev: {
          title: 'Sisprev+',
          description: 'Sistema moderno de gestão previdenciária construído com React 19, .NET 9 e arquitetura CQRS. Substituiu com sucesso três sistemas legados em uma solução unificada e escalável.'
        },
        webrtc: {
          title: 'Softphone WebRTC',
          description: 'Aplicação de comunicação em tempo real via WebSocket com codecs modernos e arquitetura segura. Possui áudio de alta qualidade e conexões seguras para uso corporativo.'
        },
        pabx: {
          title: 'PABX Multi-Tenant',
          description: 'Solução escalável para múltiplos clientes simultâneos com interfaces modernas construídas em React e Angular, reduzindo significativamente os custos operacionais.'
        },
        ai: {
          title: 'Integração de IA',
          description: 'Soluções de IA corporativa usando Semantic Kernel e modelos de linguagem para automação inteligente e análise de dados.'
        }
      },
      publications: {
        title: 'Publicações Acadêmicas',
        makiphone: {
          title: 'Makiphone: um Aplicativo em React Native com o uso de WebRTC e Asterisk',
          authors: 'Matheo Rodrigues Bonucia, Joyce Aline de Oliveira Marins, Fabrício B. Carvalho',
          venue: 'XIII Escola Regional de Informática de Mato Grosso (ERI-MT 2024)',
          description: 'WebRTC é uma tecnologia emergente que utiliza conexões peer-to-peer (P2P) em tempo real para transmissão de mídia. Este artigo apresenta o Makiphone, um aplicativo móvel desenvolvido em React Native, que integra WebRTC com o protocolo SIP para chamadas de áudio e vídeo. A solução utiliza um servidor Asterisk para gerenciar as mídias, implantado em uma plataforma Amazon Web Services (AWS), o que permite uma infraestrutura escalável, estável e intuitiva.',
          readArticle: 'Ler Artigo Completo',
          publisher: 'Sociedade Brasileira de Computação (SBC)',
          doi: 'DOI: 10.5753/eri-mt.2024.245928'
        }
      },
      achievements: {
        title: 'Principais Conquistas',
        items: [
          'Unifiquei três sistemas legados em uma única solução moderna usando .NET e React',
          'Implementei CQRS e Arquitetura Hexagonal para alto desempenho e manutenibilidade',
          'Integrei Semantic Kernel para automação inteligente e análise de dados',
          'Modernizei sistemas legados na Amaggi e Agenda usando Clean Architecture',
          'Desenvolvi Softphone WebRTC com comunicação segura e áudio de alta qualidade',
          'Autor do artigo Makiphone, publicado na SBC e apresentado no ERI-MT 2024'
        ]
      },
      contact: {
        title: 'Vamos Trabalhar Juntos',
        subtitle: 'Estou sempre interessado em ouvir sobre novos projetos e oportunidades.',
        viewGithub: 'Ver GitHub',
        viewLinkedin: 'Ver LinkedIn'
      },
      footer: {
        rights: '© 2025 Matheo Bonucia. Desenvolvido com Next.js e Tailwind CSS.',
        tagline: 'Engenheiro da Computação | Especialista em .NET, React e Angular'
      }
    }
  };

  const content = t[language];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold gradient-text">MB</div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">{content.nav.about}</a>
                <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors">{content.nav.experience}</a>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">{content.nav.skills}</a>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">{content.nav.projects}</a>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">{content.nav.contact}</a>
              </div>
              <button
                onClick={toggleLanguage}
                className="glass px-3 py-1.5 rounded-lg text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {content.hero.greeting} <span className="gradient-text">Matheo Bonucia</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
              {content.hero.title}
            </p>
            <p className="text-lg sm:text-xl text-purple-300 mb-8">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://github.com/tanakagl"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-lg hover-lift flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/matheorb"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-lg hover-lift flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:makicode.dev@gmail.com"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg hover-lift font-semibold"
              >
                {content.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">{content.about.title}</h2>
          <div className="glass rounded-2xl p-8 md:p-12 hover-lift">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {language === 'en' ? (
                <>Computer Engineer graduated from <span className="text-purple-400 font-semibold">UFMT</span>, specialized in <span className="text-purple-400 font-semibold">.NET (C#)</span>, <span className="text-purple-400 font-semibold">React.js</span> and <span className="text-purple-400 font-semibold">Angular</span>, with solid experience in full-stack development and modern software architecture.</>
              ) : (
                <>Engenheiro da Computação formado pela <span className="text-purple-400 font-semibold">UFMT</span>, especializado em <span className="text-purple-400 font-semibold">.NET (C#)</span>, <span className="text-purple-400 font-semibold">React.js</span> e <span className="text-purple-400 font-semibold">Angular</span>, com sólida experiência em desenvolvimento full-stack e arquitetura de software moderna.</>
              )}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {language === 'en' ? (
                <>Strong expertise in <span className="text-purple-400 font-semibold">CQRS</span>, <span className="text-purple-400 font-semibold">Hexagonal Architecture</span>, and <span className="text-purple-400 font-semibold">Clean Architecture</span>. Hands-on experience in modernizing legacy systems, integrating AI with Semantic Kernel, and delivering scalable, high-performance corporate platforms.</>
              ) : (
                <>Forte expertise em <span className="text-purple-400 font-semibold">CQRS</span>, <span className="text-purple-400 font-semibold">Arquitetura Hexagonal</span> e <span className="text-purple-400 font-semibold">Clean Architecture</span>. Experiência prática na modernização de sistemas legados, integração de IA com Semantic Kernel e entrega de plataformas corporativas escaláveis e de alto desempenho.</>
              )}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {language === 'en' ? (
                <>Recognized for leading development teams and delivering solutions that replace complex legacy systems with modern applications, optimizing costs and increasing productivity.</>
              ) : (
                <>Reconhecido por liderar equipes de desenvolvimento e entregar soluções que substituem sistemas legados complexos por aplicações modernas, otimizando custos e aumentando a produtividade.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">{content.experience.title}</h2>
          <div className="space-y-8">
            {/* Amaggi */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{content.experience.amaggi.role}</h3>
                  <p className="text-xl text-gray-300">{content.experience.amaggi.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2025 - {content.experience.present}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {content.experience.amaggi.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\.NET/g, '<span class="text-purple-400 font-semibold">.NET</span>').replace(/React 19/g, '<span class="text-purple-400 font-semibold">React 19</span>').replace(/\.NET 8/g, '<span class="text-purple-400 font-semibold">.NET 8</span>').replace(/MongoDB/g, '<span class="text-purple-400 font-semibold">MongoDB</span>').replace(/Oracle/g, '<span class="text-purple-400 font-semibold">Oracle</span>').replace(/Hexagonal Architecture|Arquitetura Hexagonal/g, '<span class="text-purple-400 font-semibold">$&</span>') }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Agenda Assessoria */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{content.experience.agenda.role}</h3>
                  <p className="text-xl text-gray-300">{content.experience.agenda.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2024 - 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {content.experience.agenda.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Silo - Arte e Latitude Rural */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{content.experience.silo.role}</h3>
                  <p className="text-xl text-gray-300">{content.experience.silo.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2025 - {content.experience.present}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {content.experience.silo.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    {index === 0 ? (
                      <span>{language === 'en' ? 'Contributing to the development and maintenance of the organization\'s website at' : 'Contribuindo para o desenvolvimento e manutenção do site da organização em'} <a href="https://silo.org.br" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-semibold hover:text-purple-300 underline">silo.org.br</a></span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ConnetGroup */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{content.experience.connet.role}</h3>
                  <p className="text-xl text-gray-300">{content.experience.connet.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2024 - {content.experience.present}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {content.experience.connet.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simples IP */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{content.experience.simples.role}</h3>
                  <p className="text-xl text-gray-300">{content.experience.simples.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2023 - 2024</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {content.experience.simples.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">{content.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{content.skills.languages}</h3>
              <div className="flex flex-wrap gap-2">
                {['C#', 'TypeScript', 'JavaScript', 'PHP', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{content.skills.frontend}</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Angular', 'Vue.js', 'React Native', 'HTML5', 'CSS3', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{content.skills.backend}</h3>
              <div className="flex flex-wrap gap-2">
                {['.NET Core', '.NET 10', '.NET 9', 'ASP.NET MVC', 'Web APIs', 'RESTful', 'GraphQL'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{content.skills.databases}</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB', 'Entity Framework', 'Dapper'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{content.skills.architecture}</h3>
              <div className="flex flex-wrap gap-2">
                {['CQRS', 'Hexagonal', 'Clean Architecture', 'Microservices', 'Multi-tenant', 'DDD'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{content.skills.aiTools}</h3>
              <div className="flex flex-wrap gap-2">
                {['Semantic Kernel', 'OpenAI API', 'WebRTC', 'Git', 'DevOps', 'Scrum'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">{content.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">{content.projects.sisprev.title}</h3>
              <p className="text-gray-300 mb-4">
                {content.projects.sisprev.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">React 19</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">.NET 9</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">CQRS</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">EF Core</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">{content.projects.webrtc.title}</h3>
              <p className="text-gray-300 mb-4">
                {content.projects.webrtc.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">WebRTC</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">WebSocket</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Asterisk</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">{content.projects.pabx.title}</h3>
              <p className="text-gray-300 mb-4">
                {content.projects.pabx.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">PHP</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Angular</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Multi-tenant</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">{content.projects.ai.title}</h3>
              <p className="text-gray-300 mb-4">
                {content.projects.ai.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Semantic Kernel</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">OpenAI</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">.NET</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">{language === 'en' ? 'AI' : 'IA'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">{content.publications.title}</h2>

          <div className="glass rounded-3xl p-8 md:p-12 hover-lift border-2 border-purple-500/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Academic Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl animate-glow">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 gradient-text">
                {content.publications.makiphone.title}
              </h3>

              <p className="text-center text-gray-400 mb-2 text-sm">
                {content.publications.makiphone.authors}
              </p>

              <p className="text-center text-purple-400 font-semibold mb-6">
                {content.publications.makiphone.venue}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                {content.publications.makiphone.description}
              </p>

              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  <span>{content.publications.makiphone.publisher}</span>
                </div>
                <div className="text-sm text-gray-500 font-mono">
                  {content.publications.makiphone.doi}
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://sol.sbc.org.br/index.php/eri-mt/article/view/31185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 px-8 py-4 rounded-xl hover-lift font-bold text-lg flex items-center gap-3 shadow-lg shadow-purple-500/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {content.publications.makiphone.readArticle}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">{content.achievements.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.achievements.items.map((achievement, index) => (
              <div key={index} className="glass rounded-xl p-6 hover-lift flex items-start gap-4">
                <div className="text-purple-400 text-2xl font-bold">✓</div>
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text">{content.contact.title}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {content.contact.subtitle}
          </p>
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <a href="mailto:makicode.dev@gmail.com" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                makicode.dev@gmail.com
              </a>
              <span className="text-gray-500 hidden md:block">|</span>
              <div className="flex items-center gap-2 text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {language === 'en' ? 'Brazil' : 'Brasil'}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/tanakagl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover-lift font-semibold"
              >
                {content.contact.viewGithub}
              </a>
              <a
                href="https://linkedin.com/in/matheorb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover-lift font-semibold"
              >
                {content.contact.viewLinkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            {content.footer.rights}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {content.footer.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
