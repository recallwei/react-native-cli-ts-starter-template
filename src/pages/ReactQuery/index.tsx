import { Text, ScrollView } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { TestAPI } from '@/api'

export default function ReactQueryScreen(): React.JSX.Element {
  const { data, isFetching } = useQuery({
    queryKey: ['test-list'],
    queryFn: () => TestAPI.getAll(),
    staleTime: Infinity
  })

  return (
    <ScrollView>
      {isFetching ? (
        <Text>Loading...</Text>
      ) : (
        <Text>{JSON.stringify(data)}</Text>
      )}
    </ScrollView>
  )
}
