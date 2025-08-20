export interface CarVariant {
  name: string;
  engine: string;
  fuel: string;
  transmission: string;
  mileage: string;
  price: string;
}

export interface CarModel {
  variants: CarVariant[];
  on_road_price_mumbai: string;
}

export interface CarSpec {
  id: string;
  brand: 'BMW' | 'Mercedes-Benz' | 'Audi';
  model: string;
  tagline: string;
  image: string;
  data: CarModel;
  history: string;
  recommendation: string;
}

export const carsData = {
  "BMW": {
    "3_Series": {
      "variants": [
        {
          "name": "M340i xDrive",
          "engine": "2998 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "13.02 kmpl",
          "price": "₹75.90 Lakh"
        },
        {
          "name": "M340i 50 Jahre Edition",
          "engine": "2998 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "13.02 kmpl",
          "price": "₹76.90 Lakh"
        }
      ],
      "on_road_price_mumbai": "₹75.90 Lakh"
    },
    "5_Series": {
      "variants": [
        {
          "name": "530Li",
          "engine": "1998 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "10.9 kmpl",
          "price": "₹74.40 Lakh"
        }
      ],
      "on_road_price_mumbai": "₹87.98 Lakh"
    },
    "7_Series": {
      "variants": [
        {
          "name": "740i M Sport",
          "engine": "2998 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "13.02 kmpl",
          "price": "₹1.84 Cr"
        },
        {
          "name": "740d M Sport",
          "engine": "2993 cc",
          "fuel": "Diesel",
          "transmission": "Automatic",
          "mileage": "13.02 kmpl",
          "price": "₹1.87 Cr"
        }
      ],
      "on_road_price_mumbai": "₹2.17 Cr"
    }
  },
  "Audi": {
    "A4": {
      "variants": [
        {
          "name": "Premium",
          "engine": "1984 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "15 kmpl",
          "price": "₹47.93 Lakh"
        },
        {
          "name": "Premium Plus",
          "engine": "1984 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "14.1 kmpl",
          "price": "₹53.03 Lakh"
        },
        {
          "name": "Technology",
          "engine": "1984 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "14.1 kmpl",
          "price": "₹57.11 Lakh"
        }
      ],
      "on_road_price_mumbai": "₹57.11 Lakh"
    },
    "A6": {
      "variants": [
        {
          "name": "45 TFSI Premium Plus",
          "engine": "1984 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "14.11 kmpl",
          "price": "₹66.05 Lakh"
        },
        {
          "name": "45 TFSI Technology",
          "engine": "1984 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "14.11 kmpl",
          "price": "₹72.43 Lakh"
        }
      ],
      "on_road_price_mumbai": "₹72.43 Lakh"
    },
    "A8": {
      "variants": [
        {
          "name": "55 TFSI",
          "engine": "2995 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "11.7 kmpl",
          "price": "₹1.58 Cr"
        }
      ],
      "on_road_price_mumbai": "₹1.58 Cr"
    }
  },
  "Mercedes-Benz": {
    "C_Class": {
      "variants": [
        {
          "name": "C 200",
          "engine": "1496 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "16.9 kmpl",
          "price": "₹59.40 Lakh"
        },
        {
          "name": "C 220d",
          "engine": "1993 cc",
          "fuel": "Diesel",
          "transmission": "Automatic",
          "mileage": "23 kmpl",
          "price": "₹60.30 Lakh"
        },
        {
          "name": "C 300",
          "engine": "1991 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "16.9 kmpl",
          "price": "₹66.25 Lakh"
        }
      ],
      "on_road_price_mumbai": "₹66.25 Lakh"
    },
    "E_Class": {
      "variants": [
        {
          "name": "E 200",
          "engine": "1991 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "15.9 kmpl",
          "price": "₹78.50 Lakh"
        },
        {
          "name": "E 220d",
          "engine": "1950 cc",
          "fuel": "Diesel",
          "transmission": "Automatic",
          "mileage": "23.8 kmpl",
          "price": "₹81.50 Lakh"
        },
        {
          "name": "E 450",
          "engine": "2996 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "10.9 kmpl",
          "price": "₹94.50 Lakh"
        }
      ],
      "on_road_price_mumbai": "₹94.50 Lakh"
    },
    "S_Class": {
      "variants": [
        {
          "name": "S 350d",
          "engine": "2987 cc",
          "fuel": "Diesel",
          "transmission": "Automatic",
          "mileage": "14.0 kmpl",
          "price": "₹1.57 Cr"
        },
        {
          "name": "S 400d",
          "engine": "2925 cc",
          "fuel": "Diesel",
          "transmission": "Automatic",
          "mileage": "14.0 kmpl",
          "price": "₹1.63 Cr"
        },
        {
          "name": "S 450",
          "engine": "2996 cc",
          "fuel": "Petrol",
          "transmission": "Automatic",
          "mileage": "10.0 kmpl",
          "price": "₹1.69 Cr"
        }
      ],
      "on_road_price_mumbai": "₹1.69 Cr"
    }
  }
};

