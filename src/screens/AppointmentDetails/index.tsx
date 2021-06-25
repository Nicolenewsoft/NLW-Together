import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';
import { ListHeader } from "../../components/ListHeader";
import { Member } from '../../components/Member';
import { ButtonIcon } from "../../components/Buttonicon";
import { styles } from "./styles";
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails() {

  const members = [
    {
      id: '1',
      username: 'Nicole',
      avatar_url: 'https://github.com/Nicolenewsoft.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Nicole',
      avatar_url: 'https://github.com/Nicolenewsoft.png',
      status: 'offline'
    },
  ]

  return (
    <Background>
      <Header title='Detalhes' action={
        <BorderlessButton>
          <Fontisto
            name="share"
            size={24}
            color={theme.colors.primary}
          />
        </BorderlessButton>
      } />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da m10</Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  )
}