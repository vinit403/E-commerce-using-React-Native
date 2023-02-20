import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import { incrementNum,decrementNum,AddNum,AddCartItem } from '../actions';
import { useDispatch,useSelector } from 'react-redux';

const Subcatinner = ({ route }) => {

    const dispatch = useDispatch()
    const data = useSelector((state)=>state.addCart)
    console.log(data)
    const [user, setUser] = useState([]);
    const [bname, setBname] = useState([]);

    const Root = route.params;
    console.log(Root.Id);
    const [subin, setSubin] = useState([]);

    useEffect(() => {
        fetch("http://192.168.205.193/demo/ecommerce/api_subinner.php?id=" + Root.Id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setSubin(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 45, backgroundColor: "#1589FF", alignItems: "center", justifyContent: "center", flex: 1 ,flexDirection:'row'}}>

                <Text style={{ color: "white", fontWeight: "bold", fontSize: 24,paddingTop:5 }}>Subcatinner</Text>
            </View>

            {/* <View>
                <Button onPress={()=>{ dispatch(incrementNum())}} title='++'></Button>
                <Button onPress={()=>{ dispatch(AddNum(5))}} title='+5'></Button>
                <Button onPress={()=>{ dispatch(decrementNum())}} title='--'></Button>
            </View> */}

            <View style={{ flex: 15 }}>
                <FlatList
                    data={subin}
                    keyExtractor={(_, i) => i.toString()}
                    contentContainerStyle={{ flexGrow: 1 }}
                    // numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={{ marginTop: 8, flexDirection: "row", width: "100%", height: 210, elevation: 5, backgroundColor: "white", alignItems: "center", justifyContent: "flex-start" }}>
                                    <View style={{ borderRadius: 15, }}>
                                        <Image source={{ uri: "http://192.168.205.193/demo/ecommerce/Brand%20Image/" + item.image }} style={{ width: 180, height: 135, borderRadius: 15 }} />
                                    </View>
                                    <View style={{ marginLeft: 10 , width:'50%'}}>
                                        <Text style={styles.brandtxt}>{item.title}</Text>
                                        <Text style={styles.brandtxt}>{item.description}</Text>
                                        <Text style={styles.brandtxt}>₹ {item.price}</Text>
                                        <Text style={styles.brandtxt}>Qty : {item.qty}</Text>
                                        
                                        {/* <View>
                                            <Text>{data}</Text>
                                        </View> */}

                                        <View style={{ paddingTop: 10, width: '70%', height: 70 }}>
                                            <TouchableOpacity style={{ backgroundColor: 'blue' }} onPress={()=>{ dispatch(AddCartItem(item))}}>
                                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Add to Cart</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    
                                </View>
                            </>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Subcatinner

const styles = StyleSheet.create({
    brandtxt: {
        color: "black",
        fontSize: 17, 
        fontWeight: "bold",
        width:'90%'
    }
})