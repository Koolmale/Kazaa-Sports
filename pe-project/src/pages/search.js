import React from 'react'
import axios from 'axios'
import Loading from '../components/loading'
import '../styles/sports_page.css'

function Search(props) {
	const { term } = props.match.params
    const [searchResponse, setSearchResponse] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    //to avoid CORS error
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

	React.useEffect(() => {
		axios({
			url:
				proxyUrl +
				`https://aliman21.pythonanywhere.com/search/${term}`,
			method: 'GET',
        }).then(res => {
            setSearchResponse(res.data)
            setLoading(false)
        })
	}, [term])

	return (
		<div>
            <h1> You searched for: {term} </h1>
            {loading && <Loading/>}
            <div dangerouslySetInnerHTML={{ __html: searchResponse }}/>
		</div>
	)
}

export default Search