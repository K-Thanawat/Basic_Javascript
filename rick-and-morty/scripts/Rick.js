const btnfind = document.getElementById('find-btn')
const inputname = document.getElementById('input-name')
const cname = document.getElementById('c-name')
const ctype = document.getElementById('c-type')
const cimg = document.getElementById('c-img')

btnfind.addEventListener('click', async () => {
    try {
        const input = inputname.value
        const url = `https://rickandmortyapi.com/api/character?name=${input}`
        const response = await(await fetch(url)).json()

        if(!response.results){
            throw {message: `${input} not found`}
        }

        if(!response.results?.length){
            throw {message: `${input} not found`}
        }
        const c = response.results[0]

        cname.innerHTML = c.name
        ctype.innerHTML = c.species
        cimg.src = c.image
    }catch(error){
        window.alert(`[ERROR] => ${error.message}`)
    }finally{
        inputname.value = ''
    }
})

