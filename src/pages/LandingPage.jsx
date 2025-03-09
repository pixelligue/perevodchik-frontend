import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1/2 aspect-square rounded-full bg-blue-900/10 blur-3xl"></div>
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl font-medium tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">Раскройте силу</span><br />
            <span className="bg-gradient-to-r from-white/70 via-white/40 to-white/20 bg-clip-text text-transparent">интуитивного перевода</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#9CA3AF]/90 max-w-lg mx-auto font-light">
            Попрощайтесь с устаревшими инструментами перевода. Каждый пользователь, независимо от языка, 
            теперь может общаться как профессионал. Просто. Интуитивно. И никогда не скучно.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/uUmij4FgfdR817Ym9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-[#BAFF00] hover:bg-[#BAFF00]/90 rounded-lg transition-colors"
            >
              Начать бесплатно
            </a>
            <a
              href="https://forms.gle/uUmij4FgfdR817Ym9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#9CA3AF] hover:text-white bg-[#161616] hover:bg-[#1C1C1C] rounded-lg transition-colors"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111111] rounded-xl p-6 border border-[#222222]">
              <div className="h-48 mb-6 relative overflow-hidden rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#BAFF00]/10 via-transparent to-transparent"></div>
                <svg className="w-16 h-16 text-[#BAFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M17 16l3-3-3-3m-5 3h8"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#E5E7EB] mb-3">Мгновенный перевод</h3>
              <p className="text-[#9CA3AF]">
                Переводите речь и текст в реальном времени. Поддержка более 50 языков и диалектов.
              </p>
            </div>

            <div className="bg-[#111111] rounded-xl p-6 border border-[#222222]">
              <div className="h-48 mb-6 relative overflow-hidden rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"></div>
                <svg className="w-16 h-16 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#E5E7EB] mb-3">Групповые конференции</h3>
              <p className="text-[#9CA3AF]">
                Проводите многоязычные встречи с синхронным переводом для всех участников.
              </p>
            </div>

            <div className="bg-[#111111] rounded-xl p-6 border border-[#222222]">
              <div className="h-48 mb-6 relative overflow-hidden rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent"></div>
                <svg className="w-16 h-16 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#E5E7EB] mb-3">API интеграция</h3>
              <p className="text-[#9CA3AF]">
                Встраивайте возможности перевода в любые ваши приложения и сервисы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-medium">
                <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                  Для кого подходит saysayai?
                </span>
              </h2>
              <p className="mt-4 text-[#9CA3AF]/90 text-lg font-light">
                Наш сервис создан для всех, кто стремится к эффективной коммуникации без языковых барьеров
              </p>
            </div>
            
            <div className="flex-1">
              <div className="grid gap-12">
                <div className="group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#161616] rounded-lg flex items-center justify-center group-hover:bg-[#1C1C1C] transition-colors">
                      <svg className="w-6 h-6 text-[#666666] group-hover:text-white/80 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M20 7H4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" />
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-2">Бизнес</h3>
                      <p className="text-[#9CA3AF]/90 font-light">Международные компании, отделы продаж, служба поддержки и HR-специалисты</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#161616] rounded-lg flex items-center justify-center group-hover:bg-[#1C1C1C] transition-colors">
                      <svg className="w-6 h-6 text-[#666666] group-hover:text-white/80 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" x="3" y="3" width="18" height="18" rx="2" />
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M12 8v8" />
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M8 12h8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-2">Профессионалы</h3>
                      <p className="text-[#9CA3AF]/90 font-light">Переводчики, преподаватели, журналисты и исследователи</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#161616] rounded-lg flex items-center justify-center group-hover:bg-[#1C1C1C] transition-colors">
                      <svg className="w-6 h-6 text-[#666666] group-hover:text-white/80 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" x="3" y="3" width="7" height="7" />
                        <rect strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" x="14" y="3" width="7" height="7" />
                        <rect strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" x="14" y="14" width="7" height="7" />
                        <rect strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" x="3" y="14" width="7" height="7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-2">Команды</h3>
                      <p className="text-[#9CA3AF]/90 font-light">IT-компании, маркетинговые агентства, международные проекты и стартапы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent mb-6">
            Готовы начать?
          </h2>
          <p className="text-[#9CA3AF]/90 font-light mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже оценили удобство и эффективность нашего сервиса.
            Начните использовать профессиональный перевод прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/uUmij4FgfdR817Ym9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-[#BAFF00] hover:bg-[#BAFF00]/90 rounded-lg transition-colors"
            >
              Попробовать бесплатно
            </a>
            <a
              href="https://forms.gle/uUmij4FgfdR817Ym9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#9CA3AF] hover:text-white bg-[#161616] hover:bg-[#1C1C1C] rounded-lg transition-colors"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;