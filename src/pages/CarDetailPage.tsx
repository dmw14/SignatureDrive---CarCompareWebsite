import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCars } from "@/hooks/useCars";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Fuel, Gauge, IndianRupee, Settings } from "lucide-react";

const getFirstAvailable = (car: any, keys: string[], fallback = "-") => {
  for (const key of keys) {
    const value = car?.[key];
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return String(value);
    }
  }
  return fallback;
};

export default function CarDetailPage() {
  const { carId } = useParams();
  const { data: cars, isLoading } = useCars();
  const navigate = useNavigate();

  const car = useMemo(
    () => cars?.find((item: any) => String(item.id) === String(carId)) ?? null,
    [cars, carId]
  );

  const image =
    car?.image ||
    car?.image_url ||
    car?.photo_url ||
    car?.img ||
    "https://via.placeholder.com/1000x620?text=Image+Unavailable";

  const modelName = getFirstAvailable(car, ["name", "model"], "Unknown Model");
  const variant = getFirstAvailable(car, ["variant"], "Standard");
  const engine = getFirstAvailable(car, ["engine", "engine_type"]);
  const fuel = getFirstAvailable(car, ["fuel_type", "fuel"]);
  const transmission = getFirstAvailable(car, ["transmission"]);
  const power = getFirstAvailable(car, ["power", "max_power"]);
  const torque = getFirstAvailable(car, ["torque", "max_torque"]);
  const mileage = getFirstAvailable(car, ["mileage", "claimed_mileage"]);
  const seating = getFirstAvailable(car, ["seating_capacity", "seating"]);
  const bodyType = getFirstAvailable(car, ["body_type", "type"]);
  const drivetrain = getFirstAvailable(car, ["drivetrain", "drive_type"]);
  const price = getFirstAvailable(car, ["price", "ex_showroom_price"]);
  const onRoadPrice = getFirstAvailable(car, ["on_road_price_mumbai", "on_road_price"]);
  const description = getFirstAvailable(
    car,
    ["description", "overview"],
    `${car?.brand || "This"} ${modelName} (${variant}) offers ${engine} performance with ${fuel} efficiency and premium comfort features.`
  );

  if (isLoading) return <div className="text-center py-20">Loading car details...</div>;

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Button onClick={() => navigate("/")}>Back to Catalog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              {car.brand} {modelName}
            </h1>
            <p className="text-muted-foreground">{variant}</p>

            <img
              src={image}
              alt={`${car.brand} ${modelName}`}
              className="w-full h-[360px] object-cover rounded-xl shadow-md"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/1000x620?text=Image+Unavailable";
              }}
            />

            <p className="text-sm leading-6 text-muted-foreground">{description}</p>
          </div>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle>Key Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2"><Settings className="w-4 h-4" /> Engine</span>
                <span className="font-medium">{engine}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2"><Fuel className="w-4 h-4" /> Fuel Type</span>
                <span className="font-medium">{fuel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Transmission</span>
                <span className="font-medium">{transmission}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Power</span>
                <span className="font-medium">{power}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Torque</span>
                <span className="font-medium">{torque}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2"><Gauge className="w-4 h-4" /> Mileage</span>
                <span className="font-medium">{mileage}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Seating Capacity</span>
                <span className="font-medium">{seating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Body Type</span>
                <span className="font-medium">{bodyType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Drivetrain</span>
                <span className="font-medium">{drivetrain}</span>
              </div>
              <div className="pt-3 border-t flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2"><IndianRupee className="w-4 h-4" /> Ex-showroom</span>
                <span className="font-semibold text-primary">{price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">On-road (Mumbai)</span>
                <span className="font-semibold">{onRoadPrice}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}