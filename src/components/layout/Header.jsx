import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user } = useAuth();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="saysayai" 
            className="h-32 w-auto"
          />
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8">
            <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-white/90 transition-colors">
              Тарифы
            </a>
            <a href="https://forms.gle/uUmij4FgfdR817Ym9" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-white/90 transition-colors">
              Блог
            </a>
            {user ? (
              <Link
                to={user.role === 'admin' ? '/admin' : '/dashboard'}
                className="px-4 py-2 text-sm font-medium text-black bg-[#BAFF00] hover:bg-[#BAFF00]/90 rounded-lg transition-colors"
              >
                Личный кабинет
              </Link>
            ) : (
              <a
                href="https://forms.gle/uUmij4FgfdR817Ym9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-black bg-[#BAFF00] hover:bg-[#BAFF00]/90 rounded-lg transition-colors"
              >
                Войти
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;