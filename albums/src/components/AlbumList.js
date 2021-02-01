import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	componentDidMount() {
		// componentWillMount() {			SOON TO BE DEPRECATED
		// Exercise album API is down. Using discogs api.
		
		const discogsArtist = {
			name: 'Radiohead',
			number: '3840'
		};
		// scrape artist page for artist image source
		let artistImageUrl;

		try {
			axios.get(`https://www.discogs.com/artist/${discogsArtist.number}-${discogsArtist.name}`)
			.then(response => {
				const $ = cheerio.load(response.data);
				artistImageUrl = $('.thumbnail_center > img')[0]
				? $('.thumbnail_center > img')[0].attribs.src
				: 'https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png';
			});
		} catch(error) {
			console.log(error.message)
		}
		
		try {
			axios.get(`https://api.discogs.com/artists/${discogsArtist.number}/releases?sort=year`)
			.then(response => {
				const apiAlbums = response.data.releases.slice(0,5);
				
				apiAlbums.map(album => {
					// fetch album url
					try {
						axios.get(album.resource_url)
						.then(response => {
							// scrape album page for album image source and marketplace
							try {
								axios.get(response.data.uri)
								.then(response => {
									const $ = cheerio.load(response.data);
									const albumImageUrl = $('.thumbnail_center > img')[0]
									? $('.thumbnail_center > img')[0].attribs.src
									: 'https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png';
									const marketplaceUrl = $('.marketplace_box_links .section_content > a')[0].attribs.href

									album.artist_image_url = artistImageUrl;
									album.album_image_url = albumImageUrl;
									album.marketplace_url = `https://www.discogs.com${marketplaceUrl}`;
								})
							} catch(error) {
								console.log(error.message)
							}
						});
					} catch(error) {
						console.log(error.message)
					}
				});			
				
				this.setState({ albums: apiAlbums });
			});
		} catch(error) {
			console.log(error.message)
		}
	}
	
	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={ album.id } album={ album } />)  
	}

	render() {
		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		)
	}
}

export default AlbumList;
