import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	// addCoverImages(allAlbums) {
		
	// 	// const allAlbums = this.state.albums;
		
	// 	// fetching resource url from release url
	// 	const fetchResourceUrl = async (album) => {
	// 		try {
	// 			await axios.get(album.resource_url)
	// 			.then(response => {
	// 				fetchImageUrl(album, response.data)
	// 			})
	// 		} catch (error) {
	// 			console.log(error.message)
	// 		}
	// 	}
		
	// 	// fetching image url from resource url
	// 	const fetchImageUrl = async (album, resource) => {
	// 		try {
	// 			await axios.get(resource.uri)
	// 			.then(response => {
	// 				const $ = cheerio.load(response.data);
	// 				const imageUrl = $('.thumbnail_center > img')[0]
	// 				? $('.thumbnail_center > img')[0].attribs.src
	// 				: 'https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png';
	// 				const newAlbums = [...this.state.albums].map(a => a === album ? a.image_url = imageUrl : a)
	// 				console.log(this.state.albums);
	// 				this.setState({ albums: newAlbums })
	// 			})
	// 		} catch (error) {
	// 			console.log(error.message)
	// 		}
	// 	}
		
	// 	// set images in albums
	// 	return allAlbums.map(album => {
	// 		album = fetchResourceUrl(album);
	// 		return album
	// 	});
	// };
	
	// componentWillMount() {			SOON TO BE DEPRECATED
	
	componentDidMount() {
		// Album API is down. Using discogs api.
		axios.get('https://api.discogs.com/artists/3840/releases?')
		.then(response => {
			this.setState({ albums: response.data.releases.slice(0,5) });
		});
	}
	
	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.id} album={ album } />)  
	}

	render() {
		return (
			<View>
				{ this.renderAlbums() }
			</View>
		)
	}
}

export default AlbumList;
