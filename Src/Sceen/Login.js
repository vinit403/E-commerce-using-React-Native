import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View  } from 'react-native'
import React ,{ useState } from 'react'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [vali, setVali] = useState();

    const BtnLogin = () => {
        fetch('http://192.168.205.193/demo/ecommerce/login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.status == "yes") {
                        console.log(result.data.email)
                        navigation.navigate("Home1" ,{Email:result.data.email})
                    } else {
                        console.log(result.data)
                        setVali("*Username And Password Incorrect");
                    }
                }
            )
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#F5F5F5", justifyContent: 'center',paddingTop:25
         }}>
                <View style={{ justifyContent: "center", alignItems: "center", bottom: 80 }}>
                    <Image source={require("../../Image/Ecom.png")} style={{ width: 300, height: 300 }} />

                </View>
                <View style={{ margin: 15, elevation: 15, backgroundColor: "white", height: 330, borderRadius: 10, bottom: 80 }}>
                    <View style={{ alignSelf: "center", marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: "#0000FF", fontWeight: "bold" }}>Sign in</Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%" }}>
                            <Image source={require("../../Image/gmail.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Email id / Mobile number" onChangeText={setEmail} value={email}></TextInput>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
                            <Image source={require("../../Image/password.png")} style={{ height: 25, width: 25 }} />
                            <TextInput style={styles.txtinput} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true}></TextInput>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-end', right: 28, marginTop: 5 }}>
                        <Text style={{ fontSize: 15, color: "black" }}>Forgot Password?</Text>
                    </View>
                    <TouchableOpacity onPress={() => BtnLogin()}>
                        <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#0000FF", width: "85%", height: 40, left: 30, marginTop: 15, borderRadius: 10 }}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>SIGN IN </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "red" }}>{vali}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15, left: 30 }}>
                        <View>
                            <Text style={{ color: "#0000FF" }}>Don't Have an Account? </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                <Text style={{ color: "#0000FF", borderBottomWidth: 0.5, borderBottomColor: "#0000FF", fontSize: 16 }}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({})