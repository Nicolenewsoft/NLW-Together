import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { styles } from './styles'
import { Background } from '../../components/Background';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListDivider } from '../../components/ListDivider';

export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>


        <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}