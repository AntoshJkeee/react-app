import IEntitiesExample from './EntitiesExample.types';
import './EntitiesExample.scss';
import classes from './EntitiesExample.cn';

export function EntitiesExample(props: IEntitiesExample) {

	const {data, cn} = props;
	const styles = classes({...cn})

	return (
		<div className={styles.block}>{data.text}</div>
	)
}
