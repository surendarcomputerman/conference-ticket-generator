var generate = document.querySelector('.generate-btn')
var containerOne = document.querySelector('.container-1')
var containerTwo = document.querySelector('.container-2')
var username = document.querySelector('.username')
var useremail = document.querySelector('.user-email')
var github = document.querySelector('.github')
var showName =document.querySelector('.names')
var showEmail =document.querySelector('.emails')
var showNames =document.querySelector('.namess')
var showEmails =document.querySelector('.emailss')
var showImg = document.querySelector('.some-img')
var userImg = document.getElementById('img-choose')
var randomNum = document.querySelector('.random-num')

generate.addEventListener('click', (e) => {
    e.preventDefault()
   var user = username.value
   var uEmail = useremail.value
   var uGithub = github.value
    var random = Math.floor(Math.random()*100000) + 1

   if(!user || !uEmail || !uGithub || !userImg) return


    showName.textContent = user
    showEmail.textContent = uEmail
    showNames.textContent = user
    showEmails.textContent = uEmail
    randomNum.textContent = `#${random}`
    showImg.src = URL.createObjectURL(userImg.files[0]);
    containerOne.style.display = 'none'
    containerTwo.style.display = 'block'

   
    console.log(random);
    
})