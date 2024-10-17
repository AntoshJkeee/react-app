import IEntitiesExample from './EntitiesExample.types';
import './EntitiesExample.scss';
import classes from './EntitiesExample.cn';
import { Button } from '../../shared/ui';

export function EntitiesExample(props: IEntitiesExample) {
	const { data, cn } = props;
	const styles = classes({ ...cn });

	return (
		<div className={styles.block}>
			<span>{data.text}</span>
			<div className={styles.elementWrapper}>
				<div className={styles.elementSharedWrapper}>
					<div className={styles.elementButtonWrapper}>
						<Button data={{ text: 'Кнопка 1' }} />
						<Button data={{ text: 'Кнопка 2' }} />
						<Button data={{ text: 'Кнопка 3' }} />
					</div>
					<div className={styles.elementTextWrapper}>
						<span>Shared Example</span>
					</div>
				</div>
			</div>
		</div>
	);
}
