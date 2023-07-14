ort React from "react";


export default function Meme()
{
    
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))

    }, [])

    function getMemeImage ()
    {
        //const memesArrays = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length) + 1
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...meme,
            randomImage: url
        }))
    }