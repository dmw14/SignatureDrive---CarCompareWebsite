import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { BrandCards } from "@/components/BrandCards";
import { CarCatalog } from "@/components/CarCatalog";
import { CompareBar } from "@/components/CompareBar";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase"; // ✅ IMPORT

const Index = () => {
  const catalogRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [cars, setCars] = useState([]); // ✅ STATE

  // ✅ FETCH CARS FROM SUPABASE
  useEffect(() => {
  const fetchCars = async () => {
    const { data, error } = await supabase.from("cars").select("*");

    if (error) {
      console.error("Error fetching cars:", error);
    } else {
      const brandOrder = ["BMW", "Mercedes-Benz", "Audi"];

      const sortedCars = (data || [])
        .sort((a, b) => a.model.localeCompare(b.model))
        .sort((a, b) => brandOrder.indexOf(a.brand) - brandOrder.indexOf(b.brand));

      setCars(sortedCars);
    }
  };

  fetchCars();
}, []);

  const handleStartComparing = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SD</span>
              </div>
              <span className="text-xl font-bold">SignatureDrive</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={handleStartComparing}
                className="hover:text-primary"
              >
                Catalog
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="hover:text-primary"
              >
                About
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/about')}
              className="md:hidden"
            >
              <Info className="w-4 h-4" />
            </Button>

          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <HeroSection onStartComparing={handleStartComparing} />

      {/* ✅ PASS cars HERE */}
      <BrandCards cars={cars} />

      {/* Car Catalog */}
      <div ref={catalogRef}>
        <CarCatalog />
      </div>

      {/* Compare */}
      <CompareBar />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
};

export default Index;