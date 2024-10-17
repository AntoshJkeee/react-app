import IWidgetsExample from './WidgetsExample.types';
import './WidgetsExample.scss';
import classes from './WidgetsExample.cn';
import { EntitiesExample } from '../../entities';
import { Container, Row, Col } from '../../shared/ui';

export function WidgetsExample(props: IWidgetsExample) {
	const { data, cn } = props;
	const styles = classes({ ...cn });

	return (
		<section className={styles.block}>
			<Container>
				<Row>
					<Col>
						<div className={styles.elementSomeWrapper}>
							<span>{data.text}</span>
							<div className={styles.elementWrapper}>
								<EntitiesExample data={{ text: 'Entities Example' }} />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
