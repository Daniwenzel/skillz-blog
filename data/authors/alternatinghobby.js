import { useState, useEffect } from 'react'

const wordList = [
  'Jogos',
  'Músicas',
  'Séries',
  'Filmes',
  'Futebol',
  'Academia',
  'Café',
  'História',
  'Geografia',
  'Astronomia',
]

const AlternatingWord = () => {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex) => (wordIndex + 1) % wordList.length)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <span>
      {wordList.map((word, index) => (
        <span
          key={index}
          style={{
            display: index === wordIndex ? 'inline' : 'none',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default AlternatingWord
