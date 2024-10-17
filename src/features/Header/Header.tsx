// import IHeader from './Header.types';
import './Header.scss';
import classes from './Header.cn';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../shared/constants/routes';

export function Header() {
	// const {data} = props;
	const styles = classes();

	return (
		<>
			<header className={styles.block}>
				<Link to={ROUTER_PATHS.HOME}>HOME</Link>
				<Link to={ROUTER_PATHS.BLOG}>BLOG</Link>
				<Link to={ROUTER_PATHS.ABOUT}>ABOUT</Link>
			</header>
		</>
	);
}
