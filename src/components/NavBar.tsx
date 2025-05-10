
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from '@/components/ui/icon';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Достопримечательности', path: '/attractions' },
    { name: 'Музеи', path: '/museums' },
    { name: 'Маршруты', path: '/routes' },
    { name: 'О городе', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Landmark" className={`h-8 w-8 ${isScrolled ? 'text-[#6E59A5]' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Вологда
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-[#6E59A5]' : 'text-white/90 hover:text-white'
                } ${
                  location.pathname === link.path ? 'after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-current' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={isScrolled ? "outline" : "default"} 
              className={`${!isScrolled && 'text-white border-white hover:bg-white/20 hover:text-white'}`}
            >
              <Icon name="Search" className="mr-2 h-4 w-4" />
              Поиск
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={`flex md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-8 mt-2">
                  <Icon name="Landmark" className="h-6 w-6 text-[#6E59A5] mr-2" />
                  <span className="text-xl font-bold">Вологда</span>
                </div>
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={`flex items-center text-base py-2 ${
                            location.pathname === link.path 
                              ? 'text-[#6E59A5] font-medium' 
                              : 'text-gray-600 hover:text-[#6E59A5]'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto">
                  <Button className="w-full bg-[#6E59A5] hover:bg-[#8B5CF6]">
                    <Icon name="Search" className="mr-2 h-4 w-4" />
                    Поиск
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
