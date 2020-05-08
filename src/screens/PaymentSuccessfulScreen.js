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
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
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

        <View style={styles.iconText}>
            <Text style={styles.skip}>Preview</Text>
            
            <Entypo style={styles.icon} name="progress-full" size={25} color="#8729f2" marginTop={10} />
            
            <Text style={styles.previous}>Skip</Text>
                        
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      marginTop:50,
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

iconText: {
    flexDirection: "row",
    alignSelf: "center",
    
    

},

icon: {
    marginRight:100,
    alignSelf: "center",
    marginHorizontal: 100
},



});

export default PaymentSuccessfulScreen;


