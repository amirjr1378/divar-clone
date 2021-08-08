import { useEffect, useState } from 'react'

import ApiService from '@/apiService'
import type { ICity } from '@/types'

export const useCities = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [allCities, setAllCities] = useState<ICity[]>([])
  const [cities, setCities] = useState<ICity[]>([])

  function searchWithCityName(cityName: string) {
    if (allCities?.length)
      setCities(allCities.filter((city) => city.name.includes(cityName)))
  }

  useEffect(() => {
    ApiService.getAllCities()
      .then((data) => {
        setAllCities(data as ICity[])
        setCities(data as ICity[])
      })
      .finally(() => setLoading(false))
  }, [])

  return [cities, searchWithCityName, loading] as const
}
