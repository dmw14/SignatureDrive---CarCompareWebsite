import React from 'react';
import { useCompare } from '@/context/CompareContext';
import { Button } from '@/components/ui/button';

function highlightDifference<T>(vals: T[]): { value: T; highlight: boolean }[] {
  // Mark values different from others as highlighted
  return vals.map((val, _, arr) => {
    const isDiff = arr.some(v => v !== val);
    return { value: val, highlight: isDiff };
  });
}

const DetailedCompareSection = ({ selectedCars }: { selectedCars: any[] }) => {
  const { removeFromCompare, clearCompare } = useCompare();

  if (!selectedCars || selectedCars.length < 2) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        <p>Please select at least 2 cars to see the detailed comparison table.</p>
      </div>
    );
  }

  // Extract specs to compare for highlight evaluation
  const brands = selectedCars.map(c => c.brand || '-');
  const models = selectedCars.map(c => c.model || '-');
  const variants = selectedCars.map(c => c.variant || '-');
  const prices = selectedCars.map(c => c.price || '-');
  const onRoadPrices = selectedCars.map(c => c.on_road_price_mumbai || '-');
  const engines = selectedCars.map(c => c.engine || '-');
  const fuels = selectedCars.map(c => c.fuel_type || '-');
  const transmissions = selectedCars.map(c => c.transmission || '-');
  const power = selectedCars.map(c => c.power || '-');
  const torque = selectedCars.map(c => c.torque || '-');
  const seating = selectedCars.map(c => c.seating_capacity || '-');
  const mileage = selectedCars.map(c => c.mileage || '-');

  // Use helper to mark differences for each spec
  const brandDiff = highlightDifference(brands);
  const modelDiff = highlightDifference(models);
  const variantDiff = highlightDifference(variants);
  const priceDiff = highlightDifference(prices);
  const onRoadPriceDiff = highlightDifference(onRoadPrices);
  const engineDiff = highlightDifference(engines);
  const fuelDiff = highlightDifference(fuels);
  const transmissionDiff = highlightDifference(transmissions);
  const powerDiff = highlightDifference(power);
  const torqueDiff = highlightDifference(torque);
  const seatingDiff = highlightDifference(seating);
  const mileageDiff = highlightDifference(mileage);

  const specs = [
    { label: 'Brand', values: brandDiff },
    { label: 'Model', values: modelDiff },
    { label: 'Variant', values: variantDiff },
    { label: 'Ex-showroom Price', values: priceDiff },
    { label: 'On-Road Price (Mumbai)', values: onRoadPriceDiff },
    { label: 'Engine', values: engineDiff },
    { label: 'Fuel Type', values: fuelDiff },
    { label: 'Transmission', values: transmissionDiff },
    { label: 'Power', values: powerDiff },
    { label: 'Torque', values: torqueDiff },
    { label: 'Seating Capacity', values: seatingDiff },
    { label: 'Mileage', values: mileageDiff },
  ];

  return (
    <section className="compare-section p-4 bg-card rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Detailed Comparison</h2>

      <div className="flex justify-end mb-4 space-x-4">
        <Button variant="destructive" onClick={clearCompare}>Clear All</Button>
      </div>

      <div className="overflow-auto border rounded-md">
        <table className="w-full table-fixed border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="border-b border-r border-border p-3 bg-muted/50 text-left w-1/4">Specification</th>
              {selectedCars.map((car) => (
                <th key={car.id} className="border-b border-r last:border-r-0 border-border p-3 bg-muted/50 text-center flex-1">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-semibold">{car.brand} {car.model}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCompare(car.id)}
                      aria-label={`Remove ${car.brand} ${car.model} from comparison`}
                    >
                      Remove
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.map(({ label, values }) => (
              <tr key={label} className="border-b last:border-b-0 border-border transition-colors hover:bg-muted/50">
                <td className="border-r border-border p-3 font-medium bg-muted/10">{label}</td>
                {values.map(({ value, highlight }, idx) => (
                  <td
                    key={idx}
                    className={`border-r last:border-r-0 border-border p-3 text-center ${
                      highlight ? 'text-primary font-semibold' : 'text-muted-foreground'
                    }`}
                  >
                    {value as string}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DetailedCompareSection;
