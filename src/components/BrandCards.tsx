import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import bmwLogo from "@/assets/bmw logo.png";
import mercedesLogo from "@/assets/merc logo.png";
import audiLogo from "@/assets/audi logo.jpeg";

const brandImages = {
  BMW: bmwLogo,
  Mercedes: mercedesLogo,
  Audi: audiLogo
};

interface Car {
  id: number;
  name: string;
  brand: string;
  image: string;
}

interface BrandCardsProps {
  cars: Car[];
}

export function BrandCards({ cars }: BrandCardsProps) {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  const navigate = useNavigate();

  const brands = ["BMW", "Mercedes-Benz", "Audi"];

  const getBrandCars = (brand: string) => {
    return cars.filter((car) => car.brand === brand);
  };

  const handleCarClick = (carId: number) => {
    navigate(`/car/${carId}`);
  };

  const toggleBrand = (brand: string) => {
    setExpandedBrand(expandedBrand === brand ? null : brand);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Brand
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover cars by brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => {
            const brandCars = getBrandCars(brand);
            const isExpanded = expandedBrand === brand;
            const logoKey = brand === "Mercedes-Benz" ? "Mercedes" : brand;

            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition"
                  onClick={() => toggleBrand(brand)}
                >
                  <CardContent className="p-0">

                    {/* Brand Header */}
                    <div className="relative h-64 bg-gray-100">
                      <img
                        src={brandImages[logoKey]}
                        alt={`${brand} logo`}
                        className="w-full h-full object-contain p-8"
                      />

                      <div className="absolute bottom-4 left-6 right-6">
                        <h3 className="text-2xl font-bold">{brand}</h3>

                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{brandCars.length} Models</span>

                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Models */}
                    {isExpanded && (
                      <div className="p-4 border-t">
                        {brandCars.map((car) => (
                          <div
                            key={car.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCarClick(car.id);
                            }}
                            className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"
                          >
                            <img
                              src={car.image}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <span>{car.name}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}