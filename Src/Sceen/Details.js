import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert,Button,FlatList} from 'react-native'
import React, { useState }  from 'react'
import RazorpayCheckout from 'react-native-razorpay';

const Details = ({ route,navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [contact, setContact] = useState();

    const root = route.params
    console.log(root.totalamt)

    const btnSubmit = ({route,navigation}) => {
        
        fetch("http://192.168.205.193/demo/ecommerce/details.php", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                address: address,
                city: city,
                state: state,
                contact: contact,
            })
        }).then(res => res.json()).then(
            (result) => {
                console.log(result)
            },
        )
        Alert.alert("Details Added SuccessFully");
        
        navigation.navigate("Details")
        setName();
        setEmail();
        setAddress();
        setCity();
        setState();
        setContact();
    }

  return (
       
        <>
            <View style={{ flex: 1, backgroundColor: "#F5F5F5", justifyContent: 'center' }}>
                <View style={{ margin: 15, elevation: 15, backgroundColor: "white", height: 430, borderRadius: 10 }}>
                    <View style={{ alignSelf: "center", marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: "#0000FF", fontWeight: "bold" }}>Enter you Details</Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/user.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Name" onChangeText={setName} value={name}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/gmail.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Email id " onChangeText={setEmail} value={email}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/address.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Address" onChangeText={setAddress} value={address}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/city.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="City" onChangeText={setCity} value={city} ></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/state.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="State" onChangeText={setState} value={state} ></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/phone.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Mobile Number" onChangeText={setContact} value={contact} secureTextEntry={true} keyboardType={'phone-pad'} maxLength={10}></TextInput>
                        </View>
                    </View>
                    {/* <TouchableOpacity onPress={() => btnSubmit()}>
                        <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#0000FF", width: "85%", height: 40, left: 30, marginTop: 15, borderRadius: 10 }}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Pay Now</Text>
                        </View>
                    </TouchableOpacity> */}
                   <Button
                        title={'Pay with Razorpay'}
                        onPress={() => {
                        var options = {
                            description: 'Credits towards consultation',
                            image: 'https://c8.alamy.com/comp/2H7DP4N/vk-logo-monogram-letter-vk-logo-design-vector-vk-letter-logo-design-with-modern-trendy-2H7DP4N.jpg',
                            currency: 'INR',
                            key: 'rzp_test_VWVGgQi0vCkkOj', // Your api key
                            amount: root.totalamt*100,
                            name: 'foo',
                            prefill: {
                            email: 'vinitkumbhani25@gmail.com',
                            contact: '9586586365',
                            name: 'Razorpay Software',
                            },
                            theme: {color: '#F37254'},
                        };
                        RazorpayCheckout.open(options)
                            .then(data => {
                            // handle success
                            alert(`Success: ${data.razorpay_payment_id}`);
                            })
                            .catch(error => {
                            // handle failure
                            alert(`Error: ${error.code} | ${error.description}`);
                            });
                        }}
                    />
                </View>
            </View>
            </>
          )
        
  
}

export default Details

const styles = StyleSheet.create({})