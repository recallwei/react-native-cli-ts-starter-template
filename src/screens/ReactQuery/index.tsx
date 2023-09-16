import { Text, ScrollView } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { TestAPI } from '@/api'
import { TextStyles } from '@/styles'

export default function ReactQueryScreen(): React.JSX.Element {
  const { data, isFetching } = useQuery({
    queryKey: ['test-list'],
    queryFn: () => TestAPI.getAll(),
    staleTime: Infinity
  })

  return (
    <ScrollView>
      {isFetching ? (
        <Text style={TextStyles.base}>Loading...</Text>
      ) : (
        <Text style={TextStyles.base}>{JSON.stringify(data)}</Text>
      )}
    </ScrollView>
  )
}
