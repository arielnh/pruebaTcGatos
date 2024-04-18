import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const Word = fact.split(' ', 2).join(' ')
    setImageUrl(`https://cataas.com/cat/says/${Word}?fontSize=50&fontColor=white`)
  }, [fact])
  return { imageUrl }
}
