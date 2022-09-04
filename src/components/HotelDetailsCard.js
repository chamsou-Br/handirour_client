import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, sizes, spacing } from "../constants/theme";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
// import { View,Text } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/Ionicons";
import SeeMore from "react-native-see-more-inline";

const HotelDetailsCard = ({ hotel }) => {
  const detail =
    "Busness Urban hotel located at the center of Algiers would place the link under the text. This package uses text width, and using a simple binary search it (almost) accurately calculates where it should place.";
  return (
    <View
      style={{
        shadowColor: "gray",
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        backgroundColor: "white",
        overflow: "hidden",
        padding: 10,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginBottom : 3
        }}
      >
             <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
             <Icon
                  name="location-sharp"
                  onPress={() => {}}
                  size={14}
                  color="#859DFF"
                />
              <Text style={{fontSize : 12 , fontWeight : '600',color : "#859DFF",paddingLeft :5}}>{hotel.location}</Text>

              
              </View> 
       
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Stars
            default={2.5}
            update={(val) => {
              this.setState({ stars: val });
            }}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
            emptyStar={
              <Icon
                name={"star-outline"}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
            halfStar={
              <Icon name={"star-half-sharp"} style={[styles.myStarStyle]} />
            }
            disabled={true}
            style={styles.stars}
          />
        </View>
      </View>

      <View style={{   marginBottom : 3}}>
        <Text  style={{fontSize : 12 , fontWeight : '600',color : "#859DFF"}}>{hotel.description}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <SeeMore numberOfLines={2} linkColor="red" style={styles.seeMore}>
           {detail}
        </SeeMore>
      </View>
      <Text style={{ fontSize: 12 , fontWeight : '600' , color : "#859DFF",paddingTop : 3 }}>https://www.hotel.com</Text>
 
    </View>
  );
};

const styles = StyleSheet.create({
  avis: {
    fontSize: 10,
  },
  seeMore : {
    fontSize : 12,
    fontWeight : "500",
    letterSpacing : 0.6,
    color : "#000000CC"
  },
  myStarStyle: {
    color: "orange",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
    left: 0,
    textAlign: "center",
  },
});
export default HotelDetailsCard;
{/* */}