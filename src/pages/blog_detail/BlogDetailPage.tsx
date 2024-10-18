import { useParams } from 'react-router';

export function BlogDetailPage() {
	const { id } = useParams();

	return (
		<div>
			<h1>{id}</h1>
		</div>
	);
}
