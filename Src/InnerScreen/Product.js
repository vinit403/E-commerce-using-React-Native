import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Product = ({ route, navigation }) => {
    const Root = route.params;
    console.log(Root.Id)
    const [prod, setProd] = useState([])
    const [like, setLike] = useState(false)

    const Whishlist = (txt) => {
        console.log(txt)
        if(like == false){
            setLike(true)
        }else{
            setLike(false)
        }
    }

    useEffect(() => {
        fetch("http://192.168.205.193/demo/ecommerce/api_product.php?id=" + Root.Id)
            .then(res => res.json())
            .then(
                (resu) => {
                    setProd(resu)
                },
                (err) => {
                    console.log(err)
                }
            )
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 45, backgroundColor: "#1589FF", alignItems: "center", justifyContent: "center", flex: 1 ,flexDirection:'row'}}>

                <Text style={{ color: "white", fontWeight: "bold", fontSize: 24,paddingTop:5 }}>Products</Text>
            </View>
            <View style={{ flex: 15 }}>
                <FlatList
                    data={prod}
                    keyExtractor={(_, i) => i.toString()}
                    contentContainerStyle={{ flexGrow: 1 }}
                    // numColumns={2}
                    renderItem={({ item , i }) => {
                        return (
                            <>
                                <TouchableOpacity onPress={()=>navigation.navigate("Subcatinner",{Id : item.sub_id})}>
                                    <View style={{ marginTop: 5, flexDirection: "row", width: "100%", height: 210, elevation: 5, backgroundColor: "white", alignItems: "center", justifyContent: "flex-start" }}>
                                        <View style={{ borderRadius: 15, }}>
                                            <Image source={{ uri: "http://192.168.205.193/demo/ecommerce/Brand%20Image/" + item.image }} style={{ width: 180, height: 135, borderRadius: 15 }} />
                                        </View>
                                        <View style={{ width: "100%", flex: 1 }}>
                                            <View style={{ right:6, flex: 1, alignItems:'flex-end', marginTop: 5 }}>
                                                <TouchableOpacity onPress={() => Whishlist(item.id)}>
                                                    {like ? <Image source={require("../../Image/heart.png")} style={{ width: 28, height: 28 }} /> : <Image source={require("../../Image/like.png")} style={{ width: 28, height: 28 }} />}
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginLeft: 10, flex: 3 }}>
                                                <Text style={styles.brandtxt}>{item.title}</Text>
                                                <Text style={styles.brandtxt}>{item.description}</Text>
                                                <Text style={styles.brandtxt}>₹ {item.price}</Text>
                                                <Text style={styles.brandtxt}>Qty : {item.qty}</Text>

                                                
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    brandtxt: {
        color: "black",
        fontSize: 17, fontWeight: "bold"
    }
})