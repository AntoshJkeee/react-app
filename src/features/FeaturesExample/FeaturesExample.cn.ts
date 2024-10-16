import CN from '../../shared/lib/ClassBem';
import IFeaturesExample from './FeaturesExample.types';

export default function classes(cn: IFeaturesExample['cn']) {
	const BLOCK = CN('features-example');

	return {
		block: BLOCK({}, [cn?.padding]),
	}
}
