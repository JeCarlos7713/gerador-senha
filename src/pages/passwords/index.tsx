import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import useStorage from './../../hooks/useStorage'
import PasswordItem from "./../passwords/components/passwordItem"

const Passwords = () => {
  const [listPasswords, setListPasswords] = useState([])
  const focused = useIsFocused() //  realiza validação para saber se a tela está em foco, ele é boleano
  const {getItem, removeItem} = useStorage()
  useEffect(()=>{
    async function loadPasswords(){
      const passwords = await getItem("@pass")
      setListPasswords(passwords)
    }

    loadPasswords()
  }, [focused])

  const handleDeletePassword = async (item: string) => {
    const passwords = await removeItem("@pass", item)
    setListPasswords(passwords)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList 
        style={{flex: 1, paddingTop: 14}}
          data={listPasswords} 
          keyExtractor={item => String(item)} 
          renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>} 
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: -45,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14
  }
})

export default Passwords