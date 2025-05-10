
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const museums = [
  {
    id: 1,
    title: "Вологодский государственный музей-заповедник",
    description: "Крупнейший музейный комплекс Вологодской области, включающий в себя несколько музейных площадок.",
    fullDescription: "Вологодский государственный историко-архитектурный и художественный музей-заповедник — крупнейший музейный комплекс Вологодской области. Основан в 1923 году. Музей объединяет несколько музейных площадок города и является хранителем уникальных коллекций, включающих памятники русской иконописи, народного и декоративно-прикладного искусства, живописи, графики, скульптуры и т.д.",
    imageUrl: "https://images.unsplash.com/photo-1572481540781-a96d23cb7db6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1566307673735-23816c0ce7f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584048766484-46e9f3c4501f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584048009393-7cb2b380422c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566311091742-9b8854c70e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "История",
    address: "г. Вологда, Кремлевская площадь, 2",
    openHours: "10:00 - 18:00, выходной - понедельник",
    ticketPrice: "300 рублей, льготный - 150 рублей",
    website: "http://www.vologdamuseum.ru",
    phone: "+7 (8172) 72-25-11",
    highlights: ["Собрание икон", "Коллекция народного искусства", "Археологические находки"],
    exhibitions: [
      {
        title: "Вологодский кремль",
        description: "Постоянная экспозиция, посвященная истории Вологодского кремля и его архитектуре."
      },
      {
        title: "Русское искусство XVIII-XX веков",
        description: "Коллекция живописи, графики и скульптуры русских мастеров."
      },
      {
        title: "Древнерусское искусство",
        description: "Уникальное собрание икон XV-XVII веков, включая работы мастеров Дионисия."
      }
    ]
  },
  {
    id: 2,
    title: "Музей кружева",
    description: "Единственный в России музей, посвященный истории и традициям вологодского кружевоплетения.",
    fullDescription: "Музей кружева был открыт в 2010 году и является единственным в России музеем, полностью посвященным истории и традициям кружевоплетения. Экспозиция музея рассказывает об истории промысла, начиная с XVIII века до наших дней. В музее представлены уникальные образцы кружевных изделий, коклюшки, подушки для плетения, авторские работы современных кружевниц.",
    imageUrl: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1565127454888-991d863fe158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545238435-c791a1feaf6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517697388019-2a10d1843599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Народное искусство",
    address: "г. Вологда, Кремлевская площадь, 12",
    openHours: "10:00 - 18:00, выходной - понедельник",
    ticketPrice: "200 рублей, льготный - 100 рублей",
    website: "http://www.vologdalace.ru",
    phone: "+7 (8172) 72-16-56",
    highlights: ["Коллекция кружевных изделий", "Мастер-классы по кружевоплетению", "Интерактивные экспонаты"],
    exhibitions: [
      {
        title: "История вологодского кружева",
        description: "Основная экспозиция, рассказывающая об эволюции вологодского кружевоплетения."
      },
      {
        title: "Кружевные узоры",
        description: "Выставка образцов различных кружевных техник и орнаментов."
      },
      {
        title: "Современное кружево",
        description: "Работы современных мастеров, демонстрирующие развитие традиций."
      }
    ]
  },
  {
    id: 3,
    title: "Дом-музей Петра I",
    description: "Музей, расположенный в историческом здании, где останавливался Петр I во время визитов в Вологду.",
    fullDescription: "Дом-музей Петра I расположен в историческом здании конца XVII века, где, по преданию, останавливался император Петр I во время своих визитов в Вологду. Это один из немногих сохранившихся памятников гражданской архитектуры допетровского времени. Экспозиция музея повествует о петровской эпохе и связях Петра I с Вологодским краем, а также о быте горожан конца XVII - начала XVIII веков.",
    imageUrl: "https://images.unsplash.com/photo-1557111055-94a33f8a1ef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1584564515943-bc5bdcba662d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581866327034-fc4a3517ec5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577396231375-4686d8567cd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582989561594-cff97e58f15a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "История",
    address: "г. Вологда, Советский проспект, 47",
    openHours: "10:00 - 17:00, выходной - понедельник, вторник",
    ticketPrice: "150 рублей, льготный - 80 рублей",
    website: "http://www.vologdamuseum.ru/content?id=133",
    phone: "+7 (8172) 75-27-59",
    highlights: ["Мемориальные вещи Петра I", "Исторические интерьеры", "Коллекция старинных монет"],
    exhibitions: [
      {
        title: "Петр I и Вологда",
        description: "Экспозиция о визитах императора в Вологду и его влиянии на развитие города."
      },
      {
        title: "Быт вологжан XVII-XVIII веков",
        description: "Восстановленные интерьеры купеческого дома того времени."
      },
      {
        title: "Реликвии петровской эпохи",
        description: "Коллекция вещей, связанных с правлением Петра I."
      }
    ]
  },
  {
    id: 4,
    title: "Литературный музей",
    description: "Музей, посвященный литературным традициям Вологодчины и знаменитым писателям и поэтам края.",
    fullDescription: "Литературный музей Вологды был основан в 1981 году и посвящен богатым литературным традициям Вологодского края. Экспозиция рассказывает о жизни и творчестве писателей и поэтов, связанных с Вологдой - Константина Батюшкова, Николая Рубцова, Василия Белова, Ольги Фокиной и многих других. В музее хранятся личные вещи, рукописи, книги, фотографии и другие документы.",
    imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583468982228-19f19164aee1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Литература",
    address: "г. Вологда, ул. Герцена, 36",
    openHours: "10:00 - 17:00, выходной - понедельник",
    ticketPrice: "100 рублей, льготный - 50 рублей",
    website: "http://www.cultinfo.ru/litera/",
    phone: "+7 (8172) 72-50-29",
    highlights: ["Архив рукописей", "Библиотека редких изданий", "Литературные вечера"],
    exhibitions: [
      {
        title: "Вологодская литературная школа",
        description: "Экспозиция о феномене 'вологодской литературной школы' и ее представителях."
      },
      {
        title: "Константин Батюшков",
        description: "Материалы о жизни и творчестве великого русского поэта."
      },
      {
        title: "Николай Рубцов",
        description: "Коллекция, посвященная жизни и поэзии одного из самых известных вологодских поэтов."
      }
    ]
  },
  {
    id: 5,
    title: "Архитектурно-этнографический музей Вологодской области",
    description: "Музей под открытым небом, представляющий традиционную деревянную архитектуру и быт русского севера.",
    fullDescription: "Архитектурно-этнографический музей Вологодской области (Семенково) — музей под открытым небом, основанный в 1979 году. На территории музея собраны подлинные памятники деревянного зодчества Русского Севера XVIII-XX веков: крестьянские дома, амбары, мельницы, часовни. Экспозиция демонстрирует традиционный уклад жизни, ремесла и промыслы северных крестьян. В музее регулярно проводятся народные праздники, фольклорные фестивали и мастер-классы по традиционным ремеслам.",
    imageUrl: "https://images.unsplash.com/photo-1580397581415-4883a991a9fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1580397681245-a2a836464859?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602067610955-5c637be9df0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584024628590-a474d697a16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584024751691-cbccfd03b47a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Этнография",
    address: "Вологодский район, деревня Семенково",
    openHours: "10:00 - 18:00, выходной - понедельник",
    ticketPrice: "250 рублей, льготный - 120 рублей",
    website: "http://www.semenkovo.ru",
    phone: "+7 (8172) 77-78-93",
    highlights: ["Деревянное зодчество", "Народные ремесла", "Фольклорные программы"],
    exhibitions: [
      {
        title: "Русская деревня",
        description: "Восстановленная деревня с подлинными постройками XVIII-XX веков."
      },
      {
        title: "Крестьянский быт",
        description: "Экспозиция о повседневной жизни и быте северных крестьян."
      },
      {
        title: "Народные промыслы",
        description: "Демонстрация традиционных ремесел и промыслов Вологодского края."
      }
    ]
  },
  {
    id: 6,
    title: "Музей «Мир забытых вещей»",
    description: "Музей, посвященный быту и культуре городских жителей конца XIX - начала XX века.",
    fullDescription: "Музей «Мир забытых вещей» размещается в особняке конца XIX века и воссоздает атмосферу городского быта и культуры рубежа XIX-XX веков. В экспозиции представлены подлинные предметы интерьера, одежда, аксессуары, книги, письма и фотографии того времени. Музей позволяет посетителям погрузиться в мир дореволюционной России и узнать, как жили, чем увлекались и о чем мечтали вологжане сто лет назад.",
    imageUrl: "https://images.unsplash.com/photo-1581957430961-926df09f4557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1582581388879-64d33e611afb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516651029879-bcd806bd4922?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588099146408-a721e5c7204a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582582494701-55304cc6204a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "История",
    address: "г. Вологда, ул. Октябрьская, 39",
    openHours: "10:00 - 17:00, выходной - понедельник",
    ticketPrice: "150 рублей, льготный - 100 рублей",
    website: "http://www.vologdamuseum.ru/content?id=134",
    phone: "+7 (8172) 72-43-11",
    highlights: ["Антикварная мебель", "Коллекция старинных фотографий", "Интерьеры купеческого дома"],
    exhibitions: [
      {
        title: "Городская жизнь XIX века",
        description: "Реконструкция быта и культуры горожан дореволюционной эпохи."
      },
      {
        title: "Гостиная купеческого дома",
        description: "Восстановленный интерьер типичной гостиной зажиточной семьи."
      },
      {
        title: "Дамская комната",
        description: "Экспозиция, посвященная женской моде и аксессуарам конца XIX века."
      }
    ]
  }
];

