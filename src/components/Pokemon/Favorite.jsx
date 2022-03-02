import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;

  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false); // Técnica del interruptor para cambiar el estado de un elemento en tiempo real
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  console.log(isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    // Técnica del interruptor para cambiar el estado de un elemento en tiempo real
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    console.log(isFavorite);
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
