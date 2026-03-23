import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Car {
  id: number;
  name: string;
  brand: string;
  image: string;
}

interface Variant {
  id: number;
  car_id: number;
  name: string;
  price: number;
  mileage: string;
  engine: string;
}

export default function CarDetailsPage() {
  const { id } = useParams();

  const [car, setCar] = useState<Car | null>(null);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarData = async () => {
      setLoading(true);

      // Fetch car
      const { data: carData, error: carError } = await supabase
        .from("cars")
        .select("*")
        .eq("id", id)
        .single();

      if (carError) {
        console.error(carError);
        setLoading(false);
        return;
      }

      // Fetch variants
      const { data: variantData, error: variantError } = await supabase
        .from("variants")
        .select("*")
        .eq("car_id", id);

      if (variantError) {
        console.error(variantError);
      }

      setCar(carData);
      setVariants(variantData || []);
      setLoading(false);
    };

    fetchCarData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <div className="p-6">
      {/* Car Info */}
      <h1 className="text-3xl font-bold">
        {car.brand} {car.name}
      </h1>

<p>{car.image}</p>   {/* 👈 ADD THIS */}

      <img
  src={car.image}
  alt={car.name}
  className="w-full max-w-md h-64 object-cover rounded-xl shadow-md"
  loading="lazy"
  onError={(e) => {
    console.log("Image failed:", car.image);
    e.currentTarget.src =
      "https://via.placeholder.com/400x250?text=Image+Error";
  }}
/>

      {/* Variants */}
      <h2 className="text-2xl mt-8 mb-4">Variants</h2>

      <div className="grid gap-4">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className="p-4 border rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-semibold">{variant.name}</h3>
            <p>💰 Price: ₹{variant.price}</p>
            <p>⛽ Mileage: {variant.mileage}</p>
            <p>⚙️ Engine: {variant.engine}</p>
          </div>
        ))}
      </div>
    </div>
  );
}