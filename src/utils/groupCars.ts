export const groupCarsByModel = (cars: any[]) => {
  const grouped: any = {}

  cars.forEach((car) => {
    const key = `${car.brand}-${car.model}`

    if (!grouped[key]) {
      grouped[key] = {
        brand: car.brand,
        model: car.model,
        variants: [],
      }
    }

    grouped[key].variants.push(car)
  })

  // Sort by brand first, then by model within each brand
  return Object.values(grouped).sort((a, b) => {
    if (a.brand !== b.brand) {
      return a.brand.localeCompare(b.brand)
    }
    return a.model.localeCompare(b.model)
  })
}