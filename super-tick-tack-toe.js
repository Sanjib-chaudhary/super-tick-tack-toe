//bigCell is the small tick-tack-toe 
//smallCell are the place where we put move (X , O)

const bigCellElement = document.querySelectorAll('.js-big-cell'); //all those "td" of big table
const smallCellElement = document.querySelectorAll('.js-small-cell'); // all the small cell 
let move = 'X';
let player = 'Player' + move; //current player

bigCellElement.forEach((bigCell) => { 
	bigCell.classList.add('playable'); //makes all the bigCell playable at start
});



document.querySelector('.js-player') //shows current player
	.innerHTML = player;


smallCellElement.forEach((smallCell) => {
	smallCell.addEventListener('click', () => {
		
		containerCellId = smallCell.dataset.bigRow + smallCell.dataset.bigColumn;  //gets the Id of the container which contains the clicked smallCell
		containerCellElement = document.querySelector(`.js-big-cell-${containerCellId}`); //gets the whole element of the container
		
		if(containerCellElement.classList.contains('playable')){ //checks if the small tick-tack-toe(container) is playable
			chooseMove(smallCell);	
		}
		
		document.querySelector('.js-player') //shows current player
		.innerHTML = player;
	
	});
});


function chooseMove(smallCell){
	// console.log(!smallCell.innerHTML)
	if(!smallCell.innerHTML){ //if cell empty 
		smallCell.innerHTML = `${move}`;
		if( move === 'X'){
			move = 'O';
		} else if(move === 'O'){
			move = 'X';
		}
		player = 'Player' + move;

		smallCellId = smallCell.dataset.smallRow + smallCell.dataset.smallColumn;
		console.log(smallCellId);
		bigCellId = smallCellId;  //choose small tick-tack-toe based on the move 
		playableTable();
	}

}

function playableTable(){ //adds playable and non-playable to the necessary small tick-tack-toe
	bigCellElement.forEach((bigCell) => {
		const cellId = bigCell.dataset.bigCellId;
		if(cellId !== bigCellId){ //removes the existing 'playable' class and adds 'non-playable' class if the small tick-tack-toe is playable
			bigCell.classList.remove('playable'); 
			bigCell.classList.add('not-playable');
		
		} else{
			bigCell.classList.remove('not-playable');
			bigCell.classList.add('playable');
		}
	});
}



// also make sure the result is returned for the TIEs in / \ - | line 
//reuse the tick-tack-toe code as much as possible and viable








