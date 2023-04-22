// was developed by @lala0419  and @IrinaGM

const transpose = (matrix) => {
	let resultArr = [];
	let placeholderArray = [];

	// loop over the matrix where the outer loop is the column and the inner loop is the row
	for (let c = 0; c < matrix[0].length; c++) {
		for (let r = 0; r < matrix.length; r++) {
			placeholderArray.push(matrix[r][c]);
		}
		resultArr.push(placeholderArray);
		placeholderArray = []; // when we finish running over the row, reset the placeholderArray
	}
	return resultArr;
};

const wordSearch = (letters, word) => {
	if (letters.length === 0 || word === "") {
		return undefined;
	}

	const horizontalJoin = letters.map((ls) => ls.join(""));
	for (let joinedWordH of horizontalJoin) {
		if (joinedWordH.includes(word)) {
			return true;
		}
	}

	const verticalJoin = transpose(letters).map((ls) => ls.join(""));
	for (let joinedWordV of verticalJoin) {
		if (joinedWordV.includes(word)) {
			return true;
		}
	}

	return false;
};

module.exports = wordSearch;
