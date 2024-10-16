import classes from './About.cn';
import { Button, Col, Container, Row } from '../../shared/ui';
import { EntitiesExample } from '../../entities';
import { FeaturesExample } from '../../features';

export default function About({ name }: { name: string }) {

	const styles = classes();

	return (
		<div className={styles.block}>
			<Container>
				<Row>
					<EntitiesExample data={{ text: 'Entities Example' }} />
					<FeaturesExample data={{ text: 'Features Example' }} />
					<Col cn={{ cols: 'col-4'}}>
						<div>{name}</div>
						<Button data={{ text: 'Кнопка' }} />
					</Col>
					<Col cn={{ cols: 'col-4'}}>
						<div>{name}</div>
						<Button data={{ text: 'Кнопка' }} />
					</Col>
					<Col cn={{ cols: 'col-4'}}>
						<div>{name}</div>
						<Button data={{ text: 'Кнопка' }} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
