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

  return Object.values(grouped)
}