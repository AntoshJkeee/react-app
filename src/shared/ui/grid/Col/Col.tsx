import './Col.scss';

import classes from './Col.cn';
import ICol from './Col.types';
import { useClassName } from '../../../hooks';

export function Col(props: ICol) {
	// # ЛОГИКА КОМПОНЕНТА # //
	const { children, cn, className } = props;

	// # ПОЛУЧЕНИЕ CSS КЛАССОВ КОМПОНЕНТА # //
	const styles = classes({ ...cn });

	// # ВЕРСТКА КОМПОНЕНТА # //
	return <div className={useClassName(styles.block, className)}>{children}</div>;
}
