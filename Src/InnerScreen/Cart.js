import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementNum,decrementNum,AddNum,AddCartItem,AddQty,RemoveQty } from '../actions';
import { removecart } from '../actions'

const Cart = ({navigation}) => {
    const [totalQty,setTotalQty] = useState(1)
    const [totalAmt,setTotalAmt] = useState(1)
    const dispatch = useDispatch()
    const dataq = useSelector((state) => state.addCart)
    console.log(dataq)
     const data = useSelector((state)=>state.upDown)
    const btnAddCart=(ele)=>{
        //  console.log('Hello')
        dispatch(AddQty(ele))
       
    }
    useEffect(()=>{
        var cnt = 0
        var amt = 0
        for(var i=0;i<dataq.length;i++){
            //setTotalQty(totalQty+dataq[i].qty)
            console.log( dataq[i].price.split(",").join(""))
            cnt+= dataq[i].qty
            amt+= (dataq[i].qty*parseInt( dataq[i].price.split(",").join("")))
        }
        setTotalQty(cnt)
        setTotalAmt(amt)
    },[dataq])
    return (
        <>
            <View style={{ alignItems: 'center', backgroundColor: "#b3e6ff" }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: "black", marginTop: 5, justifyContent: 'center' }}> Add to cart</Text>
            </View>
            <FlatList
                data={dataq}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item ,ind}) => {
                    
                    //console.log(item)
                    return (
                        <>
                            <View style={{ margin: 5, flexDirection: "row", width: "97.5%", elevation: 4, backgroundColor: "white", borderRadius: 5 }}>
                                <View style={{ padding: 4 }}>
                                    <Image source={{ uri: "http://192.168.205.193/demo/ecommerce/Brand%20Image/" + item.image  }} style={{ height: 110, width: 120, borderRadius: 5 }} />
                                </View>
                                <View style={{ width: "62%", margin: 5, justifyContent: "space-between", marginLeft: 10 }}>
                                    {/* First Line  */}
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <View>
                                            <Text style={styles.Destxt}>{item.title}</Text>
                                        </View>
                                        
                                    </View>
                                    {/* Second line */}
                                    <View>
                                        <Text style={{ fontSize: 15 }}>{item.description}</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        
                                        <TouchableOpacity onPress={()=>{ dispatch(RemoveQty(item))}} >
                                            <Image source={require("../../Image/minus.png")} style={{ height: 25, width: 25 }} />
                                        </TouchableOpacity>

                                        {/* <TouchableOpacity onPress={()=>{ dispatch(AddNum(5))}} title='+5'></TouchableOpacity> */}
                                        <View style={{marginLeft:10}}>
                                            <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>{item.qty}</Text>
                                        </View>

                                        <TouchableOpacity onPress={()=>{ btnAddCart(item)}} style={{marginLeft:10}}>
                                            <Image source={require("../../Image/plus1.png")} style={{ height: 25, width: 25 }} />
                                        </TouchableOpacity>

                                        
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15 }}>₹ {item.price}</Text>
                                    </View>
                                    {/* Third line */}
                                   
                                </View>
                            </View>
                        </>
                    )
                }}
            />
            <View style={{backgroundColor:'blue',width:'90%',height:140,alignSelf:'center',marginBottom:20,borderRadius:5}}>
                <View style={{paddingTop:20,paddingLeft:5}}>
                    <View>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Total Items :- {totalQty}</Text>
                    </View>
                    <View >
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold',paddingTop:10}}>Amount :- {totalAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
                    </View>
                </View>
                <View style={{marginTop:20,backgroundColor:'black',width:'45%',height:30,alignSelf:'center',borderRadius:10}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Details",{totalamt:totalAmt})} >
                        <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Place Order</Text>
                    </TouchableOpacity>
                        
                </View>
                
            </View>
        </>
    )
}

export default Cart

const styles = StyleSheet.create({
    Destxt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 17,
    },
    plusminus: {
        height: 35, width: 110, justifyContent: 'space-evenly', flexDirection: 'row', borderRadius: 10, paddingTop: 5, right: -8, position: 'absolute'
    }
})