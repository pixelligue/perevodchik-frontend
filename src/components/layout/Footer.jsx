import React from 'react';

const Footer = () => {
  return (
    <footer className="h-[280px] py-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col justify-between h-full">
            <div>
              <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="block mb-4">
                <img 
                  src="/logo.png" 
                  alt="saysayai" 
                  className="h-24 w-auto"
                />
              </a>
              <p className="text-sm text-[#9CA3AF]/80 font-light">
                Профессиональный перевод для всех.<br />
                Быстро. Точно. Удобно.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-12">
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF]/80 hover:text-white/90 transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF]/80 hover:text-white/90 transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF]/80 hover:text-white/90 transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <a href="https://vk.com/saysayai" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF]/80 hover:text-white/90 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.72-1.033-1.01-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.597v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.277.102-.534.595-.534h1.744c.44 0 .61.235.78.8.855 2.464 2.282 4.617 2.87 4.617.22 0 .322-.102.322-.666V9.783c-.068-1.195-.711-1.303-.711-1.73 0-.204.17-.408.44-.408h2.743c.373 0 .508.235.508.745v3.978c0 .423.186.576.305.576.22 0 .407-.153 .813-.56 1.254-1.406 2.147-3.574 2.147-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.316 3.945-2.316 3.945-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.473-.085.715-.576.715z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/saysayai" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF]/80 hover:text-white/90 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 border-t border-[#222222]">
          <div className="text-sm text-[#666666]">
            © 2024 saysayai. Все права защищены.
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666666] hover:text-[#9CA3AF]">
              Конфиденциальность
            </a>
            <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666666] hover:text-[#9CA3AF]">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;