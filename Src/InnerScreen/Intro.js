import { StyleSheet,Animated, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const sliderimage = [
    require('../../Image/Intro-1.jpg'),
    require('../../Image/Intro-2.jpg'),
    require('../../Image/Intro-3.jpg')
  ]

const Intro = () => {
  
    const { width, height } = Dimensions.get('window');
    const ITEM_WIDTH = width * 0.9;
    const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
    const scrollX = React.useRef(new Animated.Value(0)).current;



  return (
    <View>
        <Animated.FlatList 
          data={sliderimage}
          keyExtractor={({item, index}) => index}z
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
              <View style={{width:width , justifyContent:'center',alignItems:'center',justifyContent:'center',paddingTop:150}}>
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
    
  )
}

export default Intro

const styles = StyleSheet.create({})