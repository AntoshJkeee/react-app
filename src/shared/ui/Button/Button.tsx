import IButton from './Button.types';
import classes from './Button.cn';
import './Button.scss';

export function Button(props: IButton) {

	const {data, cn} = props;
	const styles = classes({...cn})

	return <button className={styles.block}>{data.text}</button>
}
