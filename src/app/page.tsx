export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold gradient-text">MB</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="gradient-text">Matheo Bonucia</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
              Computer Engineer | Full-Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-purple-300 mb-8">
              .NET, React, and Angular Specialist
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
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="glass rounded-2xl p-8 md:p-12 hover-lift">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Computer Engineer graduated from <span className="text-purple-400 font-semibold">UFMT</span>, specialized in <span className="text-purple-400 font-semibold">.NET (C#)</span>, <span className="text-purple-400 font-semibold">React.js</span> and <span className="text-purple-400 font-semibold">Angular</span>, with solid experience in full-stack development and modern software architecture.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Strong expertise in <span className="text-purple-400 font-semibold">CQRS</span>, <span className="text-purple-400 font-semibold">Hexagonal Architecture</span>, and <span className="text-purple-400 font-semibold">Clean Architecture</span>. Hands-on experience in modernizing legacy systems, integrating AI with Semantic Kernel, and delivering scalable, high-performance corporate platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Recognized for leading development teams and delivering solutions that replace complex legacy systems with modern applications, optimizing costs and increasing productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">Professional Experience</h2>
          <div className="space-y-8">
            {/* Amaggi */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Systems Development Analyst</h3>
                  <p className="text-xl text-gray-300">Amaggi</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2025 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Developed new features for international export and agricultural credit systems using <span className="text-purple-400 font-semibold">.NET</span> and <span className="text-purple-400 font-semibold">React 19</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Created and maintained microservices in <span className="text-purple-400 font-semibold">.NET 8</span>, with automated execution via crontab</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Managed logs and data persistence in <span className="text-purple-400 font-semibold">MongoDB</span> and <span className="text-purple-400 font-semibold">Oracle</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Modernized legacy system using modular architecture based on <span className="text-purple-400 font-semibold">Hexagonal Architecture</span></span>
                </li>
              </ul>
            </div>

            {/* Agenda Assessoria */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Systems Development Analyst</h3>
                  <p className="text-xl text-gray-300">Agenda Assessoria</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2024 - 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Technical lead for <span className="text-purple-400 font-semibold">Sisprev+</span> project, developed in <span className="text-purple-400 font-semibold">.NET 9</span> and <span className="text-purple-400 font-semibold">React 19</span> using <span className="text-purple-400 font-semibold">CQRS architecture</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Unified <span className="text-purple-400 font-semibold">three legacy systems</span> into a single modern solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Integrated corporate AI with <span className="text-purple-400 font-semibold">Semantic Kernel</span> for automation and intelligent data analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Developed complex modules with React.js, Angular, and modern libraries (Zustand, TanStack, Zod)</span>
                </li>
              </ul>
            </div>

            {/* Silo - Arte e Latitude Rural */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Freelance Web Developer</h3>
                  <p className="text-xl text-gray-300">Silo - Arte e Latitude Rural</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2025 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Contributing to the development and maintenance of the organization&apos;s website at <a href="https://github.com/associacaosilo/silo.org.br" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-semibold hover:text-purple-300 underline">silo.org.br</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Working with <span className="text-purple-400 font-semibold">Jekyll</span>, <span className="text-purple-400 font-semibold">HTML</span>, <span className="text-purple-400 font-semibold">SCSS</span>, and <span className="text-purple-400 font-semibold">JavaScript</span> for a rural art and culture organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Implementing responsive design and modern web standards for improved user experience</span>
                </li>
              </ul>
            </div>

            {/* ConnetGroup */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Freelance .NET / C# Developer</h3>
                  <p className="text-xl text-gray-300">ConnetGroup</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2024 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Developed new features and maintained systems in <span className="text-purple-400 font-semibold">.NET</span> with <span className="text-purple-400 font-semibold">C#</span> using <span className="text-purple-400 font-semibold">MVC architecture</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Bug fixes and performance improvements for governmental and private clients including <span className="text-purple-400 font-semibold">SESI</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Ensured code quality with Clean Code practices, Git version control, and unit testing</span>
                </li>
              </ul>
            </div>

            {/* Simples IP */}
            <div className="glass rounded-2xl p-6 md:p-8 hover-lift">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Software Developer</h3>
                  <p className="text-xl text-gray-300">Simples IP</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2023 - 2024</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Developed multi-tenant <span className="text-purple-400 font-semibold">PABX system</span> with scalable architecture in PHP, reducing hosting costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Built modern interfaces using <span className="text-purple-400 font-semibold">React.js</span> and <span className="text-purple-400 font-semibold">Angular</span> integrated with PHP backend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Developed <span className="text-purple-400 font-semibold">WebRTC softphone</span> with secure connections and high-quality audio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C#', 'TypeScript', 'JavaScript', 'PHP', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Angular', 'Vue.js', 'React Native', 'HTML5', 'CSS3', 'Bootstrap'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['.NET Core', '.NET 10', '.NET 9', 'ASP.NET MVC', 'Web APIs', 'RESTful', 'GraphQL'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB', 'Entity Framework', 'Dapper'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Architecture</h3>
              <div className="flex flex-wrap gap-2">
                {['CQRS', 'Hexagonal', 'Clean Architecture', 'Microservices', 'Multi-tenant', 'DDD'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-purple-400 mb-4">AI & Tools</h3>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">Sisprev+</h3>
              <p className="text-gray-300 mb-4">
                Modern pension management system built with <span className="text-purple-400 font-semibold">React 19</span>, <span className="text-purple-400 font-semibold">.NET 9</span>, and <span className="text-purple-400 font-semibold">CQRS architecture</span>. Successfully replaced three legacy systems into a unified, scalable solution.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">React 19</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">.NET 9</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">CQRS</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">EF Core</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">WebRTC Softphone</h3>
              <p className="text-gray-300 mb-4">
                Real-time communication application via WebSocket with modern codecs and secure architecture. Features high-quality audio and secure connections for enterprise use.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">WebRTC</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">WebSocket</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Asterisk</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">Multi-Tenant PABX</h3>
              <p className="text-gray-300 mb-4">
                Scalable solution for multiple simultaneous clients with modern interfaces built in React and Angular, significantly reducing operational costs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">PHP</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Angular</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Multi-tenant</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover-lift">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">AI Integration</h3>
              <p className="text-gray-300 mb-4">
                Corporate AI solutions using <span className="text-purple-400 font-semibold">Semantic Kernel</span> and language models for intelligent automation and data analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">Semantic Kernel</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">OpenAI</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">.NET</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-xs">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Unified three legacy systems into a single modern solution using .NET and React',
              'Implemented CQRS and Hexagonal Architecture for high performance and maintainability',
              'Integrated Semantic Kernel for intelligent automation and data analysis',
              'Modernized legacy systems at Amaggi and Agenda using Clean Architecture',
              'Developed WebRTC Softphone with secure communication and high-quality audio',
              'Author of the Makiphone article, published in SBC and presented at ERI-MT 2024'
            ].map((achievement, index) => (
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m always interested in hearing about new projects and opportunities.
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
                Brazil
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/tanakagl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover-lift font-semibold"
              >
                View GitHub
              </a>
              <a
                href="https://linkedin.com/in/matheorb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover-lift font-semibold"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Matheo Bonucia. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Computer Engineer | .NET, React, and Angular Specialist
          </p>
        </div>
      </footer>
    </div>
  );
}
