export const BRAND = {
  name: 'Enjoy Marrakech Tours',
  short: 'EMT',
  tagline: 'Morocco, crafted around you',
  phone: '+212 704984943',
  phone2: '+212 713218286',
  whatsapp: '212704984943',
  whatsapp2: '212713218286',
  email: 'enjoymarrakechtours1@gmail.com',
  address: '24 Rue des Banques, Medina, Marrakech 40000, Morocco',
  hours: 'Open daily · 7:00 – 23:00',
  license: 'Licensed Moroccan Tour Operator',
}

export const waLink = (message: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`

export type Service = {
  name: string
  price: number
  unit?: string
  desc: string
  badge?: string
  image?: string
}

export type Category = {
  id: string
  label: string
  blurb: string
  image: string
  services: Service[]
}

export const CATEGORIES: Category[] = [
  {
    id: 'transfers',
    label: 'Tourist Transfers',
    blurb: 'Private chauffeurs, a modern air-conditioned fleet and fixed, honest prices — from the arrivals hall to any address in Morocco.',
    image: '/images/transfer.jpg',
    services: [
      { name: 'Marrakech Airport Transfer', price: 15, unit: 'per vehicle', desc: 'Meet & greet inside RAK arrivals, flight tracking and 45 min of free waiting time.', badge: 'Most booked' },
      { name: 'Hotel Transfer', price: 10, unit: 'per vehicle', desc: 'Door-to-door pickup from any riad, hotel or address in Marrakech.' },
      { name: 'Private Transfer', price: 20, unit: 'per vehicle', desc: 'Your own professional chauffeur and a spotless, air-conditioned vehicle.' },
      { name: 'Intercity Transfer', price: 120, unit: 'per vehicle', desc: 'Marrakech ⇄ Casablanca, Fes, Agadir, Essaouira, Tangier and more.' },
      { name: 'VIP Transfer', price: 75, unit: 'per vehicle', desc: 'Mercedes V-Class, on-board Wi-Fi, bottled water and concierge service.', badge: 'VIP' },
    ],
  },
  {
    id: 'day-trips',
    label: 'Day Trips',
    blurb: 'The best of Morocco in a single day — imperial kasbahs, Atlantic ports, valleys and waterfalls, always with hotel pickup.',
    image: '/images/aitbenhaddou.jpg',
    services: [
      { name: 'Marrakech to Essaouira', price: 25, desc: 'Atlantic ramparts, blue boats, argan cooperative and fresh seafood by the port.', image: 'https://images.pexels.com/photos/36956708/pexels-photo-36956708.jpeg' },
      { name: 'Ouarzazate & Ait Ben Haddou', price: 30, desc: 'Cross the High Atlas via Tizi n’Tichka to the famous UNESCO film-set kasbah.', badge: 'Best seller', image: 'https://images.pexels.com/photos/37818892/pexels-photo-37818892.jpeg' },
      { name: 'Ourika Valley', price: 20, desc: 'Berber villages, riverside lunch and the Setti Fatma waterfalls.', image: 'https://images.pexels.com/photos/16652784/pexels-photo-16652784.jpeg' },
      { name: 'Ouzoud Waterfalls', price: 25, desc: 'Morocco’s tallest falls — rainbows, wild monkeys and a boat ride.', image: 'https://images.pexels.com/photos/1632259/pexels-photo-1632259.jpeg' },
      { name: 'Imlil & Atlas Mountains', price: 25, desc: 'Mule tracks, walnut groves and mint tea with a Berber family.', image: 'https://images.pexels.com/photos/37401856/pexels-photo-37401856.jpeg' },
      { name: 'Agafay Desert', price: 35, desc: 'Rocky-desert sunset, camel ride and dinner under the stars.', image: 'https://images.pexels.com/photos/31653074/pexels-photo-31653074.jpeg' },
      { name: 'Ait Ben Haddou', price: 30, desc: 'A focused day at the legendary earthen ksar and its granary viewpoint.', image: 'https://images.pexels.com/photos/35548676/pexels-photo-35548676.jpeg' },
      { name: 'Casablanca Day Trip', price: 50, desc: 'Hassan II Mosque, the Corniche and Art-Deco boulevards.', image: 'https://images.pexels.com/photos/27468829/pexels-photo-27468829.jpeg' },
      { name: 'Rabat Day Trip', price: 55, desc: 'The capital’s Kasbah of the Udayas, Hassan Tower and royal esplanade.', image: 'https://images.pexels.com/photos/30532059/pexels-photo-30532059.jpeg' },
      { name: 'El Jadida Day Trip', price: 40, desc: 'Portuguese cistern, sea walls and quiet Atlantic beaches.', image: 'https://images.pexels.com/photos/19068581/pexels-photo-19068581.jpeg' },
      { name: 'Kasbah Telouet & Ait Ben Haddou Day Trip', price: 70, desc: 'Cross the High Atlas mountains to visit two of Morocco\'s most famous kasbahs: the crumbling grandeur of Telouet and the UNESCO-listed fortress of Ait Ben Haddou.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/vzr93dro4Rx1OprSUEjB_480_322.png' },
      { name: 'Agadir to Marrakech Day Trip', price: 160, desc: 'Travel from the coastal resort of Agadir to the imperial city of Marrakech. Explore historical landmarks, the vibrant Jemaa el-Fna square, and the Majorelle Garden.', image: 'https://www.clickexcursions.co.uk/storage/excursions/April2020/gS0bDYupI3f1woLQw8vD_480_322.jpg' },
      { name: 'Casablanca to Marrakech Day Trip', price: 160, desc: 'A private day trip to explore the magic of Marrakech from Casablanca. Visit the Bahia Palace, Saadian Tombs, and the bustling souks of the Medina with a local guide.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/hu1SAJFuuVwTB1m6m60O_480_322.jpg' },
      { name: 'Casablanca to Fez Day Trip', price: 90, desc: 'Discover Fez, the cultural capital of Morocco. Walk through the labyrinthine streets of the UNESCO-listed Fes el Bali medina, visiting the Al-Quaraouiyine Mosque.', image: 'https://www.clickexcursions.co.uk/storage/excursions/May2020/TFcFfjcY09OYP1xwE182_480_322.jpg' },
      { name: 'Casablanca to Rabat Day Trip', price: 70, desc: 'A short private tour from Casablanca to the capital city of Rabat. Visit the majestic Hassan Tower, the Mausoleum of Mohammed V, and the picturesque Kasbah of the Udayas.', image: 'https://www.clickexcursions.co.uk/storage/excursions/May2020/7bkRDKBA8P9iR7EFevoG_480_322.jpg' },
      { name: 'Oukaimden Ski Resort & Atlas Mountains Day Trip', price: 35, desc: 'Journey to Oukaimden, North Africa\'s highest ski resort (2,650m). Take a scenic chairlift ride, enjoy panoramic snow-capped Atlas vistas, or hike trails in summer.', image: 'https://moroccoglobaltours.com/wp-content/uploads/2023/02/escursione_oukaimden_1_m-min.jpg' },
      { name: 'Fez to Chefchaouen Day Trip', price: 35, desc: 'Wander through the dreamy blue-painted streets of Chefchaouen. A private transfer from Fez with free time to explore the medina, Outa el-Hammam square, and Spanish Mosque.', image: 'https://images.pexels.com/photos/18487314/pexels-photo-18487314.jpeg' },
      { name: 'Fes to Volubilis, Moulay Idriss & Meknes Day Trip', price: 40, desc: 'Journey from Fez to explore the ancient Roman ruins of Volubilis, the holy town of Moulay Idriss, and the imperial city of Meknes with its grand Bab Mansour gate.', image: 'https://images.unsplash.com/photo-1549944850-84e00be42151?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Tangier to Chefchaouen Day Trip', price: 40, desc: 'A scenic drive through the Rif Mountains from Tangier to the famous blue-washed city of Chefchaouen. Visit the kasbah and enjoy panoramic views.', image: 'https://images.unsplash.com/photo-1582236979607-3532f811559f?q=80&w=1200&auto=format&fit=crop' },
    ],
  },
  {
    id: 'desert',
    label: 'Sahara Desert Tours',
    blurb: 'Erg Chebbi and Zagora done properly — camel caravans at dusk, drums by the fire and a night in a Berber camp.',
    image: '/images/desert.jpg',
    services: [
      { name: 'Merzouga Desert — 2 Days', price: 95, desc: 'The fast route to Erg Chebbi’s big dunes, with sunset camel trek and camp night.', image: 'https://images.pexels.com/photos/5614643/pexels-photo-5614643.jpeg' },
      { name: 'Merzouga Desert — 3 Days', price: 125, desc: 'Dades gorges, Todra canyon and an unhurried night deep in the dunes.', badge: 'Signature', image: 'https://images.pexels.com/photos/5614643/pexels-photo-5614643.jpeg' },
      { name: 'Zagora Desert — 2 Days', price: 75, desc: 'The classic short Sahara escape through the Draa Valley palm groves.', image: 'https://images.pexels.com/photos/37684084/pexels-photo-37684084.jpeg' },
      { name: 'Luxury Desert Camp', price: 165, desc: 'Private ensuite tent, king bed, hot shower and dinner served in the dunes.', badge: 'Luxury', image: 'https://images.pexels.com/photos/35976808/pexels-photo-35976808.jpeg' },
      { name: 'Camel Trekking', price: 20, desc: 'Guided caravans at sunrise or sunset, with traditional blue cheich provided.', image: 'https://images.pexels.com/photos/28356797/pexels-photo-28356797.jpeg' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities',
    blurb: 'Adrenaline or serenity — in the palmeraie, on the water, or floating over the Atlas foothills at sunrise.',
    image: '/images/camel.jpg',
    services: [
      { name: 'Camel Ride', price: 18, desc: 'The palmeraie or Agafay, dressed in traditional gandoura and cheich.', image: 'https://images.pexels.com/photos/28356797/pexels-photo-28356797.jpeg' },
      { name: 'Quad Bike', price: 39, desc: 'Two hours of trails across the Agafay desert and Berber hamlets.', image: 'https://images.pexels.com/photos/38513972/pexels-photo-38513972.jpeg' },
      { name: 'Buggy Tour', price: 65, desc: 'Side-by-side buggies for couples — fast, safe and seriously fun.', image: 'https://images.pexels.com/photos/13252297/pexels-photo-13252297.jpeg' },
      { name: 'Horse Riding', price: 30, desc: 'Arabian-Barb horses along the river or through the palm groves.', image: 'https://images.pexels.com/photos/13788241/pexels-photo-13788241.jpeg' },
      { name: 'Hot Air Balloon', price: 165, desc: 'Sunrise flight over the palmeraie with Berber breakfast on landing.', badge: 'Unforgettable', image: 'https://images.pexels.com/photos/13568746/pexels-photo-13568746.jpeg' },
      { name: 'Paragliding', price: 70, desc: 'Tandem flights above the Kik plateau and Lalla Takerkoust lake.', image: 'https://images.pexels.com/photos/11649162/pexels-photo-11649162.jpeg' },
      { name: 'Zipline', price: 40, desc: 'Fly over the Terres d’Amanar canyon in the foothills of the Atlas.', image: 'https://images.pexels.com/photos/34087791/pexels-photo-34087791.jpeg' },
      { name: 'Jet Ski', price: 50, desc: 'Open-throttle laps on Lalla Takerkoust lake, 40 min from the city.', image: 'https://images.pexels.com/photos/37937666/pexels-photo-37937666.jpeg' },
      { name: 'Surf Lessons', price: 35, desc: 'Beginner-friendly coaching on the beaches of Taghazout or Essaouira.', image: 'https://images.pexels.com/photos/19560826/pexels-photo-19560826.jpeg' },
      { name: 'Sandboarding', price: 20, desc: 'Boards, dunes and golden-hour photos in Agafay or the small Sahara.', image: 'https://images.pexels.com/photos/10879388/pexels-photo-10879388.png' },
    ],
  },
  {
    id: 'experiences',
    label: 'Experiences',
    blurb: 'Hands-on Morocco — cook, steam, taste and celebrate with the people who know it best.',
    image: '/images/experience.jpg',
    services: [
      { name: 'Moroccan Cooking Class', price: 35, desc: 'Shop the souk, then cook tagine and bread with a local dada chef.', badge: 'Family favourite', image: 'https://images.pexels.com/photos/2287528/pexels-photo-2287528.jpeg' },
      { name: 'Hammam & Spa', price: 35, desc: 'Black-soap scrub, ghassoul wrap and argan massage in a traditional hammam.', image: 'https://images.pexels.com/photos/7598373/pexels-photo-7598373.jpeg' },
      { name: 'Fantasia Show', price: 49, desc: 'Charging horsemen, rifles and rhythm — Morocco’s legendary tbourida.', image: 'https://images.pexels.com/photos/6920322/pexels-photo-6920322.jpeg' },
      { name: 'Henna Experience', price: 15, desc: 'Natural henna art by a master naqasha, with mint tea and pastries.', image: 'https://images.pexels.com/photos/4727987/pexels-photo-4727987.jpeg' },
      { name: 'Tea Ceremony', price: 10, desc: 'Learn the ritual of Moroccan mint tea in a riad courtyard.', image: 'https://images.pexels.com/photos/30574975/pexels-photo-30574975.jpeg' },
    ],
  },
  {
    id: 'city-tours',
    label: 'City Tours',
    blurb: 'Licensed local guides who open doors you would never find alone — in Marrakech and across the kingdom.',
    image: '/images/hero.jpg',
    services: [
      { name: 'Marrakech Guided Tour', price: 20, desc: 'Bahia Palace, Saadian Tombs, souks and Jemaa el-Fna with a licensed guide.', badge: 'Essential', image: 'https://images.pexels.com/photos/35891424/pexels-photo-35891424.jpeg' },
      { name: 'Fes Guided Tour', price: 25, desc: 'The world’s oldest medina — tanneries, madrasas and master artisans.', image: 'https://images.pexels.com/photos/38112347/pexels-photo-38112347.jpeg' },
      { name: 'Casablanca Tour', price: 45, desc: 'Hassan II Mosque, habous quarter and the Atlantic Corniche.', image: 'https://images.pexels.com/photos/19615125/pexels-photo-19615125.jpeg' },
      { name: 'Rabat Tour', price: 45, desc: 'Capital highlights from the Udayas kasbah to the Mausoleum of Mohammed V.', image: 'https://images.pexels.com/photos/33998369/pexels-photo-33998369.jpeg' },
      { name: 'Chefchaouen Tour', price: 50, desc: 'The blue pearl of the Rif — painted lanes and mountain light.', image: 'https://images.pexels.com/photos/18487314/pexels-photo-18487314.jpeg' },
      { name: 'Tangier Tour', price: 50, desc: 'Where the Mediterranean meets the Atlantic — kasbah, caves and cafés.', image: 'https://images.unsplash.com/photo-1582236979607-3532f811559f?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Casablanca Private City Tour', price: 60, desc: 'A comprehensive guided private city tour of Casablanca, visiting the grand Hassan II Mosque, the elegant Habous Quarter, and the scenic oceanfront Corniche.', image: 'https://www.clickexcursions.co.uk/storage/excursions/May2020/zd0J1PfCM1DzqdCQGVFi_480_322.jpg' },
      { name: 'Fez Private City Tour', price: 60, desc: 'Explore Fez\'s most historic sights with a private guide. See the famous tanneries, the ornate gates of the Royal Palace, and the ancient madrasas.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/taqKnngw2OZI8Q2Pn9UA_480_322.jpg' },
    ],
  },
  {
    id: 'mountains',
    label: 'Mountain Escapes',
    blurb: 'The High Atlas is our backyard — cool valleys, terraced villages and North Africa’s highest summit.',
    image: '/images/atlas.jpg',
    services: [
      { name: 'Atlas Mountains', price: 25, desc: 'A full day across three valleys with tea in a Berber family home.', image: 'https://images.pexels.com/photos/37538532/pexels-photo-37538532.jpeg' },
      { name: 'Toubkal Trek — 2 Days', price: 110, desc: 'Summit Jebel Toubkal (4,167 m) with certified mountain guides.', badge: 'Challenge', image: 'https://images.pexels.com/photos/35641252/pexels-photo-35641252.jpeg' },
      { name: 'Berber Villages Tour', price: 25, desc: 'Walk between mud-brick hamlets, orchards and centuries-old irrigation channels.', image: 'https://images.pexels.com/photos/37401856/pexels-photo-37401856.jpeg' },
      { name: 'Setti Fatma', price: 20, desc: 'Seven waterfalls above the Ourika river — shaded pools and cliff cafés.', image: 'https://images.pexels.com/photos/37587583/pexels-photo-37587583.jpeg' },
      { name: 'Imlil & Kasbah Toubkal Day Trip', price: 70, desc: 'Explore the beautiful valleys of the Atlas Mountains, with a guided trek through the Berber villages of Asni and Imlil, followed by a delicious lunch at the luxury Kasbah Toubkal.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/JgFJDNh2dVJOATy6qgzN_480_322.png' },
      { name: 'Oukaimden Ski Resort & Atlas Mountains Day Trip', price: 35, desc: 'Journey to Oukaimden, North Africa\'s highest ski resort (2,650m). Take a scenic chairlift ride, enjoy panoramic snow-capped Atlas vistas, or hike trails in summer.', image: 'https://moroccoglobaltours.com/wp-content/uploads/2023/02/escursione_oukaimden_1_m-min.jpg' },
    ],
  },
  {
    id: 'coastal',
    label: 'Coastal Cities',
    blurb: 'Follow the Atlantic — fortified ports, surf villages and beaches that stretch to the horizon.',
    image: '/images/essaouira.jpg',
    services: [
      { name: 'Essaouira', price: 25, desc: 'The windy city — ramparts, blue boats, galleries and grilled sardines.', badge: 'Most loved', image: 'https://images.pexels.com/photos/36956708/pexels-photo-36956708.jpeg' },
      { name: 'Agadir', price: 40, desc: 'Ten kilometres of golden beach, the new marina and Souk El Had.', image: 'https://images.unsplash.com/photo-1710092538995-4af0c11a3f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Legzira Beach', price: 55, desc: 'The famous red-rock arches — one of Morocco’s great natural sights.', image: 'https://images.unsplash.com/photo-1583171573632-671575e64b89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Taghazout', price: 45, desc: 'Bohemian surf village with year-round swell and laid-back cafés.', image: 'https://images.pexels.com/photos/37088923/pexels-photo-37088923.jpeg' },
    ],
  },
  {
    id: 'circuit-tours',
    label: 'Circuit Tours',
    blurb: 'Multi-day grand itineraries across Morocco: sleep in Sahara desert dunes, cross Atlas mountain passes, and explore ancient imperial cities.',
    image: 'https://www.clickexcursions.co.uk/storage/excursions/May2023/MMBnaewNyDuW08q2hvt5_480_322.png',
    services: [
      { name: 'Marrakech to Tangier Grand Tour — 7 Days', price: 750, desc: 'An epic 7-day multi-city circuit. Visit Marrakech, Casablanca, Rabat, Fes, Chefchaouen, and finish in Tangier with private transfers, hotel pickup, and custom guiding.', image: 'https://www.clickexcursions.co.uk/storage/excursions/May2023/MMBnaewNyDuW08q2hvt5_480_322.png', badge: 'Grand Tour' },
      { name: 'Merzouga Desert Safari — 3 Days', price: 125, desc: 'Escape to the dunes of Merzouga and Erg Chebbi. Cross the High Atlas via Tizi-n-Tichka, visit Ait Ben Haddou, Dades Gorges, and enjoy a desert camp night.', image: 'https://www.clickexcursions.co.uk/storage/excursions/May2023/G0t8vn7uC1jYe9KmkS7l_480_322.png' },
      { name: 'Private Merzouga Desert Tour — 3 Days', price: 260, desc: 'Your own private vehicle and dedicated driver for a 3-day desert escape. Tour the gorges, ride camels at sunset, and sleep in a classic nomad camp.', image: 'https://www.clickexcursions.co.uk/storage/excursions/March2020/C0n9kG1ZB76rKhXJxuyA_480_322.jpg', badge: 'Private VIP' },
      { name: 'Private Zagora Desert Tour — 2 Days', price: 150, desc: 'A quick, private 2-day Sahara escape through the Draa Valley. Ride camels in Zagora, enjoy a traditional campfire dinner, and sleep under desert stars.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/HhEbJEp6B84ggLx1vSLE_480_322.jpg' },
      { name: 'Sahara Desert Explorer Tour — 4 Days', price: 240, desc: 'Dive deeper into wild Morocco. Wander through Todra Gorges, cross the pre-Saharan routes, and enjoy an immersive two-night desert camp experience.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2023/CERC6sRbmROm8hLXAlLt_480_322.png' },
      { name: 'Essaouira Multi-Day Escape — 2 Days', price: 150, desc: 'Relax and unwind in the calm, blue, musical city of Essaouira. Two full days to enjoy the Atlantic coast, ramparts, fresh fish, and laid-back medina.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/p2JlJ4ztpsuPQmhvG5Cj_480_322.png' },
      { name: 'Ouarzazate, Ait Ben Haddou & Fint Oasis — 2 Days', price: 150, desc: 'Explore the gates of the Sahara. Visit the film-set kasbahs of Ait Ben Haddou and Telouet, Atlas Cinema Studios, and walk in the lush Fint palm oasis.', image: 'https://www.clickexcursions.co.uk/storage/excursions/April2020/s7yYgMkvqiRd90BAgkM8_480_322.jpg' },
      { name: 'Marrakech to Fes Desert Journey — 3 Days', price: 150, desc: 'The perfect one-way connection between Marrakech and Fes. Journey via the Atlas Mountains, Todra Gorges, and spend an unforgettable night in Merzouga.', image: 'https://www.clickexcursions.co.uk/storage/excursions/October2021/Sol3Qhyl0YyERnxLTQ9X_480_322.jpg' },
      { name: 'Ouzoud Waterfalls & Iminifri Cave — 2 Days', price: 150, desc: 'An adventurous two-day mountain escape to see the mighty Ouzoud cascades and the massive natural rock bridge of Imi n’Ifri.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/piAdMPs5oXMZ3DU9G1fX_480_322.jpg' },
      { name: 'Moroccan Desert & Kasbah Experience — 5 Days', price: 390, desc: 'An extensive 5-day journey. Uncover the dramatic Dades and Todra gorges, ride camel caravans in Erg Chebbi, and visit historical southern kasbahs.', image: 'https://www.clickexcursions.co.uk/storage/excursions/September2024/hGlTbz984UGdSfed08xO_480_322.png', badge: 'Detailed Journey' },
      { name: 'Mount Toubkal Summit Climb — 2 Days', price: 110, desc: 'Challenge yourself to climb North Africa\'s highest peak (4,167 m) with certified mountain guides, including mule support and mountain refuge stay.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/5OcIGZ3KFGlJczWga1G0_480_322.jpg', badge: 'Challenge' },
      { name: 'Imlil Valley & Atlas Trekking — 2 Days', price: 115, desc: 'Walk between mud-brick Berber villages, walnut orchards, and enjoy stunning views of Toubkal. Professional guide and overnight in a local guesthouse.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/J5e9742d6q85saONB1Rl_480_322.jpg' },
      { name: 'Chefchaouen & Imperial Cities — 3 Days', price: 195, desc: 'Travel north from Marrakech to see Casablanca\'s mosque, Rabat\'s kasbah, Fes medina, and spend a full day in the picturesque blue city of Chefchaouen.', image: 'https://www.clickexcursions.co.uk/storage/excursions/June2020/x5HJlq45ZOWQg1oZzCf3_480_322.jpg' },
      { name: 'Agadir to Merzouga Desert Circuit — 4 Days', price: 360, desc: 'Depart from the Atlantic shores of Agadir. Travel through Taroudant, Taliouine saffron fields, Zagora, and complete your journey in Erg Chebbi dunes.', image: 'https://www.clickexcursions.co.uk/storage/excursions/April2020/wxYuE4HXLl3xawJUZyx4_480_322.jpg' },
      { name: 'Fes to Marrakech Desert Tour — 3 Days', price: 130, desc: 'Connect Fes and Marrakech with an unforgettable journey. Cross the Middle Atlas, visit the wild monkeys of Azrou, ride camels in Merzouga dunes, and explore Ait Ben Haddou.', image: 'https://moroccoglobaltours.com/wp-content/uploads/2023/04/IMG_1599.jpg' },
      { name: 'Fes to Marrakech Desert Tour — 4 Days', price: 180, desc: 'A relaxed 4-day desert journey from Fes to Marrakech. Enjoy an extra night in Dades valley, hike through Todra Gorges, and witness Erg Chebbi sunset on a camel caravan.', image: 'https://moroccoglobaltours.com/wp-content/uploads/2023/04/IMG_1613-1-e1680832031451.jpg' },
      { name: 'Casablanca to Marrakech & Desert Grand Tour — 7 Days', price: 450, desc: 'Start in Casablanca and journey through Rabat, Marrakech, Ait Ben Haddou, Dades Gorges, and spend an immersive night under the Sahara dunes of Merzouga.', image: 'https://moroccoglobaltours.com/wp-content/uploads/2023/06/006.jpg' },
      { name: 'Morocco Discovery Grand Tour — 10 Days', price: 790, desc: 'The ultimate 10-day Moroccan loop starting from Casablanca or Marrakech. Covers Fes medina, Chefchaouen, Meknes, Midelt, Merzouga desert camp, Ouarzazate, and Marrakech.', image: 'https://moroccoglobaltours.com/wp-content/uploads/2023/04/IMG_1457.jpg' },
      { name: 'Imperial Cities & Chefchaouen Tour — 8 Days', price: 490, desc: 'Explore Morocco\'s four imperial cities: Marrakech, Rabat, Meknes, and Fes. Wander through the Roman ruins of Volubilis and the famous blue streets of Chefchaouen.', image: 'https://images.pexels.com/photos/35891424/pexels-photo-35891424.jpeg' },
      { name: 'North Morocco & Blue Pearl Tour — 5 Days', price: 290, desc: 'Discover the highlights of northern Morocco. Tour Tangier, the blue city of Chefchaouen, the historic imperial city of Fes, and Meknes medina.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop' },
    ],
  },
]

export type Tour = {
  title: string
  image: string
  days: string
  price: number
  rating: number
  reviews: number
  points: string[]
  badge?: string
}

export const FEATURED: Tour[] = [
  {
    title: 'Merzouga Luxury Desert — 3 Days',
    image: 'https://images.pexels.com/photos/5614643/pexels-photo-5614643.jpeg',
    days: '3 days · 2 nights',
    price: 125,
    rating: 4.9,
    reviews: 486,
    points: ['Ait Ben Haddou & Dades Gorges', 'Sunset camel trek in Erg Chebbi', 'Night in a private luxury camp'],
    badge: 'Signature tour',
  },
  {
    title: 'Ouarzazate & Ait Ben Haddou',
    image: 'https://images.pexels.com/photos/37818892/pexels-photo-37818892.jpeg',
    days: 'Full day · 12 h',
    price: 30,
    rating: 4.8,
    reviews: 902,
    points: ['Tizi n’Tichka pass, High Atlas', 'UNESCO ksar with local guide', 'Atlas Film Studios visit'],
    badge: 'Best seller',
  },
  {
    title: 'Sunrise Hot Air Balloon',
    image: 'https://images.pexels.com/photos/13568746/pexels-photo-13568746.jpeg',
    days: '4 hours · morning',
    price: 165,
    rating: 5.0,
    reviews: 318,
    points: ['1-hour flight over the palmeraie', 'Berber breakfast in a tent', 'Flight certificate & 4x4 pickup'],
    badge: 'Premium',
  },
  {
    title: 'Ourika Valley & Atlas Villages',
    image: 'https://images.pexels.com/photos/16652784/pexels-photo-16652784.jpeg',
    days: 'Full day · 8 h',
    price: 20,
    rating: 4.8,
    reviews: 764,
    points: ['Setti Fatma waterfalls hike', 'Tea with a Berber family', 'Riverside tagine lunch stop'],
  },
  {
    title: 'Essaouira Coastal Escape',
    image: 'https://images.pexels.com/photos/36956708/pexels-photo-36956708.jpeg',
    days: 'Full day · 10 h',
    price: 25,
    rating: 4.9,
    reviews: 655,
    points: ['Medina ramparts & blue port', 'Argan oil cooperative visit', 'Free time on the beach'],
  },
  {
    title: 'Agafay Sunset, Camels & Dinner Show',
    image: 'https://images.pexels.com/photos/31653074/pexels-photo-31653074.jpeg',
    days: 'Evening · 6 h',
    price: 49,
    rating: 4.9,
    reviews: 841,
    points: ['Camel caravan at golden hour', 'Dinner under desert stars', 'Fire show & live gnawa music'],
    badge: 'Evening favourite',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sophie Laurent',
    from: 'Lyon, France',
    tour: 'Merzouga 3-Day Desert Tour',
    text: 'Flawless from the airport pickup to the last mint tea. Our driver Hassan felt like family by day two, and the luxury camp in the dunes was pure magic — we still talk about that sunrise.',
  },
  {
    name: 'James & Emma Whitfield',
    from: 'Manchester, UK',
    tour: 'Ait Ben Haddou + Hot Air Balloon',
    text: 'Professional, punctual and genuinely warm. The balloon flight was the highlight of our honeymoon, and the team even arranged a surprise cake in the desert camp. Five stars, easily.',
  },
  {
    name: 'Ahmed Al-Khalifa',
    from: 'Dubai, UAE',
    tour: 'VIP Transfers & Private City Tour',
    text: 'I travel constantly and rarely write reviews. The V-Class was immaculate, the guide’s knowledge of the medina was extraordinary, and every WhatsApp message was answered in minutes.',
  },
]

export const STATS = [
  { value: '12+', label: 'Years of experience' },
  { value: '15k', label: 'Happy travellers' },
  { value: '60+', label: 'Tours & services' },
  { value: '4.9', label: 'Average rating' },
]

export const nav = [
  { label: 'Tours', href: '/#tours' },
  { label: 'Services', href: '/#categories' },
  { label: 'Process', href: '/#how-it-works' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Why Us', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#booking' },
]

export const toSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const findItemBySlug = (slug: string) => {
  const featured = FEATURED.find((t) => toSlug(t.title) === slug)
  if (featured) {
    return {
      type: 'tour' as const,
      name: featured.title,
      price: featured.price,
      unit: undefined as string | undefined,
      desc: featured.points.join(' · '),
      points: featured.points,
      image: featured.image,
      days: featured.days,
      rating: featured.rating,
      reviews: featured.reviews,
      badge: featured.badge,
    }
  }

  for (const cat of CATEGORIES) {
    const service = cat.services.find((s) => toSlug(s.name) === slug)
    if (service) {
      return {
        type: 'service' as const,
        name: service.name,
        price: service.price,
        unit: service.unit,
        desc: service.desc,
        points: [
          'Air-conditioned private transport',
          'Hotel pickup and drop-off included',
          'Licensed English-speaking local driver',
          service.unit ? `Flexible rates per ${service.unit}` : 'Flexible departure times',
        ],
        image: service.image || cat.image,
        days: 'Flexible Duration',
        rating: 4.9,
        reviews: 120,
        badge: service.badge,
      }
    }
  }

  return null
}

/**
 * Appends auto-compression, modern formats, custom width, and height cropping
 * to external Pexels and Unsplash URLs to keep assets lightweight and fast.
 */
export const optimizeImage = (url: string, width = 600, height?: number): string => {
  if (!url) return ''
  if (url.startsWith('/')) return url

  try {
    const urlObj = new URL(url)
    if (urlObj.hostname.includes('pexels.com')) {
      urlObj.searchParams.set('auto', 'compress,format')
      urlObj.searchParams.set('w', width.toString())
      if (height) {
        urlObj.searchParams.set('h', height.toString())
        urlObj.searchParams.set('fit', 'crop')
        urlObj.searchParams.set('crop', 'entropy')
      }
      return urlObj.toString()
    }
    if (urlObj.hostname.includes('unsplash.com')) {
      urlObj.searchParams.set('auto', 'format')
      urlObj.searchParams.set('w', width.toString())
      urlObj.searchParams.set('q', '75')
      if (height) {
        urlObj.searchParams.set('h', height.toString())
        urlObj.searchParams.set('fit', 'crop')
      }
      return urlObj.toString()
    }
    return url
  } catch (e) {
    return url
  }
}


