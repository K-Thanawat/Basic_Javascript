const addButton = document.getElementById('enter')
const userinput = document.getElementById('userInput')
const ul = document.querySelector('ul')

const todo = []

const addInput = (input) => {
    if(input){
    todo.push(input)
    }
}

const createList = () => {
    addInput(userinput.value)

    while(ul.firstChild){
        ul.removeChild(ul.lastChild)
    }
    todo.forEach((todo) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(todo))
        ul.appendChild(li)

        userinput.value = ''

        const doneTask = () => {
            li.classList.toggle('done')
        }
        li.addEventListener('click', doneTask)

        const deleteBtn = document.createElement('button')
        deleteBtn.appendChild(document.createTextNode('X'))
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            li.classList.add('delete')
        })
    })
}
addButton.addEventListener('click', createList)