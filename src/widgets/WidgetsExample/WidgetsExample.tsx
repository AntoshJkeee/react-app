import IWidgetsExample from './WidgetsExample.types';
import './WidgetsExample.scss';
import classes from './WidgetsExample.cn';

export function WidgetsExample(props: IWidgetsExample) {

	const {data, cn} = props;
	const styles = classes({...cn})

	return (
		<div className={styles.block}>{data.text}</div>
	)
}
