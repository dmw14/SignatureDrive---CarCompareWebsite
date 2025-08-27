import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Star, Fuel, Gauge, Settings, IndianRupee, Car, Zap } from "lucide-react";
import { useCompare } from "@/context/CompareContext";
import { brandRecommendations, CarVariant } from "@/data/cars";

export default function ComparePage() {
  const { compareList, clearCompare, updateVariant } = useCompare();
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
      case 'Mercedes-Benz': return 'text-mercedes bg-mercedes/10 border-mercedes/20';
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
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Specs</TabsTrigger>
            <TabsTrigger value="variants">All Variants</TabsTrigger>
            <TabsTrigger value="history">History & Analysis</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Variant Selection Section */}
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Select Variants to Compare</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {compareList.map((item, index) => (
                      <div key={item.car.id} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge className={`${getBrandColor(item.car.brand)} border text-xs`}>
                            {item.car.brand}
                          </Badge>
                          <span className="font-semibold">{item.car.model}</span>
                        </div>
                        <Select
                          value={item.selectedVariantIndex.toString()}
                          onValueChange={(value) => updateVariant(item.car.id, parseInt(value))}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {item.car.data.variants.map((variant, variantIndex) => (
                              <SelectItem key={variantIndex} value={variantIndex.toString()}>
                                <div className="flex justify-between items-center w-full">
                                  <span>{variant.name}</span>
                                  <span className="text-xs text-muted-foreground ml-2">{variant.price}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Comparison Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {compareList.map((item, index) => {
                  const selectedVariant = item.car.data.variants[item.selectedVariantIndex];
                  return (
                    <motion.div
                      key={item.car.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full shadow-card border-0 bg-gradient-card">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={`${getBrandColor(item.car.brand)} border`}>
                              {item.car.brand}
                            </Badge>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm ml-1">4.8</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl">{item.car.model}</CardTitle>
                          <p className="text-muted-foreground">{item.car.tagline}</p>
                          <Badge variant="outline" className="mt-2 w-fit">
                            {selectedVariant.name}
                          </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="aspect-video rounded-lg overflow-hidden mb-4">
                            <img
                              src={item.car.image}
                              alt={item.car.model}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center space-x-2">
                                <Car className="w-4 h-4 text-muted-foreground" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Engine</p>
                                  <p className="text-sm font-medium">{selectedVariant.engine}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Fuel className="w-4 h-4 text-muted-foreground" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Fuel</p>
                                  <p className="text-sm font-medium">{selectedVariant.fuel}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Settings className="w-4 h-4 text-muted-foreground" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Transmission</p>
                                  <p className="text-sm font-medium">{selectedVariant.transmission}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Gauge className="w-4 h-4 text-muted-foreground" />
                                <div>
                                  <p className="text-xs text-muted-foreground">Mileage</p>
                                  <p className="text-sm font-medium">{selectedVariant.mileage}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="pt-3 border-t">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Selected Variant:</span>
                                <span className="text-lg font-bold text-primary">{selectedVariant.price}</span>
                              </div>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-muted-foreground">Mumbai Price:</span>
                                <span className="text-sm font-medium">{item.car.data.on_road_price_mumbai}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>

          {/* Detailed Specifications Tab */}
          <TabsContent value="detailed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Selected Variants Comparison</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[150px]">Specification</TableHead>
                          {compareList.map((item) => (
                            <TableHead key={item.car.id} className="text-center min-w-[180px]">
                              <div className="space-y-1">
                                <Badge className={`${getBrandColor(item.car.brand)} border text-xs`}>
                                  {item.car.brand}
                                </Badge>
                                <div className="font-semibold">{item.car.model}</div>
                                <div className="text-xs text-muted-foreground">
                                  {item.car.data.variants[item.selectedVariantIndex].name}
                                </div>
                              </div>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Engine</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center">
                              {item.car.data.variants[item.selectedVariantIndex].engine}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fuel Type</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center">
                              {item.car.data.variants[item.selectedVariantIndex].fuel}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Transmission</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center">
                              {item.car.data.variants[item.selectedVariantIndex].transmission}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mileage</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center">
                              {item.car.data.variants[item.selectedVariantIndex].mileage}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Variant Price</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center font-semibold text-primary">
                              {item.car.data.variants[item.selectedVariantIndex].price}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">On-Road Mumbai</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center font-bold text-lg">
                              {item.car.data.on_road_price_mumbai}
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Total Variants</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center">
                              {item.car.data.variants.length} options
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Value Proposition</TableCell>
                          {compareList.map((item) => (
                            <TableCell key={item.car.id} className="text-center text-sm">
                              {item.car.tagline}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* All Variants Tab */}
          <TabsContent value="variants">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {compareList.map((item, carIndex) => (
                <motion.div
                  key={item.car.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: carIndex * 0.1 }}
                >
                  <Card className="shadow-card border-0 bg-gradient-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{item.car.brand} {item.car.model}</CardTitle>
                        <Badge className={`${getBrandColor(item.car.brand)} border`}>
                          {item.car.data.variants.length} Variants
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {item.car.data.variants.map((variant: CarVariant, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`p-4 rounded-lg border space-y-3 ${
                              index === item.selectedVariantIndex 
                                ? 'bg-primary/10 border-primary/30' 
                                : 'bg-card/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{variant.name}</h4>
                              <div className="flex items-center space-x-2">
                                {index === item.selectedVariantIndex && (
                                  <Badge variant="default" className="text-xs">
                                    Selected
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {variant.fuel}
                                </Badge>
                              </div>
                            </div>
                            
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Engine:</span>
                                <span className="font-medium">{variant.engine}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Transmission:</span>
                                <span className="font-medium">{variant.transmission}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Mileage:</span>
                                <span className="font-medium">{variant.mileage}</span>
                              </div>
                            </div>
                            
                            <div className="pt-2 border-t">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Price:</span>
                                <span className="font-bold text-primary">{variant.price}</span>
                              </div>
                            </div>

                            {index !== item.selectedVariantIndex && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full mt-2"
                                onClick={() => updateVariant(item.car.id, index)}
                              >
                                Select for Comparison
                              </Button>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* History & Analysis Tab */}
          <TabsContent value="history">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {compareList.map((item, index) => (
                <motion.div
                  key={item.car.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="shadow-card border-0 bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{item.car.brand} {item.car.model}</span>
                        <Badge className={`${getBrandColor(item.car.brand)} border`}>
                          {item.car.brand}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src={item.car.image}
                            alt={item.car.model}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Zap className="w-4 h-4" />
                              <span>Model Heritage</span>
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{item.car.history}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <Star className="w-4 h-4" />
                              <span>Expert Recommendation</span>
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{item.car.recommendation}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center space-x-2">
                              <IndianRupee className="w-4 h-4" />
                              <span>Value Analysis</span>
                            </h4>
                            <div className="text-sm space-y-1">
                              <p className="text-muted-foreground">
                                Price Range: {item.car.data.variants.sort((a, b) => 
                                  parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Lakh', '').replace('Cr', '00')) - 
                                  parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Lakh', '').replace('Cr', '00'))
                                )[0]?.price} - {item.car.data.variants.sort((a, b) => 
                                  parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Lakh', '').replace('Cr', '00')) - 
                                  parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Lakh', '').replace('Cr', '00'))
                                )[0]?.price}
                              </p>
                              <p className="text-muted-foreground">
                                Best Efficiency: {Math.max(...item.car.data.variants.map(v => parseFloat(v.mileage.split(' ')[0])))} kmpl
                              </p>
                              <p className="text-muted-foreground">
                                Target Audience: {item.car.tagline}
                              </p>
                            </div>
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