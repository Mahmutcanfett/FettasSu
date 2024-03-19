import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'




const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headeryazi}>
                Fettaş Su
            </Text>
        </View>
        <View style={styles.body}>
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-postaniz'
                    /> 
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Şifreniz'
                        secureTextEntry
                    /> 
                </View>

                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomePage')}>
                        <Text style={{ color:'white', fontWeight:'bold'}}>Giriş Yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('RegisterPage')}>
                        <Text style={{ color:'white', fontWeight:'bold'}}>Hesap Oluştur</Text>
                    </TouchableOpacity>
                </View>
        
        </View>
            <View style={styles.footer}>
        <Text style={styles.footeryazi}>
                Serhat Taşhan - Mahmut Can Fettahoğlu
            </Text>
        </View>
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#365486',
    },
    header: {
        width:1000,
        height:75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4169ab',
        borderBottomWidth: 1, 
        borderBottomColor: 'black', 
    },  
    body: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#365486',
    },
    footer: {
        width: 1000,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4169ab',
        borderTopWidth: 1, 
        borderTopColor: 'black', 
    },
    headeryazi:{
        fontWeight: 'bold',
        fontSize:20,
        
    },
    footeryazi:{
        fontWeight: 'bold',
        fontSize:15,
        
    },
    button1:{
        alignItems: 'center',
        padding:10,
        backgroundColor: '#0F1035',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        width:125,
        margin:10,
        
    },
    inputcontainer:{
        alignItems:'center',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '80%',
        borderRadius:10,
        
    },
    buttoncontainer:{
        alignItems:'center',
        textAlign: 'center',
        flexDirection: 'row'

    },
    input:{
        height:60,
        width: '%100',
        outlineColor: 'transparent',
        outlineWidth: 0,
        fontWeight:'bold',
        color: 'white',
    }
})

export default LoginPage