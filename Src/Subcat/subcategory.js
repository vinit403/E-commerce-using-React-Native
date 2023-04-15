import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Subcategory = ({ route, navigation }) => {
  const root = route.params
  console.log(root.catid)

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    fetch('http://192.168.158.193/demo/ecommerce/api_subcat.php?cat_id=' + root.catid)
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
      <View style={{ width: "100%", height: 45, backgroundColor: "#1589FF",flexDirection:'row' }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 24,paddingLeft:105,paddingTop:5}}>Subcategory</Text>
      </View>
      <FlatList
        data={user}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => {
          return (
            <>
              <View style={{ flex: 1, marginTop: 8, flexDirection: "row", height: 150, width: "100%", backgroundColor: "white", elevation: 5, }}>
                <TouchableOpacity style={{ alignSelf: 'center', flexDirection: "row" }} onPress={()=>navigation.navigate("Subcatinner",{Id : item.sub_id})}>
                  <View style={{ justifyContent: "center", borderRadius: 15, marginLeft: 5 }}>
                    <Image source={{ uri: "http://192.168.158.193/demo/ecommerce/Brand%20Image/" + item.sub_img }} style={{ width: 140, height: 125, borderRadius: 15 }} />
                  </View>
                  <Text style={styles.cattxt}>{item.subcat_name}</Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }}
      />
    </View>
  )
}

export default Subcategory

const styles = StyleSheet.create({
  cattxt: {
    color: "black",
    fontSize: 18, fontWeight: "bold", marginLeft: 10, alignSelf: "center", justifyContent: "center"
  }
})