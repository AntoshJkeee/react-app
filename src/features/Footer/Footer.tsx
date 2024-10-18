import IFooter from './Footer.types';
import classes from './Footer.cn';
import './Footer.scss';

export function Footer(props: IFooter) {
	const { cn } = props;
	const styles = classes({ ...cn });

	return <footer className={styles.block}>FOOTER</footer>;
}
