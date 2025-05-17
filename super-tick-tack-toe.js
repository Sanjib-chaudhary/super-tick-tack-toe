//bigCell is the small tick-tack-toe 
//smallCell are the place where we put move (X , O)

let move = 'X';
let player = 'Player' + move; //current player
let gameGoing = 1;
const bigCellElement = document.querySelectorAll('.js-big-cell'); //all those "td" of big table
const smallCellElement = document.querySelectorAll('.js-small-cell'); // all the small cell 

let smallResult = []; 

smallResult = createEmptyArray(smallResult); //array of all the results of small games initialized at '' at first

bigCellElement.forEach((bigCell) => { 
	bigCell.classList.add('playable'); //makes all the bigCell playable at start
});

document.querySelector('.js-player') //shows current player
	.innerHTML = player;

smallCellElement.forEach((smallCell) => {
	smallCell.addEventListener('click', () => {
		
		const containerId = smallCell.dataset.bigRow + smallCell.dataset.bigColumn;  //gets the Id of the container which contains the clicked smallCell
		const containerElement = document.querySelector(`.js-big-cell-${containerId}`); //gets the whole element of the container
		
		if(containerElement.classList.contains('playable') && gameGoing){ //checks if the small tick-tack-toe(container) is playable
			
			const bigCellId = chooseMove(smallCell);
			
			const contentArray = createCellContentArray(containerElement);
			const smallCellResult = result(contentArray); //check result for the smallCell where the move was just made
			
			if(smallCellResult){
				if(smallCellResult === 'PlayerX wins'){
					containerElement.innerHTML = 'X';
				
				} else if(smallCellResult === 'PlayerO wins'){
					containerElement.innerHTML = 'O';
				
				} else{
					containerElement.innerHTML = 'TIE';
				}
				containerElement.classList.add('not-playable');
				containerElement.classList.add('resolved');
				containerElement.classList.remove('playable');
				playableTable(bigCellId);
				
				const row = Number(smallCell.dataset.bigRow);
				const column = Number(smallCell.dataset.bigColumn);
				
				smallResult[row][column] = containerElement.innerHTML; 				 //stores the results of all mini game on array based on their container location/Id
				
				const gameResult = result(smallResult);
				if(gameResult){
					document.querySelector('.js-result').innerHTML = `Result: ${gameResult}`;
					gameGoing = 0;
					
					//makes all the remaning unfinished small game red
					bigCellElement.forEach((bigCell) => { 
						if(!bigCell.classList.contains('resolved')){ //if the small game is not finished then add non-playable to make it red
							bigCell.classList.remove('playable')
							bigCell.classList.add('not-playable'); //makes all the bigCell playable at start 
						}
					});
				}
			}
		}

		
		document.querySelector('.js-player') //shows current player
			.innerHTML = player;
	
	});
});


function chooseMove(smallCell){
	if(!smallCell.innerHTML){ //if cell empty 
		smallCell.innerHTML = `${move}`;
		if( move === 'X'){
			move = 'O';
		} else if(move === 'O'){
			move = 'X';
		}
		player = 'Player' + move;

		const smallCellId = smallCell.dataset.smallRow + smallCell.dataset.smallColumn;
		const bigCellId = smallCellId;  //choose small tick-tack-toe based on the move 
		playableTable(bigCellId);
		
		return bigCellId;
	}
}

function playableTable(bigCellId){	//adds playable and non-playable to the necessary small tick-tack-toe

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
	
	if(document.querySelector(`.js-big-cell-${bigCellId}`).classList.contains('resolved')){ //checks if the tick-tack-toe is already resolved i.e can't be played any more
		bigCellElement.forEach((bigCell) => { 
			bigCell.classList.add('playable'); //makes all the bigCell playable at start 
		});
	}
}

function result(cell){

	//Check each row 
	for(let i = 0; i < 3; i++){
		
		if(cell[i][0] === 'O' && cell[i][1] === 'O' && cell[i][2] === 'O' ){
			return 'PlayerO wins'; 
		
		} else if(cell[i][0] === 'X' && cell[i][1] === 'X' && cell[i][2] === 'X' ){
			return 'PlayerX wins'; 
		}
	
	}
	
	//check each column
	for(let i = 0; i < 3; i++){
		if(cell[0][i] === 'O' && cell[1][i] === 'O' && cell[2][i] === 'O' ){
			return 'PlayerO wins'; 
		
		} else if(cell[0][i] === 'X' && cell[1][i] === 'X' && cell[2][i] === 'X' ){
			return 'PlayerX wins'; 
		}
	
	}
	
	//check '\' diagonal
	if(cell[0][0] === 'O' && cell[1][1] === 'O' && cell[2][2] === 'O' ){
		return 'PlayerO wins'; 
		
	} else if(cell[0][0] === 'X' && cell[1][1] === 'X' && cell[2][2] === 'X' ){
		return 'PlayerX wins'; 
		
	} 
	
	//Check '/' diagonal
	if(cell[2][0] === 'O' && cell[1][1] === 'O' && cell[0][2] === 'O' ){
		return 'PlayerO wins'; 
		
	} else if(cell[2][0] === 'X' && cell[1][1] === 'X' && cell[0][2] === 'X' ){
		return 'PlayerX wins'; 
		
	}
	
	//checks if cell is full 
	const cellFull = cell.flat().every((value) => value );
	
	if(cellFull){
		return 'tie';
	}	

}

function createCellContentArray(containerElement){	//puts the content of cell in 2D Array for the small tick-tack-toe
	let cellElement;
	let cellContent = [];
	
	cellContent = createEmptyArray(cellContent);
	
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			cellElement = containerElement.querySelector(`.js-${i}${j}`); //selects specific the button on the container based on the cell Id
			cellContent[i][j] = cellElement.innerHTML;
		}
	}
	return cellContent;
}

function createEmptyArray(array){
	for(let i = 0; i < 3; i++){
		array[i] = [];
		for(let j = 0; j < 3; j++){
			array[i][j] = '';
		}
	}
	return array;
}
