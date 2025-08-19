import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cars, brandLogos } from "@/data/cars";
import bmwLogo from "@/assets/bmw logo.png";
import mercedesLogo from "@/assets/merc logo.png";
import audiLogo from "@/assets/audi logo.jpeg";

const brandImages = {
  BMW: bmwLogo,
  Mercedes: mercedesLogo,
  Audi: audiLogo
};

export function BrandCards() {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  
  const brands = ['BMW', 'Mercedes', 'Audi'] as const;
  
  const getBrandCars = (brand: string) => {
    return cars.filter(car => car.brand === brand);
  };

  const getFeaturedCar = (brand: string) => {
    const brandCars = getBrandCars(brand);
    return brandCars[0]; // First car as featured
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
          <h2 className="text-4xl md:text-5xl luxury-heading mb-4">
            Choose Your Brand
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each brand offers a unique driving philosophy. Discover which one matches your style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => {
            const featuredCar = getFeaturedCar(brand);
            const brandCars = getBrandCars(brand);
            const isExpanded = expandedBrand === brand;

            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden hover-luxury cursor-pointer bg-gradient-card border-0 shadow-card"
                  onClick={() => toggleBrand(brand)}
                >
                  <CardContent className="p-0">
                    {/* Brand Header */}
                    <div className="relative h-64 bg-gradient-luxury">
                      <img
                        src={brandImages[brand]}
                        alt={`${brand} logo`}
                        className="absolute inset-0 w-full h-full object-contain p-8"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{brand}</h3>
                        <div className="flex items-center justify-between text-white/90">
                          <span className="text-sm">
                            {brandCars.length} Models Available
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Featured Car */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-1">Featured: {featuredCar.model}</h4>
                        <p className="text-muted-foreground text-sm">{featuredCar.tagline}</p>
                      </div>
                      
                      <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={featuredCar.image}
                          alt={featuredCar.model}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{featuredCar.highlights.power}</span>
                        <span>{featuredCar.highlights.price}</span>
                      </div>
                    </div>

                    {/* Expanded Models */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-border">
                        <h5 className="font-semibold mb-3">All {brand} Models:</h5>
                        <div className="space-y-2">
                          {brandCars.map(car => (
                            <div key={car.id} className="flex justify-between items-center py-2 px-3 rounded-lg bg-muted/50">
                              <span className="font-medium">{car.model}</span>
                              <span className="text-sm text-muted-foreground">{car.highlights.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
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