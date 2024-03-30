import { type UseQueryResult, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'

type Country = {
  id: number
  name: string
  code: string
  image: string
}

const countryKeys = {
  getCountry: ['countries'] as const,
}

const fetchCountries = async () => {
  return (await api.get('/country/list').then((res) => res.data)) as Promise<
    Country[]
  >
}

export const useGetCountries = (): UseQueryResult<
  Country[] | undefined,
  Error
> => {
  return useQuery({
    queryKey: countryKeys.getCountry,
    queryFn: fetchCountries,
  })
}
