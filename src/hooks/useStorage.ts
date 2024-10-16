import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";


const useStorage = () => {
    // Busca das senhas

    const getItem = async (key: string) => {
        try {
            const passwords: string | null = await AsyncStorage.getItem(key)
            return passwords ? JSON.parse(passwords) : []
        
        } catch (error) {
            console.log(`Erro ao buscar: ${error}`)
        }
    }

    // Salvar um item no storage
    const saveItem = async (key: string, value: string) =>{
        try {
            let passwords: [string] = await getItem(key)
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch (error) {
            console.log("ERRO AO SALVAR: " + error)
        }
    }

    // Remover storage
    const removeItem = async (key: string, item: string) => {
        try {
            let passwords = await getItem(key)
            let myPasswords = passwords.filter((password: String) => password != item)
            
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords
        } catch (error) {
            console.log("ERROR AO DELETAR: ", error)
        }
    }
    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;