const signupbutton = document.getElementById('signup')
const signbutton = document.getElementById('signin')
const container = document.getElementById('container')


signupbutton.addEventListener('click' , () => {
    container.classList.add("right-panel-active")
})

signbutton.addEventListener('click' , () => {
    container.classList.remove("right-panel-active")
})