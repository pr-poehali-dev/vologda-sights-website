
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const attractions = [
  {
    id: 1,
    title: "Вологодский кремль",
    description: "Исторический и архитектурный комплекс, центр города. Включает Софийский собор, колокольню и архиерейский двор. Являлся резиденцией вологодских архиереев, политическим, религиозным и культурным центром Вологодского края.",
    fullDescription: "Вологодский кремль — исторический комплекс, бывший центр города Вологды. Строительство крепости началось в 1567 году по приказу Ивана Грозного, который планировал сделать Вологду столицей опричнины. После смерти царя строительство было прекращено. В настоящее время комплекс включает в себя Софийский собор, колокольню, Воскресенский собор и комплекс зданий архиерейского двора.",
    imageUrl: "https://images.unsplash.com/photo-1588698947572-ef3dabd2624d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1600352913242-a73cca8d836b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558538337-aab544368de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Архитектура",
    buildYear: "XVI век",
    address: "Вологда, Кремлевская площадь",
    openHours: "10:00-18:00, выходной - понедельник",
    ticketPrice: "300 рублей",
    features: ["Экскурсии", "Фотосъемка", "Музей"],
  },
  {
    id: 2,
    title: "Софийский собор",
    description: "Один из древнейших храмов России, построенный в 1568—1570 годах по указу Ивана Грозного. Важнейший памятник вологодского каменного зодчества.",
    fullDescription: "Софийский собор — православный храм, расположенный на территории Вологодского кремля. Построен в 1568—1570 годах по приказу Ивана Грозного. Это четырехстолпный пятиглавый храм высотой 59 метров. Внутри собора сохранились фрески XVI-XVII веков, выполненные ярославскими мастерами. Софийский собор является одним из редких примеров каменного зодчества XVI века, сохранившихся до наших дней в почти первозданном виде.",
    imageUrl: "https://images.unsplash.com/photo-1558538337-aab544368de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579451487601-8b901be4751a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Храмы",
    buildYear: "1568-1570",
    address: "Вологда, Кремлевская площадь, 1",
    openHours: "10:00-17:00, выходной - понедельник",
    ticketPrice: "200 рублей",
    features: ["Богослужения", "Фрески", "Колокольня"],
  },
  {
    id: 3,
    title: "Дом-музей Петра I",
    description: "Уникальный памятник гражданской архитектуры конца XVII века, где останавливался император во время визитов в Вологду.",
    fullDescription: "Дом-музей Петра I — бывший особняк голландского купца, в котором останавливался Петр I во время своих визитов в Вологду в 1692, 1702 и 1724 годах. Здание представляет собой образец городской усадьбы конца XVII века. В настоящее время здесь размещается музей, посвященный петровской эпохе и связям Петра I с Вологодским краем. Экспозиция включает предметы быта, личные вещи императора и документы того времени.",
    imageUrl: "https://images.unsplash.com/photo-1557111055-94a33f8a1ef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1584564515943-bc5bdcba662d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581866327034-fc4a3517ec5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Музеи",
    buildYear: "Конец XVII века",
    address: "Вологда, Советский проспект, 47",
    openHours: "10:00-18:00, выходной - понедельник",
    ticketPrice: "150 рублей",
    features: ["Экскурсии", "Интерактивные экспонаты", "Сувенирная лавка"],
  },
  {
    id: 4,
    title: "Музей кружева",
    description: "Единственный в России музей, посвященный традиционному вологодскому кружеву, известному во всем мире.",
    fullDescription: "Музей кружева основан в 2010 году и является единственным в России музеем, полностью посвященным кружевоплетению. Экспозиция располагается в историческом здании бывших Кружевных рядов, построенных в начале XX века. В музее представлена история вологодского кружевоплетения от XVIII века до наших дней, коллекция уникальных кружевных изделий, инструменты и оборудование мастериц. Посетители могут увидеть мастер-классы по плетению кружева и приобрести изделия современных кружевниц.",
    imageUrl: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1565127454888-991d863fe158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Музеи",
    buildYear: "2010",
    address: "Вологда, Кремлевская площадь, 12",
    openHours: "10:00-18:00, ежедневно",
    ticketPrice: "200 рублей",
    features: ["Экскурсии", "Мастер-классы", "Сувенирный магазин"],
  },
  {
    id: 5,
    title: "Спасо-Прилуцкий монастырь",
    description: "Один из самых древних и крупных монастырей Русского Севера, основанный в 1371 году.",
    fullDescription: "Спасо-Прилуцкий монастырь — мужской православный монастырь, основанный в 1371 году учеником Сергия Радонежского Димитрием Прилуцким. Является одним из самых древних и значительных монастырей Русского Севера. Архитектурный ансамбль монастыря включает в себя Спасский собор (XVI век), Введенскую церковь (1623 год), надвратную церковь Вознесения (1716 год) и другие постройки, окруженные высокими стенами с башнями. На территории монастыря сохранились древние захоронения, в том числе могила поэта Константина Батюшкова.",
    imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1572066517499-8637d85f68ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572248525483-6a851cdf1c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Монастыри",
    buildYear: "1371",
    address: "Вологда, ул. Монастырская, 2",
    openHours: "8:00-19:00, ежедневно",
    ticketPrice: "Бесплатно (пожертвования приветствуются)",
    features: ["Богослужения", "Экскурсии", "Иконопись"],
  },
  {
    id: 6,
    title: "Набережная реки Вологды",
    description: "Живописная набережная с историческими зданиями, идеальное место для прогулок и фотографий.",
    fullDescription: "Набережная реки Вологды — одно из самых живописных мест города, протянувшееся вдоль реки Вологды на несколько километров. Вдоль набережной расположены исторические здания XVIII-XIX веков, памятники архитектуры и современные арт-объекты. Особенно красивы виды на Софийский собор и другие храмы, отражающиеся в водах реки. Набережная является любимым местом отдыха горожан и туристов, здесь проводятся городские праздники и фестивали. В последние годы набережная была реконструирована, появились новые пешеходные зоны, скамейки и освещение.",
    imageUrl: "https://images.unsplash.com/photo-1513125370-3bbd7bf9f4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1559749284-7a6971fd798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552427596-33be77b3b5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "Городские пространства",
    buildYear: "XVIII-XXI века",
    address: "Вологда, набережная VI Армии",
    openHours: "Круглосуточно",
    ticketPrice: "Бесплатно",
    features: ["Пешеходная зона", "Велодорожки", "Смотровые площадки"],
  },
  {
    id: 7,
    title: "Вологодский государственный музей-заповедник",
    description: "Крупнейший музейный комплекс Вологодской области, хранящий богатую коллекцию предметов истории и искусства.",
    fullDescription: "Вологодский государственный историко-архитектурный и художественный музей-заповедник объединяет несколько музейных площадок города. Основная экспозиция расположена в зданиях бывшего архиерейского двора на территории Вологодского кремля. Здесь представлены коллекции древнерусского искусства, иконописи, декоративно-прикладного искусства, включая знаменитое вологодское кружево. Музей обладает одной из богатейших в России коллекций произведений церковного искусства XV-XIX веков, в том числе работами выдающихся иконописцев Дионисия и Кирилла Уланова.",
    imageUrl: "https://images.unsplash.com/photo-1572654548561-175a7abd9f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1574116504481-e06341e984e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", 
      "https://images.unsplash.com/photo-1569083295303-9f556fa6ff1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Музеи",
    buildYear: "XVI-XVIII века (здания)",
    address: "Вологда, Кремлевская площадь, 2",
    openHours: "10:00-18:00, выходной - понедельник",
    ticketPrice: "300 рублей",
    features: ["Экскурсии", "Выставки", "Интерактивные программы"],
  },
  {
    id: 8,
    title: "Дом купца Самарина",
    description: "Образец богатого купеческого дома XIX века, памятник архитектуры федерального значения.",
    fullDescription: "Дом купца Самарина — памятник гражданской архитектуры XIX века, яркий образец вологодского классицизма. Построен в 1830-х годах для богатого купца Н.И. Самарина. Двухэтажный особняк отличается изящным фасадом с колоннами и лепниной. Внутри сохранились элементы оригинального декора: лепные потолки, камины, паркетные полы. Сейчас в здании располагается Музей дипломатического корпуса, рассказывающий о пребывании в Вологде иностранных дипломатических миссий в 1918 году, когда город временно стал 'северной столицей дипломатии'.",
    imageUrl: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1588791174744-7e9bf4378277?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541683142766-b84d6aca0bcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Архитектура",
    buildYear: "1830-е годы",
    address: "Вологда, ул. Октябрьская, 13",
    openHours: "10:00-18:00, выходной - понедельник",
    ticketPrice: "150 рублей",
    features: ["Экскурсии", "Интерьеры XIX века", "Исторические экспозиции"],
  }
];

