import IFeaturesExample from './FeaturesExample.types';
import './FeaturesExample.scss';
import classes from './FeaturesExample.cn';

export function FeaturesExample(props: IFeaturesExample) {

	const {data, cn} = props;
	const styles = classes({...cn})

	return (
		<div className={styles.block}>{data.text}</div>
	)
}
