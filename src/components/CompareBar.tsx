import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ArrowRight } from "lucide-react";
import { useCompare } from "@/context/CompareContext";
import { useNavigate } from "react-router-dom";

export function CompareBar() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareList.length === 0) return null;

  const handleCompareNow = () => {
    navigate('/compare');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="compare-bar"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-white font-semibold">
              Compare Cars ({compareList.length}/3)
            </h3>
            
            <div className="flex items-center space-x-2">
              {compareList.map((item) => (
                <motion.div
                  key={item.car.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="relative"
                >
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 pr-7">
                    {item.car.brand} {item.car.model}
                  </Badge>
                  <button
                    onClick={() => removeFromCompare(item.car.id)}
                    className="absolute -top-1 -right-1 bg-destructive text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-destructive/80 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={clearCompare}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Clear All
            </Button>
            
            <Button
              onClick={handleCompareNow}
              size="sm"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              disabled={compareList.length < 2}
            >
              Compare Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}