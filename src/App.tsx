import { motion } from 'motion/react';
import { Mail, MapPin, ExternalLink, GraduationCap, Briefcase, User, Anchor, Compass, Calendar, Globe } from 'lucide-react';

const personalInfo = {
  name: "力信屹 Li Xin-Yi",
  title: "高雄科技大學 航運管理系 | 社群經營 | 專案執行",
  dob: "2007-02-06",
  bloodType: "A型",
  zodiac: "水瓶座",
  email: "A111182122@nkust.edu.tw",
  about: `自幼生活在高雄的內門鄉下，父親在海巡署工作，母親為公務員。家中是三代同堂，在父母開明的教養下，養成了我外向熱情的個性。\n\n在五專求學階段，我曾擔任社團社長，負責辦理活動和撰寫企劃書，從中學習到許多電腦文書處理與專案統籌的能力。\n\n在三年級的實習活動中，我對航海領域產生了更深的嚮往，也對船上生活有了進一步的認知。這段經歷讓我明白，作為實習生必須具備良好的態度與禮貌，才能跟隨教學船副學習到更多寶貴的專業知識。`,
  education: {
    school: "國立高雄科技大學",
    department: "航運管理系 (五專)",
    period: "2022-09 - 至今"
  },
  languages: [
    { name: "英文", level: "TOEIC 100" },
    { name: "台語", level: "聽得懂、會說" },
    { name: "日文", level: "學習中" }
  ],
  experience: [
    {
      title: "實習生",
      company: "御風輪實習船",
      duration: "為期半個月",
      description: [
        "漫遊並適應船上生活",
        "學習船副應有知識",
        "體驗航海生活與克服暈船"
      ]
    }
  ],
  projects: [
    {
      title: "海事公仔設計 (CADET MYSTERY)",
      category: "3D 模型 / 創意企劃",
      description: "海事教育實習生盲盒公仔 3D 模型專案，結合航海元素與青年活力設計。",
      link: "https://studio.ripo3d.ai/3d-model/b71db5e8-a586-483a-a0eb-90d04fdc1357?invite_code=K7RWRT",
      image: "/penghu-travel.jpg"
    },
    {
      title: "旅遊規劃：2026 澎湖仲春之行",
      category: "專案企劃 / 簡報設計",
      description: "四天三夜：地質、海味、古蹟深度遊。負責整體行程規劃、預算拆解分析(人均$16,200)與提案簡報製作。",
      link: "https://docs.google.com/presentation/d/1yT0Z4xjD9LEo6tb8ANadky8LIKG3V7IMo8xI-xV22wE/edit?usp=sharing",
      image: "/cadet-mystery.jpg"
    }
  ]
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-12 border-b border-[#222] pb-4"
  >
    {Icon && <Icon size={20} className="text-[#555]" />}
    <h2 className="text-sm font-medium tracking-[0.2em] text-[#888] uppercase">{children}</h2>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#333] selection:text-white">
      {/* Hero Section */}
      <header className="relative border-b border-[#222]">
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 border border-[#444] text-[10px] uppercase tracking-[0.2em] mb-12 text-[#888]">
              Portfolio / {new Date().getFullYear()}
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-32 h-32 md:w-48 md:h-48 border border-[#222] p-1 flex-shrink-0">
                 <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              
              <div className="text-left">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6 text-[10px] uppercase tracking-[0.2em] text-[#666]"
                >
                  <Compass size={14} />
                  <span>尋求實習與專案合作機會</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-6">
                  {personalInfo.name.split(' ')[0]} <br/> 
                  <span className="text-4xl md:text-5xl">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                
                <p className="text-lg text-[#aaa] leading-relaxed mb-8 max-w-xl">
                  {personalInfo.title}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest text-[#666]">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={14} />
                    <span>{personalInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{personalInfo.dob} ({personalInfo.zodiac} / {personalInfo.bloodType})</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        {/* About Section */}
        <section id="about">
          <SectionHeading icon={User}>關於我 // About</SectionHeading>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 text-[#aaa] leading-relaxed font-light text-sm space-y-6"
            >
              {personalInfo.about.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#555] mb-6">
                  <GraduationCap size={14} />
                  學歷教育 // Education
                </h3>
                <div className="space-y-1 border border-[#222] p-6 bg-[#0c0c0c]">
                  <p className="font-medium text-[#e0e0e0] text-sm">{personalInfo.education.school}</p>
                  <p className="text-[#888] text-xs mt-1">{personalInfo.education.department}</p>
                  <p className="text-[#555] text-[10px] uppercase tracking-widest mt-4 pt-4 border-t border-[#222]">{personalInfo.education.period}</p>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#555] mb-6">
                  <Globe size={14} />
                  語言能力 // Languages
                </h3>
                <ul className="space-y-4 border border-[#222] p-6 bg-[#0c0c0c]">
                  {personalInfo.languages.map((lang, idx) => (
                    <li key={idx} className="flex justify-between items-center pb-4 border-b border-[#222] last:border-0 last:pb-0">
                      <span className="text-[#aaa] text-sm">{lang.name}</span>
                      <span className="text-[10px] uppercase tracking-widest text-[#666]">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeading icon={Anchor}>實習經歷 // Experience</SectionHeading>
          <div className="space-y-6">
            {personalInfo.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0c0c0c] border border-[#222] p-8 group hover:border-[#444] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 pb-6 border-b border-[#222]">
                  <div>
                    <h3 className="text-xl font-serif italic text-white mb-2">{exp.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#888]">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#555]">
                    <Calendar size={12} />
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-[#aaa]">
                      <span className="text-[#333] text-[10px] mt-0.5 font-serif italic">0{i+1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeading icon={Briefcase}>專案作品集 // Selected Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {personalInfo.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/3] bg-[#1a1a1a] border border-[#222] mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  {project.image.endsWith('.pdf') ? (
                    <div className="w-full h-full relative cursor-pointer" onClick={() => window.open(project.link || '#', '_blank')}>
                      <iframe 
                        src={`${project.image}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-[110%] h-[110%] -mt-[5%] -ml-[5%] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        title={project.title}
                      />
                      {/* Transparent overlay to catch clicks over the iframe */}
                      <div className="absolute inset-0 z-10 block"></div>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 cursor-pointer"
                      onClick={() => project.link && window.open(project.link, '_blank')}
                    />
                  )}
                  <div className="absolute top-4 left-4 border border-[#444] bg-[#0a0a0a]/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#888] pointer-events-none">
                    {project.category}
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="text-sm font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed mb-6 flex-grow">{project.description}</p>
                  
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#888] hover:text-white transition-colors w-fit"
                    >
                      檢視作品 // View Project <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#444] w-fit">
                      包含於實體簡報檔案中 // Offline File
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#222] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-[#444]">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
