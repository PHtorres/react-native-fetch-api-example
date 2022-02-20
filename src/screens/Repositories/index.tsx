import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { Loading } from '../../components/Loading';
import { RepositoryCard } from '../../components/RepositoryCard';
import { useFetchRepositories } from '../../services/requests/useFetchRepositories';
import { Repository } from '../../types/Repository';
import { Container } from './styles';

export const RepositoriesScreen = () => {
  const { data, isFetching } = useFetchRepositories('PHTorres');

  const renderRepositoryItem = useCallback(({ item }: ListRenderItemInfo<Repository>) => (
    <RepositoryCard repository={item} />
  ), []);

  if(isFetching) return <Loading/>

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderRepositoryItem}
        ItemSeparatorComponent={() => <View style={{height:20}}></View>}
      />
    </Container>
  )
}