import {toPostfix, insertExplicitConcatOperator} from './parser';
import {toNFA, search} from './builder';

const createMatcher = exp => {
	const postfixExp = toPostfix(insertExplicitConcatOperator(exp));
	const nfa = toNFA(postfixExp);

	return word => search(nfa, word);
}


