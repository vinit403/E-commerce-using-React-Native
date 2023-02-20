import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Brand = ({ route, navigation }) => {
    const root = route.params;
    console.log(root.sub_id)
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://192.168.205.193/demo/ecommerce/api_brand.php?subcat_id=' + root.sub_id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setUser(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])
    return (
        <View>
            <View style={{ width: "100%", height: 45, backgroundColor: "#1589FF", alignItems: "center", justifyContent: "center",flexDirection:'row' }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 ,paddingTop:5}}>Brand</Text>
            </View>
            
            <FlatList
                data={user}
                keyExtractor={(_, i) => i.toString()}
                contentContainerStyle={{ flexGrow: 1 }}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={{ margin: 8, flexWrap: "wrap" }}>
                                <View style={{ width: 190, height: 190, elevation: 5, backgroundColor: "black", borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                                        <Image source={{ uri: "http://192.168.205.193/demo/ecommerce/Brand%20Image/" + item.brand_img }} style={{ width: 190, height: 164, borderRadius: 15 }} />
                                        <Text style={styles.cattxt}>{item.brand}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    )
                }}
            />
        </View>
    )
}

export default Brand

const styles = StyleSheet.create({
    cattxt: {
        color: "white",
        fontSize: 18, fontWeight: "bold"
    }
})