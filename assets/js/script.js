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
	var scores, roundScore, activePlayer, gamePlaying
	init()

	document.querySelector('.btn-roll').addEventListener('click',() => {
		if(gamePlaying) {
			var dice = Math.floor(Math.random() * 6) + 1
			var diceDom = document.querySelector('.dice')
			diceDom.style.display = 'block'
			diceDom.src=`./assets/img/dice-${dice}.png`

			if(dice !== 1) {
				roundScore += dice
				document.querySelector(`#current-${activePlayer}`).textContent = roundScore
			} else {
				nextPlayer()
			}
		}
	})

	document.querySelector('.btn-hold').addEventListener('click', () => {
		if(gamePlaying) {
			scores[activePlayer] += roundScore
			document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]

			if(scores[activePlayer] >= 100) {
				document.querySelector(`#name-${activePlayer}`).innerText = 'Winner!'
				document.querySelector('.dice').style.display = 'none'
				document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
				document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
				gamePlaying = false;
			} else {
				nextPlayer()
			}
		}
	})

	document.querySelector('.btn-new').addEventListener('click', init)

	function init() {
		scores = [0, 0]
		roundScore = 0
		activePlayer = 0
		gamePlaying = true
		document.querySelector('.dice').style.display = 'none'

		document.getElementById('score-0').textContent   = '0'
		document.getElementById('score-1').textContent   = '0'
		document.getElementById('current-0').textContent = '0'
		document.getElementById('current-1').textContent = '0'
		document.getElementById('name-0').textContent = 'Player 1'
		document.getElementById('name-1').textContent = 'Player 2'
		document.querySelector('.player-0-panel').classList.remove('winner')
		document.querySelector('.player-1-panel').classList.remove('winner')
		document.querySelector('.player-0-panel').classList.remove('active')
		document.querySelector('.player-1-panel').classList.remove('active')
		document.querySelector('.player-0-panel').classList.add('active')
	}

	function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
		roundScore = 0
		document.getElementById('current-0').textContent = '0'
		document.getElementById('current-1').textContent = '0'

		document.querySelector('.player-0-panel').classList.toggle('active')
		document.querySelector('.player-1-panel').classList.toggle('active')
		document.querySelector('.dice').style.display = 'none'
	}
})()
