import React from 'react'
import axios from 'axios'
import Loading from '../components/loading'
import '../styles/sports_page.css'
import '../styles/search.css'

function Search(props) {
	const { term } = props.match.params
	const [searchResponse, setSearchResponse] = React.useState('')
	// const [images, setImages] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)
	//to avoid CORS error
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

	React.useEffect(() => {
		// setImages([])
		setError(false)
		axios({
			url:
				proxyUrl + `https://aliman21.pythonanywhere.com/search/${term}`,
			method: 'GET',
		})
			.then(res => {
				setSearchResponse(res.data)
				setLoading(false)
			})
			.catch(err => {
				setSearchResponse(err)
				setLoading(false)
				setError(true)
			})

		// axios({
		// 	url:
		// 		proxyUrl +
		// 		`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${term}&pageNumber=1&pageSize=3&autoCorrect=true`,
		// 	method: 'GET',
		// 	headers: {
		// 		'X-Rapidapi-Key':
		// 			'983ab8c488msh1435e5213fe35e0p150265jsndf4e066c6cb2',
		// 		'X-Rapidapi-Host':
		// 			'contextualwebsearch-websearch-v1.p.rapidapi.com',
		// 	},
		// })
		// 	.then(res => {
		// 		console.log(res)
		// 		setImages(res.data.value)
		// 	})
		// 	.catch(err => {
		// 		console.error(err)
		// 	})
	}, [term])

	return (
		<div id='body'>
			<h1
				style={{ textTransform: 'capitalize' }}
				className='title header'
			>
				{' '}
				{term}:{' '}
			</h1>
			{error && <h1>Error occured: try again later</h1>}
			{loading ? (
				<Loading />
			) : (
				<div>
						<div dangerouslySetInnerHTML={{ __html: searchResponse }} />
						<div className = 'images'> 
					{/* {images.map(img => (
						<div className='img'>
							<img
								src={img.url}
								alt={`${term}`}
								key={img.height}
							/>
						</div>
					))} */}
							</div>
				</div>
			)}
		</div>
	)
}

export default Search
