import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

const fetchCars = async () => {
  const { data, error } = await supabase.from('cars').select('*')

  if (error) throw new Error(error.message)
  return data
}

export const useCars = () => {
  return useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
  })
}