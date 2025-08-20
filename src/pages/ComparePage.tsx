import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import { useCompare } from "@/context/CompareContext";
import { brandRecommendations } from "@/data/cars";

export default function ComparePage() {
  const { compareList, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Cars to Compare</h1>
          <p className="text-muted-foreground mb-6">
            Please select at least 2 cars from the catalog to compare.
          </p>
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
      case 'Mercedes': return 'text-mercedes bg-mercedes/10 border-mercedes/20';
      case 'Audi': return 'text-audi bg-audi/10 border-audi/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="hover-luxury"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Catalog
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Car Comparison</h1>
                <p className="text-muted-foreground">
                  Comparing {compareList.length} car{compareList.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={clearCompare}
              className="text-destructive border-destructive hover:bg-destructive hover:text-white"
            >
              Clear Comparison
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Specifications Tab */}
          <TabsContent value="specs">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {compareList.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full shadow-card border-0 bg-gradient-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`${getBrandColor(car.brand)} border`}>
                            {car.brand}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm ml-1">4.8</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{car.model}</CardTitle>
                        <p className="text-muted-foreground">{car.tagline}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img
                          src={car.image}
                          alt={car.model}
                          className="w-full h-full object-cover"
                        />
                      </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Engine:</span>
                            <span className="text-sm font-medium">{car.data.variants[0]?.engine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Fuel:</span>
                            <span className="text-sm font-medium">{car.data.variants[0]?.fuel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Transmission:</span>
                            <span className="text-sm font-medium">{car.data.variants[0]?.transmission}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Mileage:</span>
                            <span className="text-sm font-medium">{car.data.variants[0]?.mileage}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Variants:</span>
                            <span className="text-sm font-medium">{car.data.variants.length} Available</span>
                          </div>
                          <div className="pt-2 border-t">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Mumbai Price:</span>
                              <span className="text-lg font-bold text-primary">{car.data.on_road_price_mumbai}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {compareList.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="shadow-card border-0 bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{car.brand} {car.model}</span>
                        <Badge className={`${getBrandColor(car.brand)} border`}>
                          {car.brand}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src={car.image}
                            alt={car.model}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Model History</h4>
                            <p className="text-muted-foreground leading-relaxed">{car.history}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Our Recommendation</h4>
                            <p className="text-muted-foreground leading-relaxed">{car.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Brand Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="shadow-luxury border-0 bg-gradient-luxury text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Brand Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(brandRecommendations).map(([brand, recommendation]) => (
                  <div key={brand} className="text-center">
                    <h4 className="text-xl font-semibold mb-2">{brand}</h4>
                    <p className="text-white/90 leading-relaxed">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}