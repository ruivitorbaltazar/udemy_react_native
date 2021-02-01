import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, album_image_url, artist_image_url, marketplace_url } = album;

  return (
    <Card>
      <CardSection>
        <View style={ styles.thumbnailContainerStyle }>
          <Image
            source={{ uri: artist_image_url }}
            style={ styles.thumbnailStyle }
            />
        </View>
        <View style={ styles.headerContentStyle }>
          <Text style={ styles.headerTextStyle } >{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: album_image_url }}
          style={ styles.albumImageStyle }
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(marketplace_url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
