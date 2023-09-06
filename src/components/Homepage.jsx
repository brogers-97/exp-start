import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/homepage.css'
import axios from 'axios'

export default function Homepage () {

    const [characters, setCharacters] = useState([])
    const [decks, setDecks] = useState([])
    const [saveStates, setSaveStates] = useState([])

    const [gameChar, setGameChar] = useState('')
    const [gameDeck, setGameDeck] = useState('')
    const [gameBoss, setGameBoss] = useState('')
    const [gameCharHealth, setGameCharHealth] = useState()
    const [gameBossHealth, setGameBossHealth] = useState()


    //USE EFFECTS

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/characters`
        axios.get(url)
            .then(response => {
                setCharacters(response.data.results)
            })
            .catch(console.warn)
    }, [])

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/decks`
        axios.get(url)
            .then(response => {
                setDecks(response.data.results)
            })
            .catch(console.warn)
    }, [])

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/users`
        axios.get(url)
            .then(response => {
                setSaveStates(response.data.results[0].saveState)
                console.log(response.data.results[0].saveState)
            })
    }, [])




    //FUNCTIONS

    const handleSaveStateClick = (state) => {
        const { character, deck, boss, bossHealth, characterHealth } = state
        setGameChar(character)
        setGameDeck(deck)
        setGameBoss(boss)
        setGameBossHealth(bossHealth)
        setGameCharHealth(characterHealth)
    }




    //DISPLAY FUNCTIONS

    const displayDecks = decks.map((deck, i) => {
        return (
            <option key={i}>{deck.name}</option>
        )
    })

    const displayCharacters = characters.map((character, i) => {
        return (
            <option key={i}>{character.name}</option>
        )
    })

    const displaySaveStates = saveStates.map((state, i) => {
        return (
            <div 
            key={i} 
            className='save-state'
            onClick={() => handleSaveStateClick(state)}
            >
                <p className='save-title'>{state.saveName}</p>
                <p>Character: {state.character}</p>
                <p>Boss: {state.boss}</p>
                <p>Health: {state.characterHealth}</p>
            </div>
        )
    })



    //UI RENDERING

    return (
        <div className='homepage'>

            <div className='choose-exp'>
                <h2>pick expedition</h2>
                {displaySaveStates}
                <Link to='/battle'>Start new</Link>
            </div>

            <div className='new-exp'>

                <div className='pick-character'>
                    <label for="characters">Pick a Character:</label>

                    <select name="characters" id="characters">
                        {displayCharacters}
                    </select>
                </div>

                <div className='pick-deck'>
                    <label for="decks">Pick a Deck</label>

                    <select name="decks" id="decks">
                        {displayDecks}
                    </select>
                </div>

                <button>Enter Battle</button>

            </div>
        </div>
    )
}