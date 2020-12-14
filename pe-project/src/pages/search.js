import React from 'react'
import axios from 'axios'
import Loading from '../components/loading'
import '../styles/sports_page.css'
import '../styles/search.css'

function Search(props) {
	const { term } = props.match.params
	const [searchResponse, setSearchResponse] = React.useState('')
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)
	//to avoid CORS error
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

	React.useEffect(() => {
        setError(false)
		axios({
			url:
				proxyUrl + `https://aliman21.pythonanywhere.com/search/${term}`,
			method: 'GET',
		}).then(res => {
            setSearchResponse(res.data)
			setLoading(false)
        }).catch((err) => {
            setSearchResponse(err)
            setLoading(false)
            setError(true)
        })
	}, [term])

	return (
		<div id = 'body'>
            <h1 style={{ textTransform: 'capitalize' }} className = 'title header'> {term}: </h1>
            {error && <h1>
            Error occured: try again later</h1>}
			{loading ? (
				<Loading />
			) : (
				<div dangerouslySetInnerHTML={{ __html: searchResponse }} />
			)}
		</div>
	)
}

export default Search
