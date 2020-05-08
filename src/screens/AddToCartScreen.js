import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native'
import {Entypo} from '@expo/vector-icons'

function AddToCartScreen(navigation) {
    
    return (
        <View style={styles.container}>
            
            <View >
                <Text  style={styles.textHeader}>ADD TO CART</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <View >
            <Image source={require('../../assets/cast.png')} style={styles.image} />
        </View>

        <View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("PaymentSuccessful")
          }}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Next</Text>
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
      marginTop:5,
      marginHorizontal: 50,
    },
  

  image: {
    marginTop: 10,
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
    marginVertical:50,
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
  alignItems: "center",
  marginTop: -20
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

export default AddToCartScreen;


