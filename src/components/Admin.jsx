import { useState, useEffect } from 'react'
import '../styles/admin.css'
import axios from 'axios'

export default function Admin() {

    const [users, setUsers] = useState([])
    const [characters, setCharacters] = useState([])
    const [decks, setDecks] = useState([])
    const [userData, setUserData] = useState([])
    const [deckData, setDeckData] = useState([])
    const [characterData, setCharacterData] = useState([])
    const [showData, setShowData] = useState(null)




    // USE EFFECTS

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/users`
        axios.get(url)
            .then((response) => {
                console.log(response.data.results)
                setUsers(response.data.results)
            })
            .catch(console.warn)
    }, [])

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/characters`
        axios.get(url)
            .then((response) => {
                console.log(response.data.results)
                setCharacters(response.data.results)
            })
            .catch(console.warn)
    },[])

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/decks`
        axios.get(url)
            .then((response) => {
                console.log(response.data.results)
                setDecks(response.data.results)
            })
            .catch(console.warn)
    },[])




    // DISPLAY FUNCTIONS

    const displayUsers = users.map((user, i) => {
        return(
            <div key={i} onClick={() => handleUserClick(user)}>
                <p>{user.name} - <span className='user-email'>{user.email}</span></p>
            </div>
        )
    })

    const displayCharacters = characters.map((char, i) => {
        return(
            <div key={i} onClick={() => handleCharClick(char)}>
                <p>{char.name}</p>
            </div>
        )
    })

    const displayDecks = decks.map((deck, i) => {
        return(
            <div key={i} onClick={() => handleDeckClick(deck)}>
                <p>{deck.deckId}</p>
            </div>
        )
    })

    const displayUserData = () => {
        return(
            <div>
                <p>Username: {userData.name}</p>
            </div>
        )
    }

    const displayCharData = () => {
        return(
            <div>
                <p>{characterData.name}</p>
                <p>{characterData.health}</p>
            </div>
        )
    }

    const displayDeckData = () => {
        return(
            <div>
                <p>{deckData.name}</p>
                <p>{deckData.deckId}</p>
                <div>
                    {deckData.cards.map((card,i) => {
                        return(
                            <div>
                                <p>{card.attack}</p>
                                <p>{card.damage}</p>
                                <p>{card.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const handleUserClick = (e) => {
        console.log(e)
        setUserData(e)
        setShowData('user')
    }

    const handleDeckClick = (e) => {
        console.log(e)
        setDeckData(e)
        setShowData('deck')
    }

    const handleCharClick = (e) => {
        console.log(e)
        setCharacterData(e)
        setShowData('char')
    }





    // PAGE LAYOUT

    return(
        <div className='main-admin-div'>

            <div className='database-search'>
                <div>
                    <h2>Users</h2>
                    <div>{displayUsers}</div>
                </div>

                <div>
                    <h2>Characters</h2>
                    <div>{displayCharacters}</div>
                </div>
                
                <div>
                    <h2>Decks</h2>
                    <div>{displayDecks}</div>
                </div>
            </div>

            <div className='search-results'>
                {showData === 'user' ? displayUserData() : null}
                {showData === 'char' ? displayCharData() : null}
                {showData === 'deck' ? displayDeckData() : null}
            </div>

        </div>
    )
}