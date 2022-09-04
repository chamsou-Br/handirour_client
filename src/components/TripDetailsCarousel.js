import React, { useRef } from "react";
import { View, StyleSheet, Image, Animated, Text } from "react-native";
import { sizes } from "../constants/theme";
import { SharedElement } from "react-navigation-shared-element";
import CarouselIndicators from "./CarouselIndicators";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

const TripDetailsCarousel = ({ slides, id }) => {
  const scrollAnimated = useRef(new Animated.Value(0)).current;
  return (
    <>
      <View style={styles.container}>
        <Animated.FlatList
          data={slides}
          horizontal
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollAnimated } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item: image, index }) => {
            if (!index) {
              return (
                <View style={styles.slide}>
                  <View
                    style={{ flexDirection: "row" }}
                    id={`trip.${id}.image`}
                  >
                    <View style={{ width: sizes.width }}>
                      <Image source={image} style={styles.image} />
                    </View>
                  </View>
                </View>
              );
            }
            return (
              <View style={styles.slide}>
                <Image source={image} style={styles.image} />
              </View>
            );
          }}
        />
        {slides.length > 1 && (
          <Animatable.View
            style={styles.indicators}
            animation="fadeInUp"
            delay={550}
            duration={400}
            easing="ease-in-out"
          >
            <CarouselIndicators
              slidesCount={slides.length}
              slideWidth={sizes.width}
              dotSize={12}
              dotSpacing={8}
              scrollAnimated={scrollAnimated}
            />
          </Animatable.View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#3399ff',
  },
  slide: {
    width: sizes.width,
    height: 330,
    left: 15,
    justifyContent: "center",
  },
  image: {
    width: sizes.width * 0.95,
    height: 300,
    resizeMode: "cover",
    borderRadius: 30,
  },
  indicators: {
    position: "absolute",
    width: sizes.width,
    bottom: 30,
    alignItems: "center",
  },
});

export default TripDetailsCarousel;
