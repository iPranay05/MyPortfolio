'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(() => {
    // Advanced Initial Hero Animations
    const tl = gsap.timeline();

    tl.to('.loader-overlay', {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 0.5,
      onComplete: () => {
        gsap.set('.loader-overlay', { display: 'none' });
      }
    });

    tl.fromTo('.hero-text', {
      y: 50,
      opacity: 0,
      skewY: 5
    }, {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    }, '-=0.3');

    tl.fromTo('.hero-dec', { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'expo.out' }, '-=0.5');
    tl.fromTo('.nav-wrap', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8');

    // Scroll Trigger Section Reveals
    gsap.utils.toArray<HTMLElement>('.gsap-fade-in').forEach((el) => {
      gsap.fromTo(el, {
        opacity: 0,
        y: 40
      }, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    gsap.utils.toArray<HTMLElement>('.gsap-stagger-child').forEach((container) => {
      gsap.fromTo(container.children, {
        opacity: 0,
        y: 30
      }, {
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

    // Timeline connector glow
    gsap.to('.timeline-connector', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      },
      height: '100%',
      ease: 'none'
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen text-slate-200 relative bg-grid">
      {/* Dynamic Cursor Glow */}
      <div
        className="mouse-glow"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        } as React.CSSProperties}
      />
      <div className="noise-overlay" />

      {/* Intro Reveal Screen */}
      <div className="loader-overlay fixed top-0 left-0 w-full h-screen bg-[#050507] z-[100] flex items-center justify-center pointer-events-none">
        <div className="text-[#ff4800] font-tech text-3xl tracking-[0.5em] animate-pulse">INIT_SEQ_</div>
      </div>

      {/* Navigation */}
      <nav className="nav-wrap fixed top-0 w-full z-50 mix-blend-difference px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-white/10 pb-4">
          <div className="text-xl font-bold tracking-widest text-white font-industrial flex items-center gap-2">
            <span className="w-3 h-3 bg-[#ff4800] inline-block animate-pulse"></span>
            PRANAY <span className="opacity-50">NAIR</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] font-tech text-white/70">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#ff4800] transition-colors uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff4800] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="flex items-center gap-4 mb-8 hero-text">
            <div className="w-16 h-[2px] bg-[#ff4800]"></div>
            <p className="text-[#ff4800] font-tech tracking-[0.4em] uppercase text-sm font-bold">Protocol Active // V1.0</p>
          </div>

          <h1 className="hero-text text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-4 text-white uppercase outline-text-hover cursor-default font-industrial">
            Pranay
          </h1>
          <h1 className="hero-text text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-12 text-white uppercase ml-0 md:ml-32 font-industrial outline-text">
            Nair
          </h1>

          <div className="hero-dec h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mb-12 origin-left"></div>

          <div className="hero-text flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-xl">
              <h2 className="text-xl md:text-3xl text-gray-300 font-light tracking-wide font-tech mb-4 uppercase">
                Full Stack Developer & <br /> <span className="font-bold text-white">AI / Web3 Integrator</span>
              </h2>
              <p className="text-sm text-gray-500 font-mono tracking-widest uppercase">Executing highly optimized user experiences with robust backend architecture.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#projects" className="industrial-btn px-8 py-4 text-sm tracking-[0.2em]">
                View Deployments <span className="ml-2">↗</span>
              </a>
              <a href="/PranayNair.pdf" target="_blank" className="industrial-btn px-8 py-4 text-sm tracking-[0.2em] !border-[#ff4800] !text-[#ff4800] hover:!text-white">
                Access Resume <span className="ml-2">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Decor */}
        <div className="absolute right-0 bottom-20 opacity-20 pointer-events-none transform rotate-90 origin-right">
          <h1 className="text-[12rem] font-industrial outline-text tracking-tighter">001</h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 relative border-t border-white/5 bg-[#050507]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3 gsap-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#00f0ff] font-mono text-xs tracking-widest">[ SEC 01 ]</span>
                <div className="h-[1px] flex-grow bg-white/10"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-industrial font-bold uppercase mb-8">System<br /><span className="outline-text">Core</span></h2>
              <p className="font-tech text-gray-400 text-lg leading-relaxed mb-8 border-l border-[#ff4800] pl-6">
                Full Stack Developer and entrepreneur with hands-on experience in Web3, AI, and blockchain. Passionate about building products that solve real problems. Co-founded a business development agency and delivered multiple full-stack projects spanning e-commerce, legal tech, and healthcare. Comfortable working across the entire stack from React/Next.js frontends to Node.js backends and smart contracts.
              </p>
              <div className="flex gap-4">
                <div className="w-16 h-1 bg-[#ff4800]"></div>
                <div className="w-4 h-1 bg-[#00f0ff]"></div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 gsap-stagger-child">
              {/* Card 1 */}
              <div className="cyber-card cut-corner p-8 group">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-[#64748b] tracking-wider uppercase">Data Node A</span>
                  <div className="text-[#ff4800]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 12h16" /><path d="M12 4v16" /></svg>
                  </div>
                </div>
                <h3 className="font-industrial text-xl text-white mb-4 uppercase">Architecture</h3>
                <p className="text-gray-400 font-tech">Co-founder & Full Stack engineer crafting robust agency systems and decentralized platforms. Fluid between React/NextJS and Smart Contracts.</p>
              </div>
              {/* Card 2 */}
              <div className="cyber-card cut-corner p-8 group mt-0 sm:mt-12">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-[#64748b] tracking-wider uppercase">Data Node B</span>
                  <div className="text-[#00f0ff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                </div>
                <h3 className="font-industrial text-xl text-white mb-4 uppercase">AI Synergy</h3>
                <p className="text-gray-400 font-tech">Pragmatic &quot;vibe coding&quot; approach. Leveraging advanced LLMs (Gemini) to construct rapid prototypes and production-ready applications swiftly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-40 px-6 bg-[#0a0a0d] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff4800] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00f0ff] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade-in flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#ff4800] font-mono text-xs tracking-widest">[ SEC 02 ]</span>
              </div>
              <h2 className="text-5xl font-industrial font-bold uppercase">Tech<br /><span className="outline-text">Arsenal</span></h2>
            </div>
            <p className="text-[#64748b] font-mono text-xs max-w-xs text-right uppercase tracking-widest hidden md:block">
              Integrated protocols & dependencies loaded into local environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gsap-stagger-child">
            {[
              { n: 'JavaScript', c: 'Lang' }, { n: 'Python', c: 'Lang' },
              { n: 'React', c: 'Frontend' }, { n: 'Next.js', c: 'Frontend' },
              { n: 'Node.js', c: 'Backend' }, { n: 'Solidity', c: 'Web3' },
              { n: 'MongoDB', c: 'Database' }, { n: 'MySQL', c: 'Database' },
              { n: 'Supabase', c: 'Database' }, { n: 'Git/GitHub', c: 'Tools' },
              { n: 'Vercel / IPFS', c: 'Tools' }, { n: 'Figma / Canva', c: 'Design' },
              { n: 'Gemini API', c: 'AI' }, { n: 'Anthropic API', c: 'AI' },
              { n: 'Avalanche', c: 'Web3' }, { n: 'Web3.js', c: 'Web3' },
            ].map((tech) => (
              <div key={tech.n} className="group border border-white/10 bg-[#050507] p-6 relative overflow-hidden hover:border-[#ff4800]/50 transition-colors">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4800] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex justify-between items-center mb-6">
                  <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-[#00f0ff] transition-colors"></div>
                  <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">{tech.c}</span>
                </div>
                <h4 className="font-tech text-xl font-semibold text-white tracking-wide">{tech.n}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-40 px-6 bg-[#050507] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32 gsap-fade-in relative">
            <h2 className="text-5xl md:text-7xl font-industrial font-bold uppercase outline-text">Operation</h2>
            <h2 className="text-4xl md:text-5xl font-industrial font-bold uppercase text-white -mt-4">History</h2>
          </div>

          <div className="relative">
            {/* Dark track */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2 rounded max-h-full"></div>
            {/* Glowing line filled on scroll */}
            <div className="timeline-connector absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#ff4800] via-[#00f0ff] to-[#ff4800] transform md:-translate-x-1/2 h-0"></div>

            <div className="space-y-24">
              {[
                { t: "Co-founder & COO", c: "Areion", d: "April 2024 - March 2026", p: "Co-founded Areion, a business development agency that empowers brands with digital growth strategies, freelance talent, and smart tools. Built the agency's tech ecosystem including areion.biz.", id: "Lvl 4" },
                { t: "Web Developer Intern", c: "Wanderworld Holidays, Seawoods", d: "Jan 2026 - March 2026", p: "Designed and developed a full-stack travel website with modern UI/UX using React and Tailwind CSS, including tour listing, contact forms, and booking inquiry system. Implemented responsive design and SEO-friendly structure, improving the client's digital presence and lead capture.", id: "Lvl 3" },
                { t: "Web Developer Intern", c: "Pillai College of Engineering", d: "Sept 2025 - Nov 2025", p: "Contributed to the development of the official college website. Worked on frontend implementation, UI improvements, and collaborative development with the core team.", id: "Lvl 2" },
                { t: "QA & Testing Intern", c: "Qoneqt", d: "April 2025 - July 2025", p: "Performed manual testing across iOS, Android, and web platforms to identify bugs and improve product quality. Documented test cases, tracked defects, and coordinated with developers for timely resolution.", id: "Lvl 1" },
              ].map((exp, idx) => (
                <div key={idx} className="gsap-fade-in relative flex items-center w-full pl-20 md:pl-0">
                  {/* Node point */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#050507] border-2 border-[#ff4800] transform -translate-x-[calc(50%-1px)] md:-translate-x-1/2 z-10 shadow-[0_0_15px_#ff4800]"></div>

                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16 md:text-right'}`}>
                    <div className="cyber-card p-8 group">
                      <div className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-start md:items-end'} mb-6`}>
                        <span className="font-mono text-xs text-[#ff4800] tracking-widest uppercase mb-2 bg-[#ff4800]/10 px-3 py-1 rounded-sm border border-[#ff4800]/20">{exp.d}</span>
                        <h3 className="font-industrial text-2xl text-white uppercase tracking-wider mb-1">{exp.t}</h3>
                        <h4 className="font-tech text-gray-500 uppercase tracking-widest text-sm">{exp.c}</h4>
                      </div>
                      <p className={`font-tech text-gray-300 leading-relaxed ${idx % 2 !== 0 && 'md:text-right'}`}>
                        {exp.p}
                      </p>

                      <div className={`absolute top-0 w-24 h-24 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-700 ${idx % 2 === 0 ? 'right-0' : 'left-0'}`}>
                        <div className={`absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent top-1/2 ${idx % 2 === 0 ? '-right-4 rotate-45' : '-left-4 -rotate-45'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-6 bg-[#0a0a0d] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade-in flex items-center gap-6 mb-20 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-6xl font-industrial font-bold uppercase text-white">Active <span className="text-[#ff4800]">Builds</span></h2>
            <div className="dec-line h-2 max-w-[200px] w-full hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 gsap-stagger-child">
            {[
              { title: "NyayaShyak", tag: "AI Lawyer", desc: "AI-powered legal compliance interface driven by Gemini, interpreting Kaggle legislation datasets.", stack: ["Gemini API", "Python", "AI/ML"], link: "https://nyayashzyak-your-legal-assistant-dvvm.vercel.app/" },
              { title: "Areion Platform", tag: "Business Agency", desc: "Corporate networking infrastructure connecting elite freelance services with enterprise clients.", stack: ["Next.js", "React", "NodeJS"], link: "https://areion.biz" },
              { title: "SafeStree", tag: "Safety App", desc: "Real-time women's safety app with GPS route-deviation detection that auto-escalates alerts to guardians. Integrated Shardeum blockchain for tamper-proof safety event logging.", stack: ["Blockchain", "Web3", "Frontend"], link: "#" },
              { title: "MediChain", tag: "Blockchain Health", desc: "Decentralized, AI-powered healthcare diagnostic and logging platform deployed on blockchain layers.", stack: ["Smart Contracts", "AI", "React"], link: "https://medichain-decentralized-9.onrender.com/" }
            ].map((proj, i) => (
              <div key={i} className="group relative bg-[#050507] border border-white/10 p-1 md:p-2 transition-colors hover:border-white/30">
                <div className="relative h-full bg-[#0a0a0d] border border-white/5 p-8 flex flex-col justify-between overflow-hidden cut-corner">

                  {/* Hover Glow */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="font-mono text-[10px] text-[#00f0ff] tracking-widest uppercase mb-2">TARGET_LOCKED // {proj.tag}</p>
                        <h3 className="font-industrial text-3xl text-white uppercase">{proj.title}</h3>
                      </div>
                      <span className="font-industrial text-4xl text-white/5">0{i + 1}</span>
                    </div>

                    <p className="font-tech text-gray-400 mb-10 h-[80px] leading-relaxed max-w-lg">{proj.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {proj.stack.map(s => (
                        <span key={s} className="font-mono text-xs border border-white/10 bg-white/5 text-gray-300 px-3 py-1 uppercase tracking-wider">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto border-t border-white/10 pt-6">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-tech text-sm uppercase tracking-[0.2em] text-[#ff4800] font-bold group/link">
                      Access Protocol <span className="ml-3 transform group-hover/link:translate-x-2 transition-transform duration-300">==&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section id="contact" className="py-32 px-6 bg-[#050507] border-t border-[#ff4800]/20 relative overflow-hidden">
        <div className="dec-line absolute top-0 left-0 w-full h-[1px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gsap-fade-in">
          <span className="font-mono text-sm text-[#00f0ff] tracking-[0.4em] mb-6 uppercase">End of Directory</span>
          <h2 className="text-6xl md:text-8xl font-industrial font-bold uppercase text-white mb-12">Initialize <br /><span className="outline-text">Comm</span></h2>

          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <a href="mailto:pranaynair05@gmail.com" className="industrial-btn px-10 py-5 text-sm">Open Channel // Email</a>
            <a href="https://www.linkedin.com/in/ipranay05" target="_blank" rel="noopener noreferrer" className="industrial-btn px-10 py-5 text-sm !border-[#00f0ff] !text-[#00f0ff] hover:!text-white hover:before:bg-[#00f0ff]">Sync LinkedIN</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#64748b] tracking-widest uppercase">
          <p>Pranay Nair © 2026 // System Online</p>
          <div className="flex gap-4">
            <a href="https://github.com/ipranay05" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>Status: Optimal</span>
          </div>
        </div>
      </section>
    </div>
  );
}
