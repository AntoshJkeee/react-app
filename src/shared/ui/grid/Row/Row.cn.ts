import CN from '../../../lib/ClassBem';
import IRow from './Row.types';

export default function classes(cn: IRow['cn']) {
	// определение блока по BEM
	const BLOCK = CN('row');

	// определение классов css
	return {
		block: BLOCK({}, [
			cn?.justify,
			cn?.alignItems,
			cn?.alignContent,
			cn?.gap,
			cn?.gutters,
			cn?.margin,
			cn?.direction,
			cn?.display,
			cn?.padding,
			cn?.alignSelf,
			cn?.height,
		]),
	};
}
