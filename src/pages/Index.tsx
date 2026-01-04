import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const teamMembers = [
    {
      name: 'Александра Волкова',
      role: 'Creative Director',
      description: 'Визионер с 15-летним опытом в создании премиальных брендов',
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Lead Designer',
      description: 'Мастер минимализма и функциональной эстетики',
    },
    {
      name: 'Елена Морозова',
      role: 'Brand Strategist',
      description: 'Архитектор смыслов и эмоциональных связей',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-[0.3em]" style={{ fontFamily: 'Cormorant, serif' }}>
              RASE STUDIO
            </div>
            <div className="flex gap-12">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm tracking-wider transition-all duration-300 ${
                  activeSection === 'home' ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
                }`}
              >
                ГЛАВНАЯ
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className={`text-sm tracking-wider transition-all duration-300 ${
                  activeSection === 'team' ? 'text-[#D4AF37]' : 'text-white/60 hover:text-white'
                }`}
              >
                КОМАНДА
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 animate-fade-in">
          <div className="max-w-5xl text-center">
            <div className="mb-8 inline-block">
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-sm tracking-[0.3em] text-[#8E9196] mb-8">ПРЕМИАЛЬНЫЙ ДИЗАЙН</p>
            </div>
            
            <h1 
              className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-none"
              style={{ fontFamily: 'Cormorant, serif' }}
            >
              Создаём
              <br />
              <span className="text-[#D4AF37]">роскошь</span>
              <br />
              в деталях
            </h1>

            <p className="text-lg text-[#8E9196] max-w-2xl mx-auto mb-12 leading-relaxed">
              Студия, где элегантность встречается с инновациями. 
              Мы создаём бренды, которые вдохновляют и остаются в памяти навсегда.
            </p>

            <button className="group relative px-12 py-4 border border-[#D4AF37] text-[#D4AF37] tracking-[0.2em] text-sm overflow-hidden transition-all duration-500 hover:text-[#0A0A0A]">
              <span className="relative z-10">НАЧАТЬ ПРОЕКТ</span>
              <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </section>
      )}

      {activeSection === 'team' && (
        <section className="min-h-screen px-6 pt-32 pb-20 animate-fade-in">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
              <h2 
                className="text-6xl md:text-7xl font-light mb-6 tracking-tight"
                style={{ fontFamily: 'Cormorant, serif' }}
              >
                Наша команда
              </h2>
              <p className="text-[#8E9196] text-lg max-w-2xl mx-auto">
                Профессионалы с безупречным вкусом и страстью к совершенству
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-[#0A0A0A] border border-white/10 p-8 transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                    <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/10 to-transparent mb-6 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Icon name="User" size={64} className="text-[#D4AF37]/40 relative z-10" />
                    </div>
                    
                    <h3 
                      className="text-2xl font-light mb-2 text-[#D4AF37]"
                      style={{ fontFamily: 'Cormorant, serif' }}
                    >
                      {member.name}
                    </h3>
                    
                    <p className="text-sm tracking-[0.2em] text-white/60 mb-4 uppercase">
                      {member.role}
                    </p>
                    
                    <div className="w-12 h-[1px] bg-[#D4AF37]/50 mb-4"></div>
                    
                    <p className="text-[#8E9196] text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#8E9196]">© 2026 RASE STUDIO. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-[#8E9196] hover:text-[#D4AF37] transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-[#8E9196] hover:text-[#D4AF37] transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-[#8E9196] hover:text-[#D4AF37] transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
