import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, Fuel, Gauge, Settings, IndianRupee } from "lucide-react";
import { useCompare } from "@/context/CompareContext";
import { useCars } from "@/hooks/useCars";
import DetailedCompareSection from "@/components/DetailedCompareSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ComparePage() {
  const { compareList, clearCompare, replaceCompareCar } = useCompare();
  const { data: cars, isLoading } = useCars();
  const navigate = useNavigate();

  // ⏳ Loading
  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // 🔥 Get selected cars
  const getModelKey = (car: any) => {
    const brand = String(car?.brand || "").trim().toLowerCase();
    const model = String(car?.model || car?.name || "").trim().toLowerCase();
    return `${brand}::${model}`;
  };

  const selectedCars =
    compareList
      .map((id) => cars?.find((car) => String(car.id) === String(id)))
      .filter(Boolean) ?? [];

  const getVariantOptions = (car: any) => {
    if (!cars || !car) return [];
    const modelKey = getModelKey(car);
    return cars.filter((item) => getModelKey(item) === modelKey);
  };

  const handleVariantChange = (currentCarId: string, nextCarId: string) => {
    replaceCompareCar(currentCarId, nextCarId);
  };

  if (!selectedCars || selectedCars.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Cars to Compare</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Catalog
          </Button>
        </div>
      </div>
    );
  }

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case 'BMW': return 'text-bmw bg-bmw/10 border-bmw/20';
      case 'Mercedes-Benz': return 'text-mercedes bg-mercedes/10 border-mercedes/20';
      case 'Audi': return 'text-audi bg-audi/10 border-audi/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Car Comparison</h1>
            <p className="text-muted-foreground">
              Comparing {selectedCars.length} car{selectedCars.length > 1 ? 's' : ''}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={clearCompare}
            className="text-destructive border-destructive"
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="shadow-card border-0 bg-gradient-card">
              <CardHeader>
                <Badge className={`${getBrandColor(car.brand)} border`}>
                  {car.brand}
                </Badge>
                <CardTitle>{car.model}</CardTitle>
                <p className="text-sm text-muted-foreground">{car.variant}</p>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Choose Variant</p>
                  <Select
                    value={String(car.id)}
                    onValueChange={(value) => handleVariantChange(String(car.id), value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                      {getVariantOptions(car).map((variantCar) => (
                        <SelectItem key={variantCar.id} value={String(variantCar.id)}>
                          {variantCar.variant || `Variant ${variantCar.id}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>{car.engine}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Fuel className="w-4 h-4" />
                  <span>{car.fuel_type}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Gauge className="w-4 h-4" />
                  <span>{car.mileage}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <IndianRupee className="w-4 h-4" />
                  <span className="font-bold text-primary">{car.price}</span>
                </div>

                <div className="pt-2 border-t text-sm text-muted-foreground">
                  On-road (Mumbai): {car.on_road_price_mumbai}
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <DetailedCompareSection
          selectedCars={selectedCars}
          getVariantOptions={getVariantOptions}
          onVariantChange={handleVariantChange}
        />
      </div>

      <SiteFooter />
    </div>
  );
}