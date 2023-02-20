import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert} from 'react-native'
import React, { useState }  from 'react'

const Registration = ({ navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [password, setPassword] = useState();

    const btnSubmit = () => {
       
        fetch("http://192.168.205.193/demo/ecommerce/register.php", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                contact: contact,
                password: password,
            })
        }).then(res => res.json()).then(
            (result) => {
                console.log(result)
            },
        )
        Alert.alert("Registration SuccessFully");
        navigation.navigate("Login")
        setName();
        setEmail();
        setContact();
        setPassword();
    }

  return (
        <>
            <View style={{ flex: 1, backgroundColor: "#F5F5F5", justifyContent: 'center' }}>
                <View style={{ margin: 15, elevation: 15, backgroundColor: "white", height: 430, borderRadius: 10 }}>
                    <View style={{ alignSelf: "center", marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: "#0000FF", fontWeight: "bold" }}>REGISTER</Text>
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
                            <Image source={require("../../Image/phone.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Mobile Nuber" onChangeText={setContact} value={contact} secureTextEntry={true} keyboardType={'phone-pad'} maxLength={10}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/password.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true}></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => btnSubmit()}>
                        <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#0000FF", width: "85%", height: 40, left: 30, marginTop: 15, borderRadius: 10 }}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>SIGN UP </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: 15, left: 30 }}>
                        <View>
                            <Text style={{ color: "#0000FF" }}>Already Have an Account? </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={{ color: "#0000FF", borderBottomWidth: 0.5, borderBottomColor: "#0000FF", fontSize: 16 }}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
  
}

export default Registration

const styles = StyleSheet.create({})