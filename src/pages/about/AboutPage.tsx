import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setFirstName } from '../../store/features/user/userSlice';

export function AboutPage() {
	const [name, setName] = useState('');
	const dispatch = useDispatch();

	const onChangeHandler = (value: string) => {
		setName(value);
		dispatch(setFirstName(value));
	};

	return (
		<div>
			<h1>About Page</h1>
			<div style={{ margin: '0 auto', width: '500px', marginBottom: '30px' }}>
				<input type="text" value={name} placeholder={'Имя'} onChange={(e) => onChangeHandler(e.target.value)} />
			</div>
		</div>
	);
}
