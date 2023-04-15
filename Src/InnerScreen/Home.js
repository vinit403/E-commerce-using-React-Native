import { Animated, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Icon from '../../Image/search.png'
import { incrementNum,decrementNum,AddNum } from '../actions';
import { useDispatch,useSelector } from 'react-redux';
import SearchBar from "react-native-dynamic-search-bar";
import { Dimensions } from 'react-native';

const sliderimage = [
  require('../../Image/slider-1.jpg'),
  require('../../Image/slider-2.jpg'),
  require('../../Image/slider-3.jpg')
]

const Home = ({ route,navigation }) => {

  // const root = route.params
  // console.log(root.Email);

  
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.upDown)
  const [user, setUser] = useState([]);
  const [bname, setBname] = useState([]);
  
  const { width, height } = Dimensions.get('window');
  const ITEM_WIDTH = width * 0.9;
  const ITEM_HEIGHT = ITEM_WIDTH * 0.5;
  const scrollX = React.useRef(new Animated.Value(0)).current;




  useEffect(() => {
    fetch("http://192.168.158.193/demo/ecommerce/api_cat.php")
      .then(res => res.json())
      .then(
        (result) => {
         console.log(result)
          setUser(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://192.168.158.193/demo/ecommerce/api_brand.php")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          setBname(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection:'row',width: "100%", height: 45, backgroundColor: "#1589FF", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>Electronic World</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image source={require("../../Image/shopping.png")} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>

      </View>
      {/* <View>
        <Button onPress={()=>{ dispatch(incrementNum())}} title='++'></Button>
        <Button onPress={()=>{ dispatch(AddNum(5))}} title='+5'></Button>
        <Button onPress={()=>{ dispatch(decrementNum())}} title='--'></Button>
        <Text>{data}</Text>
      </View> */}
      <View>
        <SearchBar
          placeholder="Search here"
          onPress={() => alert("onPress")}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View>
        <Animated.FlatList 
          data={sliderimage}
          keyExtractor={({item, index}) => index}
          horizontal
          autop
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          renderItem={({item , index}) =>{
            const inputRange = [
              (index-1)*width, 
              index*width, 
              (index+1)*width
            ];
            const translateY =scrollX.interpolate({
               inputRange,
               outputRange:[-width*.7, 0, width*.7]
            })
            return(
              <View style={{width:width , justifyContent:'center',alignItems:'center'}}>
                <View style={{shadowOpacity:20,shadowRadius:18,shadowOffset:{x: 0 , y: 0},shadowColor:'#000',borderWidth:20, borderColor:'white'}}>
                  <View style={{ overflow:'hidden',alignItems:'center'}}>
                    <Animated.Image source={item} style={{width:ITEM_WIDTH,height:ITEM_HEIGHT,transform:[{translateY:translateY}]}}></Animated.Image>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>

      <View>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, left: 10 }}>Category</Text>
      </View>
      <View style={{ flex: 3.5 }}>
        <FlatList
          data={user}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <>
                <View style={{ margin: 8 }}>
                  <View style={{ width: 150, height: 150, elevation: 5, backgroundColor: "#FFFFF5", borderRadius: 15, justifyContent: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("subcategory", { catid: item.cat_id })}>
                      <Image source={{ uri: "http://192.168.158.193/demo/ecommerce/Brand%20Image/" + item.cat_img }} style={{ width: 150, height: 125, borderRadius: 15 }} />
                      <Text style={styles.cattxt}>{item.cat_name}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )
          }}
        />
      </View>
      <View style={{ flex: 5}}>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, left: 10 }}>Brand</Text>
        <FlatList
          data={bname}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <>
                <View style={{ margin: 8, flexWrap: "wrap" }}>
                  <View style={{ width: 165, height: 190, elevation: 5, backgroundColor: "black", borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>navigation.navigate("Product",{Id : item.brandid})}>
                      <Image source={{ uri: "http://192.168.158.193/demo/ecommerce/Brand%20Image/" + item.brand_img }} style={{ width: 165, height: 165, borderRadius: 15 }} />
                      <Text style={styles.brandtxt}>{item.brand}</Text>
                    </TouchableOpacity>
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

export default Home

const styles = StyleSheet.create({
  cattxt: {
    color: "black",
    fontSize: 17, fontWeight: "bold"
  },
  brandtxt: {
    color: "white",
    fontSize: 17, fontWeight: "bold"
  },
})