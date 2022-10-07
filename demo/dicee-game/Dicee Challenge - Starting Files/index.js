


const firstDiceEl=document.querySelector('.img1')
const secondDiceEl=document.querySelector('.img2')
const bannerEl= document.querySelector('h1')

const random1=Math.ceil(Math.random()*6)
const random2=Math.ceil(Math.random()*6)




firstDiceEl.setAttribute('src','images/dice'+ random1 +'.png')
secondDiceEl.setAttribute('src','images/dice'+ random2 +'.png')

 bannerEl.innerText= random1 > random2 ? 'Player 1 Wins' : random1==random2 ? 'Draw' : 'Player 2 Wins'