const categories = [...new Set(museums.map(museum => museum.category))];

const Museums = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMuseum, setSelectedMuseum] = useState<number | null>(null);
  const [galleryImage, setGalleryImage] = useState<string | null>(null);

  const filteredMuseums = activeCategory === "all" 
    ? museums 
    : museums.filter(museum => museum.category === activeCategory);

  const handleSelectMuseum = (id: number) => {
    if (selectedMuseum === id) {
      setSelectedMuseum(null);
    } else {
      setSelectedMuseum(id);
      const element = document.getElementById(`museum-${id}`);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Музеи Вологды</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Погрузитесь в богатую историю и культуру Вологды через уникальные музейные коллекции
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
                  Все музеи
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
                Показаны все {museums.length} музеев Вологды
              </p>
            </TabsContent>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <p className="text-gray-600 mb-4">
                  Показаны музеи категории "{category}"
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Museums Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMuseums.map((museum) => (
              <Card 
                key={museum.id}
                id={`museum-card-${museum.id}`}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  selectedMuseum === museum.id ? 'border-[#6E59A5] border-2' : ''
                }`}
                onClick={() => handleSelectMuseum(museum.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={museum.imageUrl} 
                    alt={museum.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-[#6E59A5]">{museum.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{museum.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{museum.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-[#6E59A5] hover:text-white transition-colors"
                  >
                    Подробнее <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Museum Details */}
      {selectedMuseum && (
        <section className="py-12 bg-white" id={`museum-${selectedMuseum}`}>
          <div className="max-w-7xl mx-auto px-4">
            {museums.filter(museum => museum.id === selectedMuseum).map((museum) => (
              <div key={museum.id} className="animate-fade-in">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <img 
                      src={museum.imageUrl} 
                      alt={museum.title} 
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {museum.galleryImages.map((image, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <div 
                              className="h-20 cursor-pointer overflow-hidden rounded-md transition-transform hover:scale-105"
                              onClick={() => setGalleryImage(image)}
                            >
                              <img 
                                src={image} 
                                alt={`${museum.title} - фото ${index + 1}`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0">
                            <div className="relative h-[80vh]">
                              <img 
                                src={image} 
                                alt={`${museum.title} - фото ${index + 1}`} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <Badge className="mb-2 bg-[#6E59A5]">{museum.category}</Badge>
                    <h2 className="text-3xl font-bold mb-4">{museum.title}</h2>
                    <p className="text-gray-700 mb-6">{museum.fullDescription}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Icon name="MapPin" className="h-5 w-5 mr-2 text-[#6E59A5] mt-1" />
                        <div>
                          <span className="font-medium">Адрес:</span><br />
                          {museum.address}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Icon name="Clock" className="h-5 w-5 mr-2 text-[#6E59A5] mt-1" />
                        <div>
                          <span className="font-medium">Часы работы:</span><br />
                          {museum.openHours}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Icon name="Ticket" className="h-5 w-5 mr-2 text-[#6E59A5] mt-1" />
                        <div>
                          <span className="font-medium">Стоимость билетов:</span><br />
                          {museum.ticketPrice}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Icon name="Globe" className="h-5 w-5 mr-2 text-[#6E59A5] mt-1" />
                        <div>
                          <span className="font-medium">Сайт:</span><br />
                          <a 
                            href={museum.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#6E59A5] hover:underline"
                          >
                            {museum.website}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Icon name="Phone" className="h-5 w-5 mr-2 text-[#6E59A5] mt-1" />
                        <div>
                          <span className="font-medium">Телефон:</span><br />
                          {museum.phone}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-3">Особенности музея</h3>
                      <div className="flex flex-wrap gap-2">
                        {museum.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="bg-[#F1F0FB] text-[#6E59A5]">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="bg-[#6E59A5] hover:bg-[#7E69AB]">
                        <Icon name="Map" className="mr-2 h-4 w-4" />
                        Проложить маршрут
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Экспозиции музея</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {museum.exhibitions.map((exhibition, index) => (
                      <Card key={index} className="bg-[#F1F0FB] hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold mb-2">{exhibition.title}</h4>
                          <p className="text-gray-600">{exhibition.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Events and Activities */}
      <section className="py-16 bg-[#6E59A5] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Мероприятия и активности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Icon name="CalendarClock" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Экскурсии</h3>
              <p>Регулярные экскурсии по музеям Вологды с опытными гидами, рассказывающими о истории и культуре города</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Icon name="Palette" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Мастер-классы</h3>
              <p>Творческие мастер-классы по традиционным ремеслам: кружевоплетение, роспись, резьба по дереву</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Icon name="PartyPopper" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Фестивали</h3>
              <p>Культурные фестивали и тематические выставки, проводимые музеями Вологды в течение года</p>
            </div>
          </div>
          <Button 
            className="mt-10 bg-white text-[#6E59A5] hover:bg-gray-100"
            size="lg"
          >
            Календарь событий <Icon name="Calendar" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Практическая информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F1F0FB] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Icon name="TicketIcon" className="mr-2 h-6 w-6 text-[#6E59A5]" />
                Билеты и скидки
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Единый билет для посещения нескольких музеев - от 500 рублей</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Скидки для студентов, пенсионеров и детей до 16 лет - 50%</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Бесплатное посещение в последний четверг каждого месяца</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Электронные билеты доступны на официальных сайтах музеев</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#F1F0FB] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Icon name="Info" className="mr-2 h-6 w-6 text-[#6E59A5]" />
                Полезные советы
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Лучшее время для посещения - будние дни с 11:00 до 15:00</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Фотосъемка в большинстве музеев разрешена без вспышки</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Аудиогиды доступны на русском и английском языках</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-5 w-5 mr-2 text-[#6E59A5] mt-0.5" />
                  <span>Большинство музеев доступны для посетителей с ограниченными возможностями</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-[#F1F0FB]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Карта музеев Вологды</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
              {/* Placeholder for map - would be replaced with actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500">Интерактивная карта музеев Вологды</p>
                </div>
              </div>
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

export default Museums;
