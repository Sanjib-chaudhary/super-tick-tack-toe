let cellHTML = '';

for(let i = 0; i < 3; i++){
	for(let j = 0; j < 3; j++){
		cellHTML += `
		<div class="cell js-cell js-${i}${j}" data-cell-id="${i}${j}"></div>
		`;
	}
	cellHTML += `
	
	`;
}

let smallTableHTML = '';
	
for(let i = 0; i < 3; i++ ){
	for(let j = 0; j < 3; j++){
		smallTableHTML +=`
			<div class="small-table js-small-table js-small-table-${i}${j}" data-small-table-id="${i}${j}" data-big-row="${i}" data-big-column="${j}">
				${cellHTML}
			</div>
		`;
	}
}

document.querySelector('.big-table').innerHTML = smallTableHTML;
