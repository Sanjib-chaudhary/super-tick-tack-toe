const cell = '<button>x</button>';
let smallTableRow = '';
let smallTable = '';
let bigTableRow = '';
let bigTable = '';

function STR(){
	for(let smallColumn = 0; smallColumn < 3; smallColumn++){
		smallTableRow += `
			<td>
				${cell}
			</td>`;
	}
	return smallTableRow;
}


function ST(){
	for(let smallRow = 0; smallRow < 3; smallRow++){
		smallTable += `
			<table>
				<tr>
					${smallTableRow}
				</tr>
				</table>`;
	}
	return smallTable;
}

function BTR() {
	for(let bigColumn = 0; bigColumn < 3; bigColumn++){
		bigTableRow +=`
			<td>
				
					${smallTable}
				
			</td>`;
	}
	return bigTableRow;
}

function BT(){
	for(let bigRow = 0; bigRow < 3; bigRow++){
		bigTable += `
			<table>
				<tr>
					${bigTableRow}
				</tr>
			</table>`;
	}
	return bigTable;
}

STR();
ST();
BTR();
BT();		

document.querySelector('.js-playing-table').innerHTML = bigTable;
console.log(bigTableRow);