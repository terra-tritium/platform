import { type UseQueryResult, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'

type Server = {
  id: number
  name: string
  slug: string
  type: string
  default: boolean
}

const serverKeys = {
  getServer: ['servers'] as const,
}

const fetchServers = async () => {
  return (await api.get('/server/list').then((res) => res.data)) as Promise<
    Server[]
  >
}

export const useGetServers = (): UseQueryResult<
  Server[] | undefined,
  Error
> => {
  return useQuery({
    queryKey: serverKeys.getServer,
    queryFn: fetchServers,
  })
}
