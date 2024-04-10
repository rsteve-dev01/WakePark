import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'; // Import Dimensions
import Carousel, { Pagination } from 'react-native-snap-carousel'; // Import Pagination

const { width: screenWidth } = Dimensions.get('window'); // Get the screen width

const carouselItems = [
  { image: require('../../assets/updates/Regional-Math-Competition.jpg'), title: 'College Hosts Regional Math Competition' },
  { image: require('../../assets/updates/BIOTECH.jpg'), title: 'Biotech Students Connect with Employers' },
  { image: require('../../assets/updates/Law-Enforcement.jpg'), title: 'Law Enforcement Cadets Graduate' },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0); // State for active carousel item index

  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselItem}>
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <Text style={styles.title}>{item.title}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        onSnapToItem={(index) => setActiveIndex(index)} // Update activeIndex on item change
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={null} // Reference to the carousel (null for auto-assign)
        tappableDots={true} // Enable tappable dots
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    width: screenWidth,
    height: 300,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Align title at the bottom
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fading effect background color
  },
  paginationContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
  paginationInactiveDot: {
    backgroundColor: '#FFFFF7', // Color for inactive dots
  },
});

export default HomePage;
