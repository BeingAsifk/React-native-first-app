import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Mohd Asif',
      status: 'A passionate frontend developer from India.',
      imageUrl:
        'https://avatars.githubusercontent.com/u/98340658?s=400&u=3ad255992e680d35554cccbf762b10ab5bc0472c&v=4',
    },
    {
      uid: 2,
      name: 'Ashraf Ali',
      status: 'Software developer at Ebix India pvt ltd.',
      imageUrl:
        'https://media.licdn.com/dms/image/C5603AQEIIGhoVqVLYg/profile-displayphoto-shrink_200_200/0/1637186216374?e=2147483647&v=beta&t=oYidADml3LBgFHfbUnhAJEBI6KxLmRKOGA8r8kPSYEI',
    },
    {
      uid: 3,
      name: 'Mohd Asif',
      status: 'A passionate frontend developer from India.',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQH7PrQdBErp9Q/profile-displayphoto-shrink_400_400/0/1692185434889?e=1707955200&v=beta&t=QMX1_GbUd5Pr4RBn9B1RHap7cer8aeFIdSzBxdrpXnc',
    },
    {
      uid: 4,
      name: 'Mohd Asif',
      status: 'A passionate frontend developer from India.',
      imageUrl:
        'https://avatars.githubusercontent.com/u/98340658?s=400&u=3ad255992e680d35554cccbf762b10ab5bc0472c&v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#74B9FF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  userStatus: {
    fontSize: 14,
  },
});
