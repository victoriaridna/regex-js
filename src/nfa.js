const createState = isEnd => {
	return {
		isEnd,
		transition: {},
		epsilonTransitions: []
	};
}

const addEpsilonTransition = (from, to) => {
	from.epsilonTransitions.push(to);
}

const addTransition = (from, to, symbol) => {
	from.transition[symbol] = to;
}

const fromEpsilon = () => {
	const start = createState(false);
	const end = createState(true);
	addEpsilonTransition(start, end);

	return { start, end };
}

