import './Row.scss';
import classes from './Row.cn';
import IRow from './Row.types';
import { useClassName } from '../../../hooks';

export function Row(props: IRow) {
	// # ЛОГИКА КОМПОНЕНТА # //
	const { children, cn, className } = props;

	// # ПОЛУЧЕНИЕ CSS КЛАССОВ КОМПОНЕНТА # //
	const styles = classes({ ...cn });

	// # ВЕРСТКА КОМПОНЕНТА # //
	return <div className={useClassName(styles.block, className)}>{children}</div>;
}
