import IContainer from './Container.types';
import './Container.scss';
import classes from './Container.cn';
import { useClassName } from '../../../hooks';

export function Container(props: IContainer) {
	// # ЛОГИКА КОМПОНЕНТА # //
	const { cn, className, children } = props;

	// # ПОЛУЧЕНИЕ CSS КЛАССОВ КОМПОНЕНТА # //
	const styles = classes({ ...cn });

	// # ВЕРСТКА КОМПОНЕНТА # //
	return <div className={useClassName(styles.block, className)}>{children}</div>;
}

export default Container;
