import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{ props.album.title }</Text>
      </CardSection>
    </Card>
  )
};

const styles = StyleSheet.create({});

export default AlbumDetail;
