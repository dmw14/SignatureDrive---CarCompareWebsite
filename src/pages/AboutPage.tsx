import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify the luxury car buying process by providing comprehensive, unbiased comparisons that help you make the perfect choice."
    },
    {
      icon: Users,
      title: "For Car Enthusiasts",
      description: "Built by automotive enthusiasts for automotive enthusiasts. We understand the passion for performance, luxury, and innovation."
    },
    {
      icon: Award,
      title: "Premium Brands",
      description: "Focusing on the world's most prestigious automotive brands: BMW, Mercedes-Benz, and Audi. Quality over quantity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="hover-luxury"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-2xl font-bold">About Luxury Car Compare</h1>
              <p className="text-muted-foreground">
                Your trusted guide to luxury automotive excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl luxury-heading mb-6">
            Redefining Luxury Car
            <span className="block text-primary">Comparison</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you dream of pure sport, ultimate luxury, or a mixture of both – 
            our platform provides the insights you need to make the perfect choice among 
            BMW, Mercedes-Benz, and Audi.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full text-center hover-luxury shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="shadow-luxury border-0 bg-gradient-luxury text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">Our Story</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Born from a passion for automotive excellence, Luxury Car Compare was created 
                  to bridge the gap between desire and decision. We understand that choosing 
                  between BMW's sporty precision, Mercedes-Benz's luxurious comfort, and 
                  Audi's technological innovation is more than just a purchase – it's a 
                  lifestyle choice.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  Our platform combines detailed specifications, real-world insights, and 
                  intuitive comparison tools to help you discover not just what you want, 
                  but what you truly need in your next luxury vehicle.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Brand Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-xl font-semibold text-bmw mb-3">BMW</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "The Ultimate Driving Machine" - Pure performance and sporty 
                    driving dynamics for those who prioritize the connection between 
                    driver and road.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-mercedes mb-3">Mercedes-Benz</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "The Best or Nothing" - Uncompromising luxury, comfort, and 
                    refinement for those who demand the finest in automotive elegance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-audi mb-3">Audi</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "Vorsprung durch Technik" - Advanced technology and progressive 
                    design balanced with performance for the modern luxury driver.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-glow hover-luxury"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
}