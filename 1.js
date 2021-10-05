const playerscores = [
  {id: 5, roundscores: [1, 1, 1, 0]},
  {id: 2, roundscores: [-2, -1, -1, -1]},
  {id: 6, roundscores: null},
  {id: 3, roundscores: [0, 0, -2, -1]},
  {id: 4, roundscores: [0, 0, -1, -1]},
  {id: 1, roundscores: [1, 0, -2, -1]},
];

const playernames = [
  {id: 4, name: "Bob"},
  {id: 5, name: "Ann"},
  {id: 1, name: "Joe"},
  {id: 2, name: "Sue"},
  {id: 3, name: "Jane"},
  {id: 6, name: "Larry"},
];

const generateLeaderBoard = (scores, names) => {
	let minScore = null;
	const board = scores.reduce((filtered, score) => {
		if (score.roundscores !== null) {
			filtered[score.id] = {
				id: score.id,
				score: score.roundscores.reduce((a, b) => a + b, 0),
			};
		}
		return filtered;
	}, {});

	names.forEach((name) => {
		if (board[name.id] !== undefined) {
			board[name.id].name = name.name;
		}
	});

	let result = Object.values(board);

	result.sort((a, b) => a.score - b.score);
	result = result.map((item) => {
		if (item.score === result[0].score) {
			return { ...item, winner: true };
		}
		return { ...item, winner: false };
	});

	return result;
};

console.log(generateLeaderBoard(playerscores, playernames));