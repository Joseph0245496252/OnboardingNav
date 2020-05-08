import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native'
import {Entypo} from '@expo/vector-icons'

function PaymentSuccessfulScreen(navigation) {
    
    return (
        <View style={styles.container}>
            
            <View >
                <Text  style={styles.textHeader}>PAYMENT SUCCESSFUL</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
            </View>

            <View >
            <Image source={require('../../assets/successful.png')} style={styles.image} />
        </View>

        <View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("OnlineShopping")
          }}style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastContainer}>
                    <Entypo name="progress-two" size={25} style={styles.icon} />
                    <TouchableOpacity  style={styles.Skip}
                     onPress={() => { navigation.navigate('PaymentSuccessful') }} >
                     <Text >Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.Previous}
                     onPress={() => { navigation.navigate('OnlineShopping') }} >
                       <Text >Previous</Text>
                    </TouchableOpacity>
                   
                  
                </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      marginTop:20,
      marginHorizontal: 50,
    },
  

  image: {
    marginTop: 40,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignSelf: "center"
   
},

buttonContainer:{
    backgroundColor:"#8729f2",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    marginVertical:30,
    height:40,
    width: 110,
    marginHorizontal: 80
  },

  buttonText:{
    color:"white",
    fontSize:15,
    fontWeight: "bold"

  },

  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  
  
},
infoContainer:{
    marginTop: 10,
    fontWeight: "bold"
    
},

lastContainer: {
  flexDirection: "row",
  alignItems: "center"
 },

 icon: {
  marginLeft: 120,
  color: "#b978eb",
},
Skip: {
  position: "absolute",
  marginLeft: 250,
  color: "#c6becc",
},
Previous: {
  color: "#c6becc",
  position: "absolute",
  left: -25
},




});

export default PaymentSuccessfulScreen;