const categories = [...new Set(attractions.map(item => item.category))];

const Attractions = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);

  const filteredAttractions = activeCategory === "all" 
    ? attractions 
    : attractions.filter(item => item.category === activeCategory);

  const handleAttraction = (id: number) => {
    if (selectedAttraction === id) {
      setSelectedAttraction(null);
    } else {
      setSelectedAttraction(id);
      const element = document.getElementById(`attraction-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F0FB] pt-20">
      {/* Page Header */}
      <section className="bg-[#6E59A5] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Достопримечательности Вологды</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Исследуйте историческое и культурное наследие одного из древнейших городов России
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="mb-4 overflow-x-auto">
              <TabsList className="bg-[#F1F0FB] p-1 inline-flex whitespace-nowrap">
                <TabsTrigger value="all" className="px-4">
                  Все
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <p className="text-gray-600 mb-4">
                Показаны все {attractions.length} достопримечательностей Вологды
              </p>
            </TabsContent>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <p className="text-gray-600 mb-4">
                  Показаны достопримечательности категории "{category}"
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Attractions List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List of Attractions */}
            <div className="lg:col-span-1 space-y-6">
              {filteredAttractions.map((attraction) => (
                <Card 
                  key={attraction.id}
                  id={`attraction-card-${attraction.id}`}
                  className={`cursor-pointer transition-all ${
                    selectedAttraction === attraction.id 
                      ? 'border-[#6E59A5] border-2 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleAttraction(attraction.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={attraction.imageUrl} 
                      alt={attraction.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-[#6E59A5]">{attraction.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{attraction.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed View */}
            <div className="lg:col-span-2">
              {selectedAttraction ? (
                <div 
                  id={`attraction-${selectedAttraction}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in"
                >
                  {attractions.filter(a => a.id === selectedAttraction).map((attraction) => (
                    <div key={attraction.id} className="flex flex-col">
                      <div className="h-[400px] relative">
                        <img 
                          src={attraction.imageUrl} 
                          alt={attraction.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <Badge className="mb-2 bg-[#6E59A5]">{attraction.category}</Badge>
                          <h2 className="text-3xl font-bold mb-2">{attraction.title}</h2>
                          <p className="text-white/90">{attraction.description}</p>
                        </div>
                      </div>

                      <div className="p-6 space-y-6">
                        <div>
                          <h3 className="text-xl font-bold mb-4">Об этом месте</h3>
                          <p className="text-gray-600">{attraction.fullDescription}</p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-bold mb-3">Информация</h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Icon name="Calendar" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                                <div>
                                  <span className="font-medium">Год постройки:</span> {attraction.buildYear}
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Icon name="MapPin" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                                <div>
                                  <span className="font-medium">Адрес:</span> {attraction.address}
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Icon name="Clock" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                                <div>
                                  <span className="font-medium">Часы работы:</span> {attraction.openHours}
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Icon name="Ticket" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                                <div>
                                  <span className="font-medium">Стоимость:</span> {attraction.ticketPrice}
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold mb-3">Особенности</h3>
                            <div className="flex flex-wrap gap-2">
                              {attraction.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="bg-[#F1F0FB] text-[#6E59A5]">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-lg font-bold mb-3">Галерея</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {attraction.additionalImages.map((img, index) => (
                              <div key={index} className="h-48 rounded-lg overflow-hidden">
                                <img 
                                  src={img} 
                                  alt={`${attraction.title} - изображение ${index + 1}`} 
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-center pt-4">
                          <Button className="bg-[#6E59A5] hover:bg-[#7E69AB]">
                            <Icon name="Map" className="mr-2 h-4 w-4" />
                            Проложить маршрут
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-white/50 rounded-lg p-12 text-center">
                  <div className="max-w-md">
                    <Icon name="LandmarkIcon" size={64} className="mx-auto mb-6 text-[#6E59A5] opacity-50" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-700">Выберите достопримечательность</h3>
                    <p className="text-gray-500">
                      Нажмите на любую карточку слева, чтобы увидеть подробную информацию о достопримечательности
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#6E59A5] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите увидеть всё своими глазами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Исследуйте маршруты по Вологде и спланируйте свое идеальное путешествие
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-[#6E59A5] hover:bg-gray-100"
              size="lg"
            >
              <Icon name="Map" className="mr-2 h-5 w-5" />
              Популярные маршруты
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
              size="lg"
            >
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Экскурсии
            </Button>
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

export default Attractions;
