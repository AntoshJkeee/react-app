import CN from '../../../lib/ClassBem';
import ICol from './Col.types';

export default function classes(cn: ICol['cn']) {
	// логика классов
	const cols = cn?.cols ? cn.cols : 'col-12';

	// определение блока по BEM
	const BLOCK = CN('col');

	// определение классов css
	return {
		block: BLOCK({}, [
			cols,
			cn?.offset,
			cn?.order,
			cn?.justify,
			cn?.alignSelf,
			cn?.margin,
			cn?.padding,
			cn?.display,
			cn?.direction,
			cn?.gap,
			cn?.flexWrap,
		]),
	};
}
