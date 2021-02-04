/*
GAME RULES:

- The game has two players, playing in rounds
- In each turn, a player rolls a dice as many time as he wishes.Each result get added to his Round score.
- But, if the player rolls a 1, all his Round score gets lost.After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his Round Score gets added to his GLOBAl score.After
 that, it's the next players turn
- The first player is to reach 100 points on GLOBAl score wins the game

  */
(function() {
	var scores, roundScore, activePlayer
	scores = [0,0]
	roundScore = 0
	activePlayer = 1

	document.querySelector('.dice').style.display = 'none'

	document.querySelector('.btn-roll').addEventListener('click',() => {
		var dice = Math.floor(Math.random() * 6) + 1
		var diceDom = document.querySelector('.dice')
		diceDom.style.display = 'block'
		diceDom.src=`./assets/img/dice-${dice}.png`
	})
})()
