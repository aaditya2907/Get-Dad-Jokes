const btn = document.querySelector(".button")
const jokesDisplay = document.querySelector(".jokes")


const getDad = async() =>{
    
    const config = {headers : {Accept : 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    const newLI = document.createElement('li')
    newLI.append(res.data.joke)
    jokesDisplay.append(newLI);
}
btn.addEventListener('click',getDad)
