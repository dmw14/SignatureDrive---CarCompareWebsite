import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCars } from "@/hooks/useCars";

export default function CarDetailsPage() {
  const { carId } = useParams();
  const { data: cars, isLoading } = useCars();

  const car = useMemo(
    () => cars?.find((item: any) => String(item.id) === String(carId)) ?? null,
    [cars, carId]
  );

  const image = car?.image || car?.image_url || car?.photo_url || car?.img;
  const modelName = car?.name || car?.model || "Unknown Model";

  if (isLoading) return <div>Loading...</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <div className="p-6">
      {/* Car Info */}
      <h1 className="text-3xl font-bold">
        {car.brand} {modelName}
      </h1>

      <img
        src={image || "https://via.placeholder.com/800x500?text=Image+Unavailable"}
        alt={modelName}
        className="w-full max-w-md h-64 object-cover rounded-xl shadow-md"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/800x500?text=Image+Unavailable";
        }}
      />

      <div className="mt-8 grid gap-3 max-w-md text-sm">
        <p><strong>Engine:</strong> {car.engine || "-"}</p>
        <p><strong>Fuel:</strong> {car.fuel_type || "-"}</p>
        <p><strong>Mileage:</strong> {car.mileage || "-"}</p>
        <p><strong>Price:</strong> {car.price || "-"}</p>
        <p><strong>On-road (Mumbai):</strong> {car.on_road_price_mumbai || "-"}</p>
      </div>
    </div>
  );
}