import CN from '../../shared/lib/ClassBem';

export default function classes() {
	const BLOCK = CN('header');

	return {
		block: BLOCK(),
		elementLink: BLOCK('link'),
	};
}
