import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Upcoming Best Animes</Text>
        </View>
        <Image
          source={{
            uri: 'https://www.dexerto.com/cdn-cgi/image/width=1920,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/09/12/upcoming-anime-in-2024.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            We can tell, 2024 will be another remarkable anime year. From highly
            anticipated sequels to new additions in the anime world, we bring
            you a list of the top 14 upcoming anime series to watch in Fall
            2023. We will keep updating this space every season whenever a new
            series gets confirmed, so stay tuned!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.dexerto.com/anime/upcoming-anime-2024-2289599/',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/beingasifk')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  card: {
    width: 370,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.6,
  },
  headingContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
    width: 370,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 7,
  },
});
