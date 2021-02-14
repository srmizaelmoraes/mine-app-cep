const submitButton = document.querySelector('#app form button')
const zipCodeFile = document.querySelector('#app form input')
const content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()
    console.log(zipCodeFile.value)
}