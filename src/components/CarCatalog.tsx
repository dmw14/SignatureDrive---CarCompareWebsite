import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Plus } from "lucide-react";
import { cars } from "@/data/cars";
import { useCompare } from "@/context/CompareContext";

export function CarCatalog() {
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useCompare();
  const navigate = useNavigate();

  const handleCompareClick = (e: React.MouseEvent, car: any) => {
    e.stopPropagation(); // Prevent card click navigation
    if (isInCompare(car.id)) {
      removeFromCompare(car.id);
    } else {
      addToCompare(car);
    }
  };

  const handleCardClick = (carId: string) => {
    navigate(`/car/${carId}`);
  };

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case 'BMW': return 'text-bmw bg-bmw/10 border-bmw/20';
      case 'Mercedes': return 'text-mercedes bg-mercedes/10 border-mercedes/20';
      case 'Audi': return 'text-audi bg-audi/10 border-audi/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl luxury-heading mb-4">
            Car Catalog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our premium selection of luxury vehicles. Compare up to 3 cars to find your perfect match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => {
            const inCompare = isInCompare(car.id);
            const canAdd = compareList.length < 3 || inCompare;
            
            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full hover-luxury bg-gradient-card border-0 shadow-card overflow-hidden cursor-pointer"
                  onClick={() => handleCardClick(car.id)}
                >
                  <CardContent className="p-0">
                    {/* Car Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.model}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getBrandColor(car.brand)} border`}>
                          {car.brand}
                        </Badge>
                      </div>
                      {inCompare && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-primary text-white rounded-full p-2">
                            <Check className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Car Details */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-1">{car.brand} {car.model}</h3>
                        <p className="text-muted-foreground">{car.tagline}</p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Engine:</span>
                          <span className="text-sm font-medium">{car.data.variants[0]?.engine}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Fuel:</span>
                          <span className="text-sm font-medium">{car.data.variants[0]?.fuel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Price:</span>
                          <span className="text-sm font-bold text-primary">{car.data.on_road_price_mumbai}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      onClick={(e) => handleCompareClick(e, car)}
                      disabled={!canAdd}
                      className={`w-full ${
                        inCompare 
                          ? 'bg-destructive hover:bg-destructive/90 text-white' 
                          : 'bg-primary hover:bg-primary/90 text-white'
                      }`}
                    >
                      {inCompare ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Remove from Compare
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-2" />
                          {canAdd ? 'Add to Compare' : 'Compare List Full'}
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}