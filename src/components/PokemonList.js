import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const {pokemons, loadPokemons, isNext} = props;

    const loadMore =() =>{
      loadPokemons();
    };

  return (
    <FlatList
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon)=>String(pokemon.id)}
    renderItem={({ item }) => <PokemonCard pokemon={item} />}
    contentContainerStyle={Style.FlatListContentContainer}
    onEndReached={isNext && loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
      isNext && (
      <ActivityIndicator
      size='large'
      style={Style.spinner} color='#F02212'
      />
      )
    }
    />
  );
}

const Style =StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal:5,
    margin: Platform.OS ==='android' ? 3:0,
  },
  spinner:{
    marginTop: 20,
    marginBottom: Platform.OS ==='android' ? 90:60,
  }
});