import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/battlefield.css'

export default function Battlefield ({gameChar, gameDeck, gameBoss, saveName, gameCharHealth,setGameCharHealth, gameBossHealth, setGameBossHealth}) {

    const [attacks, setAttacks] = useState([])

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/decks`
        axios.get(url)
            .then(response => {
                const foundDeck = response.data.results.find(deck => deck.deckId === gameDeck)
                console.log(foundDeck)
                console.log(gameDeck)
                setAttacks(foundDeck.cards)
            })
            .catch(console.warn)
    }, [])



    //FUNCTIONS

    const handleAttackClick = (dmg) => {
        setGameBossHealth((prevHealth) => prevHealth - dmg)
    }

    const handleSaveBtn = () => {
        const saveData = {
            saveName: saveName,
            gameCharHealth: gameCharHealth,
            gameBossHealth: gameBossHealth,
        }
        axios.put('users/update-save-state', saveData)
        .then((response) => {
            console.log('save success', response.data)
        })
        .catch((err) => {
            console.error('save error', err)
        })
    }



    const displayAttacks = attacks.map((attack, i) => {
        return(
            <div onClick={() => handleAttackClick(attack.damage)} className='attack-option-card' key={i}>
                <p>{attack.attack} = {attack.damage}</p>
                <p>{attack.description}</p>
            </div>
        )
    })

    return (
        <div className='main-battle-div'>
            <button 
            onClick={() => handleSaveBtn()} 
            className='quit-btn'>
                save and quit
            </button>
            <h1 className='boss-stat-bar'>
                {gameBossHealth <= 0 ? `${gameBoss} has been defeated` : `${gameBoss}: ${gameBossHealth}`}
            </h1>
            <img className='boss-img' src={`/assets/${gameBoss}.webp`} alt={gameBoss} />
            <div className='attack-selection-box'>
                {displayAttacks}
            </div>
        </div>
    )
}