import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Sparkles, Menu, X, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('главная');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const services = [
    { name: 'Маникюр классический', price: '7490ТГ' },
    { name: 'Маникюр аппаратный', price: '8490ТГ' },
    { name: 'Маникюр комбинированный', price: '9190ТГ' },
    { name: 'Покрытие гель-лак', price: '4990ТГ' },
    { name: 'Дизайн ногтей (1 ноготь)', price: '500-1500ТГ' },
    { name: 'Наращивание ногтей', price: '9990ТГ' },
    { name: 'Коррекция нарощенных ногтей', price: '14490ТГ' },
    { name: 'Снятие гель-лака', price: '2000ТГ' },
  ];

  const promotions = [
    {
      title: 'Первое посещение',
      description: 'Скидка 15% на первое посещение для новых клиентов',
      code: 'НОВИЧОК15'
    },
    {
      title: 'Приведи подругу',
      description: 'Приведи подругу и получи скидку 10% на следующую процедуру',
      code: 'ПОДРУГА10'
    },
    {
      title: 'Комплексная процедура',
      description: 'Маникюр + педикюр со скидкой 20%',
      code: 'КОМПЛЕКС20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 text-gray-800 overflow-x-hidden">
      {/* Анимированные элементы фона */}
      <div className="fixed w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Навигация */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-pink-500 mr-2" />
            <h1 className="text-2xl font-bold text-pink-600">НейлАрт</h1>
          </div>
          
          {/* Мобильное меню */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Десктопное меню */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('главная')} 
              className={`${activeSection === 'главная' ? 'text-pink-600 font-medium' : 'text-gray-600'} hover:text-pink-500 transition-colors`}
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('услуги')} 
              className={`${activeSection === 'услуги' ? 'text-pink-600 font-medium' : 'text-gray-600'} hover:text-pink-500 transition-colors`}
            >
              Услуги и цены
            </button>
            <button 
              onClick={() => scrollToSection('акции')} 
              className={`${activeSection === 'акции' ? 'text-pink-600 font-medium' : 'text-gray-600'} hover:text-pink-500 transition-colors`}
            >
              Акции
            </button>
            <button 
              onClick={() => scrollToSection('адрес')} 
              className={`${activeSection === 'адрес' ? 'text-pink-600 font-medium' : 'text-gray-600'} hover:text-pink-500 transition-colors`}
            >
              Адрес
            </button>
          </div>
        </div>
        
        {/* Мобильное меню выпадающее */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out">
            <div className="flex flex-col p-4 space-y-3">
              <button 
                onClick={() => scrollToSection('главная')} 
                className="text-left py-2 px-4 hover:bg-pink-50 rounded-lg flex items-center justify-between"
              >
                <span>Главная</span>
                <ChevronRight size={16} className="text-pink-400" />
              </button>
              <button 
                onClick={() => scrollToSection('услуги')} 
                className="text-left py-2 px-4 hover:bg-pink-50 rounded-lg flex items-center justify-between"
              >
                <span>Услуги и цены</span>
                <ChevronRight size={16} className="text-pink-400" />
              </button>
              <button 
                onClick={() => scrollToSection('акции')} 
                className="text-left py-2 px-4 hover:bg-pink-50 rounded-lg flex items-center justify-between"
              >
                <span>Акции</span>
                <ChevronRight size={16} className="text-pink-400" />
              </button>
              <button 
                onClick={() => scrollToSection('адрес')} 
                className="text-left py-2 px-4 hover:bg-pink-50 rounded-lg flex items-center justify-between"
              >
                <span>Адрес</span>
                <ChevronRight size={16} className="text-pink-400" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Главная секция */}
      <section 
        id="главная" 
        className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-4">
                Идеальный маникюр для вашей красоты
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Профессиональный уход за вашими ногтями с использованием премиальных материалов и современных технологий
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/+77784785630" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Записаться в WhatsApp
                </a>
                <button 
                  onClick={() => scrollToSection('услуги')} 
                  className="bg-white hover:bg-gray-100 text-pink-600 font-medium py-3 px-6 rounded-full inline-flex items-center justify-center border border-pink-200 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Посмотреть услуги
                </button>
              </div>
            </div>
            <div className={`md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Маникюр" 
                  className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-pink-600 font-bold">Более 1000+</p>
                  <p className="text-gray-600">довольных клиентов</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-pink-600 font-bold">5 лет</p>
                  <p className="text-gray-600">профессионального опыта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги и цены */}
      <section id="услуги" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">Услуги и цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-pink-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium text-gray-800">{service.name}</h3>
                  <p className="text-xl font-bold text-pink-600">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/+77784785630" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Записаться на процедуру
            </a>
          </div>
        </div>
      </section>

      {/* Акции */}
      <section id="акции" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">Специальные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-pink-600 font-medium text-center">Промокод: {promo.code}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Используйте промокод при записи через WhatsApp</p>
            <a 
              href="https://wa.me/+77784785630" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Записаться со скидкой
            </a>
          </div>
        </div>
      </section>

      {/* Адрес */}
      <section id="адрес" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">Наш адрес</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="bg-pink-50 p-8 rounded-lg shadow-md">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Адрес салона</h3>
                    <p className="text-gray-600">г. Алматы, ул. Толе би, д. 10, офис 5</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <Phone className="h-6 w-6 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Контакты</h3>
                    <p className="text-gray-600">+7 (778) 478-56-30</p>
                    <p className="text-gray-600">info@nailart.kz</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Часы работы</h3>
                  <p className="text-gray-600">Пн-Пт: 10:00 - 20:00</p>
                  <p className="text-gray-600">Сб-Вс: 11:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Наш салон" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/+77784785630" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Записаться в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Sparkles className="h-8 w-8 text-pink-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">НейлАрт</h2>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 НейлАрт. Все права защищены.</p>
              <p className="text-gray-400 mt-1">Создано с любовью к красоте</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;