export const cars: CarSpec[] = [
  {
    id: 'bmw-3-series',
    brand: 'BMW',
    model: '3 Series',
    tagline: 'Sporty & Driver-Focused',
    image: 'src/assets/bmw 3.png',
    data: carsData.BMW["3_Series"],
    history: 'The BMW 3 Series, introduced in 1975, is known as the benchmark for sport sedans and has been dominating Indian luxury sedan market since its launch.',
    recommendation: 'Perfect for drivers who prioritize sporty handling and dynamic performance over everything else.'
  },
  {
    id: 'bmw-5-series',
    brand: 'BMW',
    model: '5 Series',
    tagline: 'Executive Luxury',
    image: 'src/assets/bmw 5.png',
    data: carsData.BMW["5_Series"],
    history: 'The BMW 5 Series represents the perfect balance of luxury and performance in the executive sedan segment since 1972.',
    recommendation: 'Ideal for executives who want luxury without compromising on driving dynamics.'
  },
  {
    id: 'bmw-7-series',
    brand: 'BMW',
    model: '7 Series',
    tagline: 'Ultimate Luxury',
    image: 'src/assets/bmw 7.png',
    data: carsData.BMW["7_Series"],
    history: 'The BMW 7 Series flagship sedan sets the standard for luxury and innovation in the full-size luxury segment since 1977.',
    recommendation: 'The ultimate choice for those who demand the finest in automotive luxury and technology.'
  },
  {
    id: 'mercedes-c-class',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    tagline: 'Luxury & Comfort',
    image: 'src/assets/c class.png',
    data: carsData["Mercedes-Benz"]["C_Class"],
    history: 'The Mercedes C-Class debuted in 1993 and is known for its luxury and comfort-first approach, perfectly suited for Indian luxury car buyers.',
    recommendation: 'Perfect for those who prioritize comfort, refinement, and prestige in their daily drive.'
  },
  {
    id: 'mercedes-e-class',
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    tagline: 'Sophisticated Elegance',
    image: 'src/assets/e class.png',
    data: carsData["Mercedes-Benz"]["E_Class"],
    history: 'The Mercedes E-Class epitomizes sophisticated luxury with cutting-edge technology and supreme comfort since 1953.',
    recommendation: 'The ideal choice for those seeking the perfect blend of luxury, technology, and comfort.'
  },
  {
    id: 'mercedes-s-class',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    tagline: 'Ultimate Comfort',
    image: 'src/assets/s class.png',
    data: carsData["Mercedes-Benz"]["S_Class"],
    history: 'The Mercedes S-Class has been the pinnacle of automotive luxury and innovation for decades since 1972.',
    recommendation: 'The ultimate expression of luxury, comfort, and technological advancement in automotive form.'
  },
  {
    id: 'audi-a4',
    brand: 'Audi',
    model: 'A4',
    series: 'A4',
    tagline: 'Balanced Luxury & Sportiness',
    image: 'src/assets/audi a4.png',
    data: carsData.Audi.A4,
    history: 'The Audi A4, launched in 1994, is famous for blending sporty driving with everyday usability in the Indian luxury segment.',
    recommendation: 'Ideal for those who want a balanced approach to luxury - neither too sporty nor too comfort-focused.'
  },
  {
    id: 'audi-a6',
    brand: 'Audi',
    model: 'A6',
    tagline: 'Progressive Luxury',
    image: 'src/assets/a6.png',
    data: carsData.Audi.A6,
    history: 'The Audi A6 represents progressive luxury with cutting-edge technology and refined design since 1994.',
    recommendation: 'Perfect for professionals who appreciate advanced technology and sophisticated design.'
  },
  {
    id: 'audi-a8',
    brand: 'Audi',
    model: 'A8',
    tagline: 'Technology & Luxury',
    image: 'src/assets/a8.png',
    data: carsData.Audi.A8,
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