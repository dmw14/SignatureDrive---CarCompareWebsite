import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Plus } from "lucide-react";
import { useCars } from '@/hooks/useCars';
import { groupCarsByModel } from '@/utils/groupCars';
import { useCompare } from "@/context/CompareContext";

export function CarCatalog() {
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useCompare();
  const navigate = useNavigate();

  // 🔥 FETCH DATA
  const { data: cars, isLoading } = useCars();

  // ⏳ Loading state
  if (isLoading) {
    return <div className="text-center py-20">Loading cars...</div>;
  }

  // 🔥 GROUP DATA (VERY IMPORTANT)
  const groupedCars = groupCarsByModel(cars || []);

  const handleCompareClick = (e: React.MouseEvent, car: any) => {
    e.stopPropagation();

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
      case 'Mercedes-Benz': return 'text-mercedes bg-mercedes/10 border-mercedes/20';
      case 'Audi': return 'text-audi bg-audi/10 border-audi/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  const getCarImage = (car: any) => {
    return car.image || car.image_url || car.photo_url || car.img || null;
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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
            Explore our premium selection of luxury vehicles.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedCars.map((group: any, index: number) => {
            
            // Take first variant for display
            const firstVariant = group.variants[0];
            const inCompare = isInCompare(firstVariant.id);
            const canAdd = compareList.length < 3 || inCompare;

            return (
              <motion.div
                key={group.model}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full hover-luxury bg-gradient-card border-0 shadow-card overflow-hidden cursor-pointer"
                  onClick={() => handleCardClick(firstVariant.id)}
                >
                  <CardContent className="p-0">

                    <div className="relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                      {getCarImage(firstVariant) ? (
                        <img
                          src={getCarImage(firstVariant)}
                          alt={`${group.brand} ${group.model}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/800x500?text=Image+Unavailable";
                          }}
                        />
                      ) : (
                        <span className="text-muted-foreground">Image unavailable</span>
                      )
                      }

                      <div className="absolute top-4 left-4">
                        <Badge className={`${getBrandColor(group.brand)} border`}>
                          {group.brand}
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

                    {/* Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {group.brand} {group.model}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Engine:</span>
                          <span className="text-sm">{firstVariant.engine}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Fuel:</span>
                          <span className="text-sm">{firstVariant.fuel_type}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Price:</span>
                          <span className="text-sm font-bold text-primary">
                            {firstVariant.on_road_price_mumbai}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      onClick={(e) => handleCompareClick(e, firstVariant)}
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
                          Remove
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-2" />
                          Add to Compare
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