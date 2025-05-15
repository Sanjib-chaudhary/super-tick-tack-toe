/*

// let gameGoing = 1;
// let move = 'X';
// let player = 'Player' + move;
// const allButtonElement = document.querySelectorAll('.js-cell');

// const smallCell = [['', '', ''],['', '', ''],['', '', '']];
// const bigCell = []

// const cell = [];
// initialize cell to '' i.e. empty
// for(let i = 0; i < 3; i++){
	// cell[i] = [];
	// for(let j = 0; j < 3; j++){
		// cell[i][j] = [];
		// for(let k = 0; k < 3; k++){
			// cell[i][j][k] = [];
			// for(let l = 0; l < 3; l++){
				// cell[i][j][k][l] = '';
			// }
		// }
	// }
// }


// document.querySelector('.js-player') //show current Player
	// .innerHTML = player;

// document.querySelectorAll('.js-cell')
	// .forEach((cell) => {
		// cell.addEventListener('click', () => {
			// cellUpdate(cell);
		// });
	// });
	
// function cellUpdate(cell){
		// const cellDataSet = cell.dataset;
		// const bigRow = cellDataSet.bigRow;
		// const bigColumn = cellDataSet.bigColumn;
		// const smallRow = cellDataSet.smallRow;
		// const smallColumn = cellDataSet.smallColumn;
		// const cellId =  bigRow + bigColumn + smallRow + smallColumn;
		// const cellElement = document.querySelector(`.js-${cellId}`);
		
		
		// if(gameGoing) playerAndMoveUpdate(cellElement, bigRow, bigColumn, smallRow, smallColumn); //play if game is not done
		
		// document.querySelector('.js-player') //shows current player
			// .innerHTML = player;
		
		// let res = smallTableResult(); 
		
		// show result if result returned 
		// if(res){
			// document.querySelector('.js-result').innerHTML = `Result: ${res}`;
			// gameGoing = 0;  
		// }
// }
	
// function playerAndMoveUpdate(buttonElement, bigRow, bigColumn, smallRow, smallColumn){
	
	// if(!buttonElement.innerHTML){
		// buttonElement.innerHTML = `${move}`;
		// cell[bigRow][bigColumn][smallRow][smallColumn] = move;
		// if( move === 'X'){
			// cell[bigRow][bigColumn][smallRow][smallColumn] = move;
			// move = 'O';
		// } else if(move === 'O'){
			// cell[bigRow][bigColumn][smallRow][smallColumn] = move;
			// move = 'X';
		// }
		// player = 'Player' + move;
	
	// } else {
		// cell[bigRow][bigColumn][smallRow][smallColumn] = buttonElement.innerHTML;
	// }
// }

// function smallTableResult(){
	
	// Check each row 
	// for(let i = 0; i < 3; i++){
		// if(cell[i][0] === 'O' && cell[i][1] === 'O' && cell[i][2] === 'O' ){
			// return 'PlayerO wins'; 
		
		// } else if(cell[i][0] === 'X' && cell[i][1] === 'X' && cell[i][2] === 'X' ){
			// return 'PlayerX wins'; 
		// }
	
	// }
	
	// check each column
	// for(let i = 0; i < 3; i++){
		// if(cell[0][i] === 'O' && cell[1][i] === 'O' && cell[2][i] === 'O' ){
			// return 'PlayerO wins'; 
		
		// } else if(cell[0][i] === 'X' && cell[1][i] === 'X' && cell[2][i] === 'X' ){
			// return 'PlayerX wins'; 
		// }
	
	// }
	
	check '\' diagonal
	// if(cell[0][0] === 'O' && cell[1][1] === 'O' && cell[2][2] === 'O' ){
		// return 'PlayerO wins'; 
		
	// } else if(cell[0][0] === 'X' && cell[1][1] === 'X' && cell[2][2] === 'X' ){
		// return 'PlayerX wins'; 
		
	// } 
	
	// Check '/' diagonal
	// if(cell[2][0] === 'O' && cell[1][1] === 'O' && cell[0][2] === 'O' ){
		// return 'PlayerO wins'; 
		
	// } else if(cell[2][0] === 'X' && cell[1][1] === 'X' && cell[0][2] === 'X' ){
		// return 'PlayerX wins'; 
		
	// }
	
	// checks if cell is full 
	// const cellFull = cell.flat().every((value) => value );
	
	// if(cellFull){
		// return 'tie';
	// }	

// }
*/


	const allButtonElement = document.querySelectorAll('.js-cell-');
	const cell = [['', '', ''],['', '', ''],['', '', '']];
	let gameGoing = 1;
	let move = 'X';
	let player = 'Player' + move;


	document.querySelector('.js-player') //show current Player
		.innerHTML = player;

	allButtonElement.forEach((button) => {
			button.addEventListener('click', () => {
				cellUpdate(button);
			});
	});



	function cellUpdate(button){
		const {row} = button.dataset;
			const {column} = button.dataset;
			const buttonElement = document.querySelector(`.js-${row+column}`);
			
			
			if(gameGoing) playerAndMoveUpdate(buttonElement, row, column); //play if game is not done
			
			document.querySelector('.js-player') //shows current player
				.innerHTML = player;
			
			let res = result(); 
			
			//show result if result returned 
			if(res){
				document.querySelector('.js-result').innerHTML = `Result: ${res}`;
				gameGoing = 0;  
			}
	}




	function playerAndMoveUpdate(buttonElement, row, column){
		
		if(!buttonElement.innerHTML){
			buttonElement.innerHTML = `${move}`;
			cell[row][column] = move;
			if( move === 'X'){
				cell[row][column] = move;
				move = 'O';
			} else if(move === 'O'){
				cell[row][column] = move;
				move = 'X';
			}
			player = 'Player' + move;
		
		} else {
			cell[row][column] = buttonElement.innerHTML;
		}
	}

	function result(){
		
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
}


const bigCellElement = document.querySelectorAll('.js-big-cell');
let bigCellId = '';

console.log(bigCellElement);
bigCellElement.forEach((bigCell) => {
	bigCell.addEventListener('click', () => {
		decideBigCellToPlay(bigCell);
		
		smallTablePlay();
		
		bigCellId = smallRow + smallColumn;
		document.querySelector(`.js-big-cell-${bigCellId}`)
			.classList.add('js-playable');
		
		
		if()
		
	});
});

function decideBigCellToPlay(bigCell){
	bigCellId = bigCell.dataset.bigCellId;
}






