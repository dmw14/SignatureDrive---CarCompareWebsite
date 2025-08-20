import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Fuel, Gauge, Settings, IndianRupee } from "lucide-react";
import { cars } from "@/data/cars";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CarDetailPage() {
  const { carId } = useParams();
  const navigate = useNavigate();
  
  const car = cars.find(c => c.id === carId);
  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold luxury-heading">Luxury Compare</span>
            </Link>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">{car.brand}</Badge>
                <h1 className="text-4xl md:text-5xl luxury-heading mb-4">{car.model}</h1>
                <p className="text-xl text-muted-foreground mb-6">{car.tagline}</p>
                <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                  <IndianRupee className="w-6 h-6" />
                  {car.data.on_road_price_mumbai}
                  <span className="text-sm text-muted-foreground font-normal">On-road Price Mumbai</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Variants Section */}
          <div className="mb-12">
            <h2 className="text-3xl luxury-heading mb-8">Available Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {car.data.variants.map((variant, index) => (
                <motion.div
                  key={variant.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover-luxury">
                    <CardHeader>
                      <CardTitle className="text-xl">{variant.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4 text-muted-foreground" />
                          <span>{variant.engine}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="w-4 h-4 text-muted-foreground" />
                          <span>{variant.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-muted-foreground" />
                          <span>{variant.mileage}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium">{variant.transmission}</span>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="text-2xl font-bold text-primary">{variant.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* History & Recommendation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Heritage & History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{car.history}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Our Recommendation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{car.recommendation}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}