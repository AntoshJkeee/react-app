import IEntitiesExample from './EntitiesExample.types';
import classes from './EntitiesExample.cn';
import './EntitiesExample.scss';

export function EntitiesExample(props: IEntitiesExample) {

	const {data, cn} = props;
	const styles = classes({...cn})

	return (
		<div className={styles.block}>{data.text}</div>
	)
}
