export interface CarSpec {
  id: string;
  brand: 'BMW' | 'Mercedes' | 'Audi';
  model: string;
  series: string;
  tagline: string;
  image: string;
  highlights: {
    engine: string;
    price: string;
    power: string;
  };
  specs: {
    engine: string;
    power: string;
    torque: string;
    mileage: string;
    acceleration: string;
    price: string;
    safetyRating: string;
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
  };
  colors: {
    name: string;
    hex: string;
    image: string;
  }[];
  history: string;
  recommendation: string;
}

export const cars: CarSpec[] = [
  // BMW Models
  {
    id: 'bmw-3-series',
    brand: 'BMW',
    model: '3 Series',
    series: '3',
    tagline: 'Sporty & Driver-Focused',
    image: 'src/assets/bmw 3.png',
    highlights: {
      engine: '2.0L Turbo Petrol / Diesel',
      price: '₹45L - ₹52L',
      power: '255 hp'
    },
    specs: {
      engine: '2.0L Turbo Petrol / Diesel',
      power: '255 hp @ 5,000-6,500 rpm',
      torque: '400 Nm @ 1,550-4,400 rpm',
      mileage: '15 km/l',
      acceleration: '0-100 km/h in 6.1s',
      price: '₹45L - ₹52L',
      safetyRating: '6 Airbags, ABS, ESP',
      dimensions: {
        length: '4709 mm',
        width: '1827 mm',
        height: '1442 mm'
      }
    },
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF', image: '/src/assets/bmw-3-series.jpg' },
      { name: 'Jet Black', hex: '#000000', image: '/src/assets/bmw-3-series.jpg' },
      { name: 'Storm Bay', hex: '#4A90E2', image: '/src/assets/bmw-3-series.jpg' },
      { name: 'Mineral Grey', hex: '#6B7280', image: '/src/assets/bmw-3-series.jpg' }
    ],
    history: 'The BMW 3 Series, introduced in 1975, is known as the benchmark for sport sedans and has been dominating Indian luxury sedan market since its launch.',
    recommendation: 'Perfect for drivers who prioritize sporty handling and dynamic performance over everything else.'
  },
  {
    id: 'bmw-5-series',
    brand: 'BMW',
    model: '5 Series',
    series: '5',
    tagline: 'Executive Luxury',
    image: 'src/assets/bmw 5.png',
    highlights: {
      engine: '2.0L Turbo Petrol',
      price: '₹63L - ₹72L',
      power: '248 hp'
    },
    specs: {
      engine: '2.0L 4-cylinder TwinPower Turbo',
      power: '248 hp @ 5,200-6,500 rpm',
      torque: '350 Nm @ 1,450-4,800 rpm',
      mileage: '14.1 km/l',
      acceleration: '0-100 km/h in 6.8s',
      price: '₹63L - ₹72L',
      safetyRating: '7 Airbags, ABS, ESP',
      dimensions: {
        length: '4963 mm',
        width: '1868 mm',
        height: '1479 mm'
      }
    },
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF', image: '/src/assets/bmw-5-series.jpg' },
      { name: 'Jet Black', hex: '#000000', image: '/src/assets/bmw-5-series.jpg' },
      { name: 'Mineral Grey', hex: '#6B7280', image: '/src/assets/bmw-5-series.jpg' },
      { name: 'Storm Bay', hex: '#4A90E2', image: '/src/assets/bmw-5-series.jpg' }
    ],
    history: 'The BMW 5 Series represents the perfect balance of luxury and performance in the executive sedan segment since 1972.',
    recommendation: 'Ideal for executives who want luxury without compromising on driving dynamics.'
  },
  {
    id: 'bmw-7-series',
    brand: 'BMW',
    model: '7 Series',
    series: '7',
    tagline: 'Ultimate Luxury',
    image: 'src/assets/bmw 7.png',
    highlights: {
      engine: '3.0L Turbo V6',
      price: '₹1.5Cr - ₹2.5Cr',
      power: '335 hp'
    },
    specs: {
      engine: '3.0L 6-cylinder TwinPower Turbo',
      power: '335 hp @ 5,500-6,500 rpm',
      torque: '450 Nm @ 1,500-5,200 rpm',
      mileage: '12.4 km/l',
      acceleration: '0-100 km/h in 5.8s',
      price: '₹1.5Cr - ₹2.5Cr',
      safetyRating: '8 Airbags, ABS, ESP',
      dimensions: {
        length: '5120 mm',
        width: '1902 mm',
        height: '1479 mm'
      }
    },
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF', image: '/src/assets/bmw-7-series.jpg' },
      { name: 'Jet Black', hex: '#000000', image: '/src/assets/bmw-7-series.jpg' },
      { name: 'Mineral Grey', hex: '#6B7280', image: '/src/assets/bmw-7-series.jpg' },
      { name: 'Storm Bay', hex: '#4A90E2', image: '/src/assets/bmw-7-series.jpg' }
    ],
    history: 'The BMW 7 Series flagship sedan sets the standard for luxury and innovation in the full-size luxury segment since 1977.',
    recommendation: 'The ultimate choice for those who demand the finest in automotive luxury and technology.'
  },

  // Mercedes Models
  {
    id: 'mercedes-c-class',
    brand: 'Mercedes',
    model: 'C-Class',
    series: 'C',
    tagline: 'Luxury & Comfort',
    image: 'src/assets/c class.png',
    highlights: {
      engine: '2.0L Petrol / Diesel Mild Hybrid',
      price: '₹48L - ₹55L',
      power: '258 hp'
    },
    specs: {
      engine: '2.0L Petrol / Diesel Mild Hybrid',
      power: '258 hp @ 5,800 rpm',
      torque: '370 Nm @ 2,000-4,000 rpm',
      mileage: '16 km/l',
      acceleration: '0-100 km/h in 6.0s',
      price: '₹48L - ₹55L',
      safetyRating: '7 Airbags, ABS, ESP',
      dimensions: {
        length: '4751 mm',
        width: '1820 mm',
        height: '1438 mm'
      }
    },
    colors: [
      { name: 'Polar White', hex: '#FFFFFF', image: '/src/assets/mercedes-c-class.jpg' },
      { name: 'Brilliant Silver', hex: '#C0C0C0', image: '/src/assets/mercedes-c-class.jpg' },
      { name: 'Obsidian Black', hex: '#000000', image: '/src/assets/mercedes-c-class.jpg' },
      { name: 'Cavansite Blue', hex: '#1E3A8A', image: '/src/assets/mercedes-c-class.jpg' }
    ],
    history: 'The Mercedes C-Class debuted in 1993 and is known for its luxury and comfort-first approach, perfectly suited for Indian luxury car buyers.',
    recommendation: 'Perfect for those who prioritize comfort, refinement, and prestige in their daily drive.'
  },
  {
    id: 'mercedes-e-class',
    brand: 'Mercedes',
    model: 'E-Class',
    series: 'E',
    tagline: 'Sophisticated Elegance',
    image: 'src/assets/e class.png',
    highlights: {
      engine: '2.0L Turbo Petrol',
      price: '₹78L - ₹88L',
      power: '255 hp'
    },
    specs: {
      engine: '2.0L 4-cylinder Turbo',
      power: '255 hp @ 5,800 rpm',
      torque: '370 Nm @ 2,000-4,000 rpm',
      mileage: '13.2 km/l',
      acceleration: '0-100 km/h in 6.2s',
      price: '₹78L - ₹88L',
      safetyRating: '8 Airbags, ABS, ESP',
      dimensions: {
        length: '4923 mm',
        width: '1852 mm',
        height: '1468 mm'
      }
    },
    colors: [
      { name: 'Polar White', hex: '#FFFFFF', image: '/src/assets/mercedes-e-class.jpg' },
      { name: 'Brilliant Silver', hex: '#C0C0C0', image: '/src/assets/mercedes-e-class.jpg' },
      { name: 'Obsidian Black', hex: '#000000', image: '/src/assets/mercedes-e-class.jpg' },
      { name: 'Cavansite Blue', hex: '#1E3A8A', image: '/src/assets/mercedes-e-class.jpg' }
    ],
    history: 'The Mercedes E-Class epitomizes sophisticated luxury with cutting-edge technology and supreme comfort since 1953.',
    recommendation: 'The ideal choice for those seeking the perfect blend of luxury, technology, and comfort.'
  },
  {
    id: 'mercedes-s-class',
    brand: 'Mercedes',
    model: 'S-Class',
    series: 'S',
    tagline: 'Ultimate Comfort',
    image: 'src/assets/s class.png',
    highlights: {
      engine: '3.0L Turbo V6',
      price: '₹1.7Cr - ₹2.8Cr',
      power: '429 hp'
    },
    specs: {
      engine: '3.0L 6-cylinder Turbo with EQBoost',
      power: '429 hp @ 6,100 rpm',
      torque: '520 Nm @ 1,800-5,800 rpm',
      mileage: '10.5 km/l',
      acceleration: '0-100 km/h in 4.9s',
      price: '₹1.7Cr - ₹2.8Cr',
      safetyRating: '9 Airbags, ABS, ESP',
      dimensions: {
        length: '5179 mm',
        width: '1921 mm',
        height: '1503 mm'
      }
    },
    colors: [
      { name: 'Polar White', hex: '#FFFFFF', image: '/src/assets/mercedes-s-class.jpg' },
      { name: 'Brilliant Silver', hex: '#C0C0C0', image: '/src/assets/mercedes-s-class.jpg' },
      { name: 'Obsidian Black', hex: '#000000', image: '/src/assets/mercedes-s-class.jpg' },
      { name: 'Cavansite Blue', hex: '#1E3A8A', image: '/src/assets/mercedes-s-class.jpg' }
    ],
    history: 'The Mercedes S-Class has been the pinnacle of automotive luxury and innovation for decades since 1972.',
    recommendation: 'The ultimate expression of luxury, comfort, and technological advancement in automotive form.'
  },

  // Audi Models
  {
    id: 'audi-a4',
    brand: 'Audi',
    model: 'A4',
    series: 'A4',
    tagline: 'Balanced Luxury & Sportiness',
    image: 'src/assets/audi a4.png',
    highlights: {
      engine: '2.0L Turbo Petrol',
      price: '₹47L - ₹54L',
      power: '261 hp'
    },
    specs: {
      engine: '2.0L Turbo Petrol',
      power: '261 hp @ 4,200-6,000 rpm',
      torque: '370 Nm @ 1,450-4,200 rpm',
      mileage: '15 km/l',
      acceleration: '0-100 km/h in 5.9s',
      price: '₹47L - ₹54L',
      safetyRating: '6 Airbags, ABS, ESC',
      dimensions: {
        length: '4762 mm',
        width: '1847 mm',
        height: '1428 mm'
      }
    },
    colors: [
      { name: 'Glacier White', hex: '#FFFFFF', image: '/src/assets/audi-a4.jpg' },
      { name: 'Mythos Black', hex: '#000000', image: '/src/assets/audi-a4.jpg' },
      { name: 'Tango Red', hex: '#DC2626', image: '/src/assets/audi-a4.jpg' },
      { name: 'Navarra Blue', hex: '#1E40AF', image: '/src/assets/audi-a4.jpg' }
    ],
    history: 'The Audi A4, launched in 1994, is famous for blending sporty driving with everyday usability in the Indian luxury segment.',
    recommendation: 'Ideal for those who want a balanced approach to luxury - neither too sporty nor too comfort-focused.'
  },
  {
    id: 'audi-a6',
    brand: 'Audi',
    model: 'A6',
    series: 'A6',
    tagline: 'Progressive Luxury',
    image: 'src/assets/a6.png',
    highlights: {
      engine: '2.0L TFSI Turbo',
      price: '₹63L - ₹75L',
      power: '245 hp'
    },
    specs: {
      engine: '2.0L 4-cylinder TFSI',
      power: '245 hp @ 5,000-6,000 rpm',
      torque: '370 Nm @ 1,600-4,500 rpm',
      mileage: '14.11 km/l',
      acceleration: '0-100 km/h in 6.8s',
      price: '₹63L - ₹75L',
      safetyRating: '7 Airbags, ABS, ESC',
      dimensions: {
        length: '4939 mm',
        width: '1886 mm',
        height: '1457 mm'
      }
    },
    colors: [
      { name: 'Glacier White', hex: '#FFFFFF', image: '/src/assets/audi-a6.jpg' },
      { name: 'Mythos Black', hex: '#000000', image: '/src/assets/audi-a6.jpg' },
      { name: 'Tango Red', hex: '#DC2626', image: '/src/assets/audi-a6.jpg' },
      { name: 'Navarra Blue', hex: '#1E40AF', image: '/src/assets/audi-a6.jpg' }
    ],
    history: 'The Audi A6 represents progressive luxury with cutting-edge technology and refined design since 1994.',
    recommendation: 'Perfect for professionals who appreciate advanced technology and sophisticated design.'
  },
  {
    id: 'audi-a8',
    brand: 'Audi',
    model: 'A8',
    series: 'A8',
    tagline: 'Technology & Luxury',
    image: 'src/assets/a8.png',
    highlights: {
      engine: '3.0L TFSI V6',
      price: '₹1.56Cr - ₹2.97Cr',
      power: '340 hp'
    },
    specs: {
      engine: '3.0L V6 TFSI with mild hybrid',
      power: '340 hp @ 5,000-6,400 rpm',
      torque: '500 Nm @ 1,370-4,500 rpm',
      mileage: '11.72 km/l',
      acceleration: '0-100 km/h in 5.6s',
      price: '₹1.56Cr - ₹2.97Cr',
      safetyRating: '8 Airbags, ABS, ESC',
      dimensions: {
        length: '5172 mm',
        width: '1945 mm',
        height: '1473 mm'
      }
    },
    colors: [
      { name: 'Glacier White', hex: '#FFFFFF', image: '/src/assets/audi-a8.jpg' },
      { name: 'Mythos Black', hex: '#000000', image: '/src/assets/audi-a8.jpg' },
      { name: 'Tango Red', hex: '#DC2626', image: '/src/assets/audi-a8.jpg' },
      { name: 'Navarra Blue', hex: '#1E40AF', image: '/src/assets/audi-a8.jpg' }
    ],
    history: 'The Audi A8 flagship sedan showcases the pinnacle of technology and luxury in the full-size luxury segment since 1994.',
    recommendation: 'The ultimate choice for tech enthusiasts who appreciate luxury and innovation in equal measure.'
  }
];

export const brandLogos = {
  BMW: 'src/assets/bmw logo.png',
  Mercedes: 'src/assets/merc logo.png',
  Audi: 'src/assets/audi logo.jpeg'
};

export const brandRecommendations = {
  BMW: 'Choose BMW for the ultimate sporty driving experience with precise handling and dynamic performance.',
  Mercedes: 'Choose Mercedes for unparalleled comfort, luxury, and refined elegance in every journey.',
  Audi: 'Choose Audi for the perfect balance between sport and comfort, with cutting-edge technology.'
};