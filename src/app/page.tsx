'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-green-400 to-green-600">
      {/* Navigation */}
      <nav className="bg-minecraft-stone minecraft-texture border-b-4 border-gray-900 p-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white minecraft-glow">⛏️ Pranay Nair</h1>
          <div className="flex gap-3">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                className="minecraft-btn px-5 py-3 text-white font-semibold text-sm hover:scale-105 transition-transform"
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="minecraft-block bg-minecraft-dirt minecraft-texture p-12 rounded-2xl mb-12 animate-float">
            <div className="mb-6">
              <span className="text-8xl">💻</span>
            </div>
            <h1 className="text-7xl font-bold text-white minecraft-glow mb-6">Pranay Nair</h1>
            <div className="bg-minecraft-wood minecraft-texture p-6 rounded-xl mb-6 border-4 border-amber-900">
              <p className="text-3xl text-amber-100 mb-4 font-bold">Full Stack Developer & Entrepreneur</p>
              <p className="text-xl text-amber-200 leading-relaxed">
                🚀 Co-founder with hands-on experience and growing interest in Web3<br/>
                💡 Passionate about building businesses that solve real problems<br/>
                ⚡ Using &quot;vibe coding&quot; and AI-powered solutions
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <button 
              className="minecraft-btn px-10 py-5 text-2xl text-white font-bold hover:scale-110 transition-transform"
              onClick={(e) => {
                e.currentTarget.classList.add('spinning');
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🌍 Explore My World
            </button>
            <a 
              href="/Pranay Nair (2)[1].pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="minecraft-btn px-10 py-5 text-2xl text-white font-bold hover:scale-110 transition-transform block text-center"
            >
              📜 View Resume
            </a>
          </div>
        </div>
        
        {/* Enhanced Floating Minecraft blocks */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute minecraft-block animate-block-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
              }}
            >
              <div className={`w-full h-full bg-minecraft-${['grass', 'dirt', 'stone', 'diamond', 'gold'][i % 5]} minecraft-texture rounded border-2 border-gray-800`}>
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs">
                  {['⛏️', '🌱', '🪨', '💎', '🏆'][i % 5]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minecraft clouds */}
        <div className="absolute top-10 left-10 w-20 h-12 bg-white opacity-80 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-20 right-20 w-16 h-10 bg-white opacity-70 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 left-1/3 w-24 h-14 bg-white opacity-60 rounded-lg animate-float" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-minecraft-grass minecraft-texture relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white minecraft-glow mb-4">📖 About Me</h2>
            <div className="w-32 h-2 bg-minecraft-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="minecraft-block bg-minecraft-wood minecraft-texture p-10 rounded-2xl">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📚</span>
                <h3 className="text-3xl font-bold text-white minecraft-glow">My Story</h3>
              </div>
              <div className="bg-amber-900 bg-opacity-50 p-6 rounded-xl border-2 border-amber-700">
                <p className="text-amber-100 leading-relaxed text-lg">
                  Currently pursuing <span className="text-yellow-300 font-bold">B.Tech in Information Technology</span> with specialization in 
                  <span className="text-cyan-300 font-bold"> AI & Robotics</span> at Pillai College of Engineering. 
                  I'm a Full Stack Developer and entrepreneur with hands-on experience and a growing interest in 
                  <span className="text-purple-300 font-bold"> Web3</span>. I adopt a "vibe coding" approach, 
                  leveraging AI tools to speed up development while fully understanding and customizing the code.
                </p>
              </div>
            </div>
            <div className="minecraft-block bg-minecraft-stone minecraft-texture p-10 rounded-2xl">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">⚡</span>
                <h3 className="text-3xl font-bold text-white minecraft-glow">What I Do</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '🚀', text: 'Co-founder & COO at Areion', color: 'bg-red-600' },
                  { icon: '💻', text: 'Full Stack Development', color: 'bg-blue-600' },
                  { icon: '🌐', text: 'Web3 & Blockchain Solutions', color: 'bg-purple-600' },
                  { icon: '🤖', text: 'AI-Powered Applications', color: 'bg-green-600' },
                  { icon: '🏆', text: 'Hackathon Winner', color: 'bg-yellow-600' },
                ].map((item, index) => (
                  <div key={index} className={`${item.color} minecraft-texture p-4 rounded-xl border-3 border-gray-800 hover:scale-105 transition-transform`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <span className="text-white font-bold text-lg">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-minecraft-emerald minecraft-texture rounded border-4 border-gray-800 animate-float opacity-70"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-minecraft-diamond minecraft-texture rounded border-4 border-gray-800 animate-float opacity-70" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-minecraft-dirt minecraft-texture relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white minecraft-glow mb-4">🛠️ My Toolbox</h2>
            <div className="w-32 h-2 bg-minecraft-redstone mx-auto rounded-full"></div>
            <p className="text-xl text-amber-200 mt-4">Crafting digital experiences with these powerful tools</p>
          </div>
          
          {/* Inventory Grid */}
          <div className="bg-minecraft-obsidian minecraft-texture p-8 rounded-2xl border-4 border-gray-900 mb-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { name: 'JavaScript', color: 'bg-yellow-500', icon: '⚡', level: 5 },
                { name: 'TypeScript', color: 'bg-blue-500', icon: '📘', level: 4 },
                { name: 'React', color: 'bg-cyan-500', icon: '⚛️', level: 5 },
                { name: 'Next.js', color: 'bg-gray-800', icon: '▲', level: 4 },
                { name: 'Node.js', color: 'bg-green-500', icon: '🟢', level: 4 },
                { name: 'Python', color: 'bg-yellow-600', icon: '🐍', level: 4 },
                { name: 'AI/ML', color: 'bg-purple-500', icon: '🤖', level: 3 },
                { name: 'Web3', color: 'bg-indigo-500', icon: '🌐', level: 3 },
                { name: 'Blockchain', color: 'bg-orange-600', icon: '⛓️', level: 3 },
                { name: 'MongoDB', color: 'bg-green-600', icon: '🍃', level: 4 },
                { name: 'PostgreSQL', color: 'bg-blue-600', icon: '🐘', level: 3 },
                { name: 'Gemini API', color: 'bg-pink-500', icon: '✨', level: 4 },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="inventory-slot minecraft-block p-4 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer group relative"
                >
                  <div className={`${skill.color} minecraft-texture w-full h-16 rounded-lg flex items-center justify-center mb-2 border-2 border-gray-700`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <p className="text-white font-bold text-center text-xs mb-1">{skill.name}</p>
                  
                  {/* Level indicator */}
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.level ? 'bg-yellow-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    Level {skill.level}/5
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievement badges */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Full Stack Master', icon: '🏗️', desc: 'Frontend to Backend expertise' },
              { title: 'AI Pioneer', icon: '🚀', desc: 'Building intelligent solutions' },
              { title: 'Web3 Explorer', icon: '🌟', desc: 'Blockchain & decentralized apps' },
            ].map((achievement, index) => (
              <div key={index} className="minecraft-block bg-minecraft-gold minecraft-texture p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-yellow-200 text-sm">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating pickaxe */}
        <div className="absolute top-20 right-20 text-6xl animate-float opacity-60">⛏️</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-float opacity-60" style={{animationDelay: '1.5s'}}>🔨</div>
      </section>

      {/* Experience Section - Creative Journey */}
      <section id="experience" className="py-24 bg-minecraft-obsidian minecraft-texture relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white minecraft-glow mb-4">🗺️ My Epic Journey</h2>
            <div className="w-32 h-2 bg-minecraft-emerald mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-green-200">From Noob to Pro - A Developer's Quest</p>
          </div>

          {/* Quest Progress Bar */}
          <div className="bg-minecraft-stone minecraft-texture p-6 rounded-2xl border-4 border-gray-800 mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold text-lg">🏆 Career Progress</span>
              <span className="text-green-400 font-bold">Level 25 Developer</span>
            </div>
            <div className="bg-gray-700 h-4 rounded-full border-2 border-gray-600 overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 h-full rounded-full animate-pulse" style={{width: '85%'}}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Expert</span>
              <span>Master</span>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Central Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-minecraft-redstone h-full rounded-full"></div>
            
            {/* Journey Milestones */}
            <div className="space-y-16">
              {[
                {
                  title: "🔍 Technical Intern",
                  company: "Qoneqt",
                  period: "May 2024 - Present",
                  description: "Testing mobile and web applications, identifying bugs and glitches, reporting issues to development teams. Quality assurance and user experience testing.",
                  level: "Current Quest",
                  xp: "2000 XP",
                  achievements: ["QA Testing", "Bug Reporting", "App Analysis"],
                  color: "bg-minecraft-redstone",
                  icon: "🔧",
                  side: "left"
                },
                {
                  title: "🚀 Co-founder & Tech Lead",
                  company: "Areion",
                  period: "Mar 2023 - Present",
                  description: "Co-founded Areion, empowering brands with digital growth strategies, freelance talent, and smart tools. Built the agency's tech ecosystem including areion.biz platform.",
                  level: "Current Quest",
                  xp: "5000 XP",
                  achievements: ["Leadership", "Business Strategy", "Team Building"],
                  color: "bg-minecraft-diamond",
                  icon: "👑",
                  side: "right"
                },
                {
                  title: "💻 Full Stack Developer",
                  company: "Cititor (Online Bookstore)",
                  period: "Mar 2023 - Dec 2024",
                  description: "Designed and developed complete online bookstore platform with secure login, book search, and purchase features. Handled frontend (React) and database management.",
                  level: "Advanced Quest",
                  xp: "3500 XP",
                  achievements: ["Full Stack", "React Master", "Database Pro"],
                  color: "bg-minecraft-emerald",
                  icon: "⚔️",
                  side: "left"
                },
                {
                  title: "🌐 Web Developer Intern",
                  company: "Wanderworld Holidays, Seawoods",
                  period: "April 2023 - July 2023",
                  description: "Built the company's travel website with modern UI/UX, contact forms, and tour listing system.",
                  level: "First Quest",
                  xp: "1500 XP",
                  achievements: ["UI/UX", "Frontend", "Team Player"],
                  color: "bg-minecraft-gold",
                  icon: "🗡️",
                  side: "right"
                }
              ].reverse().map((quest, index) => (
                <div key={index} className={`flex items-center ${quest.side === 'left' ? 'flex-row-reverse' : ''}`}>
                  {/* Quest Card */}
                  <div className={`w-5/12 ${quest.side === 'left' ? 'mr-auto' : 'ml-auto'}`}>
                    <div className={`minecraft-block ${quest.color} minecraft-texture p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group`}>
                      {/* Quest Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-4xl mr-3">{quest.icon}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-white minecraft-glow">{quest.title}</h3>
                            <p className="text-gray-300">{quest.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-1">
                            {quest.level}
                          </div>
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            +{quest.xp}
                          </div>
                        </div>
                      </div>

                      {/* Quest Description */}
                      <div className="bg-black bg-opacity-30 p-4 rounded-xl mb-4 border-2 border-gray-700">
                        <p className="text-gray-200 leading-relaxed">{quest.description}</p>
                      </div>

                      {/* Achievements Unlocked */}
                      <div className="mb-4">
                        <h4 className="text-white font-bold mb-2 flex items-center">
                          <span className="mr-2">🏅</span>
                          Achievements Unlocked:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {quest.achievements.map((achievement, i) => (
                            <span key={i} className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-purple-400">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quest Duration */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm flex items-center">
                          <span className="mr-2">📅</span>
                          {quest.period}
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-green-400 font-bold text-sm">Quest Completed! ✅</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-minecraft-redstone minecraft-texture rounded-full border-4 border-white flex items-center justify-center z-10">
                    <span className="text-white text-xs font-bold">{3 - index}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Starting Point */}
            <div className="flex justify-center mt-16">
              <div className="minecraft-block bg-minecraft-grass minecraft-texture p-6 rounded-2xl text-center">
                <div className="text-4xl mb-2">🌱</div>
                <h3 className="text-white font-bold text-xl mb-2">Journey Begins</h3>
                <p className="text-gray-300">I'm always excited to discuss new opportunities and collaborations.</p>
                <div className="mt-4">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Origin Story
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { label: "Years Coding", value: "3+", icon: "⏰" },
              { label: "Projects Built", value: "15+", icon: "🏗️" },
              { label: "Technologies", value: "12+", icon: "🛠️" },
              { label: "Hackathons Won", value: "4+", icon: "🏆" }
            ].map((stat, index) => (
              <div key={index} className="minecraft-block bg-minecraft-stone minecraft-texture p-6 rounded-xl text-center hover:scale-110 transition-transform">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white minecraft-glow mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">⚡</div>
        <div className="absolute top-40 right-20 text-3xl animate-float opacity-60" style={{animationDelay: '1s'}}>🚀</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float opacity-60" style={{animationDelay: '2s'}}>💎</div>
        <div className="absolute bottom-40 right-10 text-3xl animate-float opacity-60" style={{animationDelay: '0.5s'}}>🏆</div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-minecraft-stone">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">My Builds</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NyayaShyak (AI Lawyer)",
                description: "AI-powered legal assistant built using Gemini + Kaggle data to help middle-class Indians with legal queries and constitutional help",
                tech: ["AI/ML", "Gemini API", "Python"],
                color: "bg-minecraft-emerald",
                link: "https://nyayashzyak-your-legal-assistant-dvvm.vercel.app/"
              },
              {
                title: "Areion Platform",
                description: "Business development agency platform (areion.biz) connecting clients with top-tier freelance services",
                tech: ["React", "Next.js", "Full Stack"],
                color: "bg-minecraft-diamond",
                link: "https://areion.biz"
              },
              {
                title: "Cititor Bookstore",
                description: "Complete online bookstore platform with secure login, book search, and purchase features",
                tech: ["React", "Database", "Full Stack"],
                color: "bg-minecraft-gold",
                link: null
              },
              {
                title: "Wanderworld Holidays",
                description: "Travel website with modern UI/UX, contact forms, and tour listing system",
                tech: ["Web Development", "UI/UX", "Frontend"],
                color: "bg-minecraft-lapis",
                link: "https://wander-world-holiday-vw3h.vercel.app/"
              },
              {
                title: "Watchtym",
                description: "AI-powered pitch website built for a smart wearable brand",
                tech: ["AI", "Web Development", "Pitch"],
                color: "bg-minecraft-redstone",
                link: "https://watchtym.vercel.app/"
              },
              {
                title: "MediChain",
                description: "AI-powered HealthCare Platform built on blockchain technology",
                tech: ["Blockchain", "AI", "Healthcare"],
                color: "bg-minecraft-endstone",
                link: null
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`${project.color} border-4 border-gray-800 p-6 rounded-lg shadow-minecraft hover:shadow-minecraft-hover transition-all duration-200 transform hover:-translate-y-2`}
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-white px-2 py-1 rounded text-sm border-2 border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="minecraft-btn px-4 py-2 text-white font-semibold w-full block text-center"
                  >
                    View Project
                  </a>
                ) : (
                  <button className="minecraft-btn px-4 py-2 text-white font-semibold w-full opacity-50 cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-minecraft-obsidian">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Let's Build Together</h2>
          <div className="bg-minecraft-dirt border-4 border-gray-800 p-8 rounded-lg shadow-minecraft">
            <p className="text-xl text-gray-200 mb-8">
              Ready to start a new adventure? Let's craft something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:pranaynair05@gmail.com" className="minecraft-btn px-6 py-3 text-white font-semibold">
                📧 Email Me
              </a>
              <a href="https://www.linkedin.com/in/ipranay05" target="_blank" rel="noopener noreferrer" className="minecraft-btn px-6 py-3 text-white font-semibold">
                💼 LinkedIn
              </a>
              <a href="https://www.github.com/ipranay05" target="_blank" rel="noopener noreferrer" className="minecraft-btn px-6 py-3 text-white font-semibold">
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t-4 border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Pranay Nair. Built with ❤️ and lots of ☕ in the Minecraft universe.
          </p>
        </div>
      </footer>
    </div>
  );
}
