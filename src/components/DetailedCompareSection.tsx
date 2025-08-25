import React from 'react';
import { useCompare } from '@/context/CompareContext';
import { CarSpec } from '@/data/cars';
import { Button } from '@/components/ui/button';

function highlightDifference<T>(vals: T[]): (T | { value: T; highlight: boolean })[] {
  // Mark values different from others as highlighted
  return vals.map((val, _, arr) => {
    const isDiff = arr.some(v => v !== val);
    return { value: val, highlight: isDiff };
  });
}

const DetailedCompareSection = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (compareList.length < 2) {
    return <p>Please select at least 2 cars to compare.</p>;
  }

  // Extract specs to compare for highlight evaluation
  const brands = compareList.map(c => c.brand);
  const models = compareList.map(c => c.model);
  const prices = compareList.map(c => c.data.on_road_price_mumbai);
  const engines = compareList.map(c => c.data.variants[0]?.engine ?? '-');
  const fuels = compareList.map(c => c.data.variants?.fuel ?? '-');
  const transmissions = compareList.map(c => c.data.variants?.transmission ?? '-');
  const power = compareList.map(c => c.data.variants?.power ?? '-');
  const torque = compareList.map(c => c.data.variants?.torque ?? '-');
  const seating = compareList.map(c => c.data.seating ?? '-');
  const mileage = compareList.map(c => c.data.mileage ?? '-');

  // Use helper to mark differences for each spec
  const brandDiff = highlightDifference(brands);
  const modelDiff = highlightDifference(models);
  const priceDiff = highlightDifference(prices);
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
    { label: 'Price (Mumbai)', values: priceDiff },
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
      <h2 className="text-2xl font-bold mb-6">Car Comparison Details</h2>

      <div className="flex justify-end mb-4 space-x-4">
        <Button variant="destructive" onClick={clearCompare}>Clear All</Button>
      </div>

      <div className="overflow-auto">
        <table className="w-full table-fixed border-collapse border border-border">
          <thead>
            <tr>
              <th className="border border-border p-3 bg-muted text-left">Specification</th>
              {compareList.map((car) => (
                <th key={car.id} className="border border-border p-3 bg-muted text-center">
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
              <tr key={label} className="border border-border">
                <td className="border border-border p-3 font-medium bg-muted">{label}</td>
                {values.map(({ value, highlight }, idx) => (
                  <td
                    key={idx}
                    className={`border border-border p-3 text-center ${
                      highlight ? 'bg-destructive/20 font-semibold' : ''
                    }`}
                  >
                    {value}
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
