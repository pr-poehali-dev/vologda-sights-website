
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const attractions = [
  {
    id: 1,
    title: "Вологодский кремль",
    description: "Исторический и архитектурный комплекс, центр города. Включает Софийский собор, колокольню и архиерейский двор.",
    imageUrl: "https://images.unsplash.com/photo-1588698947572-ef3dabd2624d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Софийский собор",
    description: "Один из древнейших храмов России, построенный в 1568—1570 годах по указу Ивана Грозного.",
    imageUrl: "https://images.unsplash.com/photo-1558538337-aab544368de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Дом-музей Петра I",
    description: "Уникальный памятник гражданской архитектуры конца XVII века, где останавливался император во время визитов в Вологду.",
    imageUrl: "https://images.unsplash.com/photo-1557111055-94a33f8a1ef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Музей кружева",
    description: "Единственный в России музей, посвященный традиционному вологодскому кружеву, известному во всем мире.",
    imageUrl: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Спасо-Прилуцкий монастырь",
    description: "Один из самых древних и крупных монастырей Русского Севера, основанный в 1371 году.",
    imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Набережная реки Вологды",
    description: "Живописная набережная с историческими зданиями, идеальное место для прогулок и фотографий.",
    imageUrl: "https://images.unsplash.com/photo-1513125370-3bbd7bf9f4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  }
];

const Index = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594397394907-096148b9d1c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Вологда" 
            className="w-full h-full object-cover filter brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <div className="relative z-20 text-center text-white mx-auto max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Красота Вологды</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Откройте для себя исторические и культурные сокровища одного из древнейших городов России
          </p>
          <Button 
            className="bg-[#6E59A5] text-white hover:bg-[#8B5CF6] transition-all duration-300 animate-fade-in"
            size="lg"
          >
            Узнать больше <Icon name="ChevronRight" className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Достопримечательности Вологды</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Вологда — город с более чем 800-летней историей, богатым культурным наследием и уникальной архитектурой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Card 
              key={attraction.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                hoveredCardId === attraction.id ? 'scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredCardId(attraction.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={attraction.imageUrl} 
                  alt={attraction.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCardId === attraction.id ? 'scale-110' : ''
                  }`}
                />
              </div>
              <CardHeader>
                <CardTitle>{attraction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{attraction.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full hover:bg-[#6E59A5] hover:text-white transition-colors">
                  Подробнее <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-[#6E59A5] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Почему стоит посетить Вологду?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg hover:bg-[#7E69AB] transition-colors">
              <Icon name="Landmark" size={48} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Богатая история</h3>
              <p>С момента основания в 1147 году Вологда хранит множество исторических памятников</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:bg-[#7E69AB] transition-colors">
              <Icon name="Paintbrush" size={48} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Культурное наследие</h3>
              <p>Вологодское кружево, масло и другие ремесла известны далеко за пределами России</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:bg-[#7E69AB] transition-colors">
              <Icon name="Trees" size={48} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Природная красота</h3>
              <p>Живописные виды, реки и озера делают Вологду привлекательной для путешественников</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О Вологде</h3>
              <p className="text-gray-300">
                Вологда — один из красивейших исторических городов России, известный своими архитектурными памятниками и культурными традициями.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Полезные ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Музеи Вологды</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Гостиницы</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Маршруты</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">События</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="flex items-center mb-2">
                <Icon name="MapPin" className="mr-2" />
                <span className="text-gray-300">Вологда, Россия</span>
              </div>
              <div className="flex items-center mb-2">
                <Icon name="Mail" className="mr-2" />
                <span className="text-gray-300">info@vologda-tourism.ru</span>
              </div>
              <div className="flex items-center mb-4">
                <Icon name="Phone" className="mr-2" />
                <span className="text-gray-300">+7 (8172) 12-34-56</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#6E59A5] transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#6E59A5] transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#6E59A5] transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Достопримечательности Вологды. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
