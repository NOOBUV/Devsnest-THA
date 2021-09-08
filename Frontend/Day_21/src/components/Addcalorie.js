import React, {useState} from 'react'

export default function AddItemForm({ addItem }) {
	const [title, setTitle] = useState('');
	const [calorie, setCalorie] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addItem({ title, calorie });
		setTitle('');
		setCalorie('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='d-flex flex-column justify-content-center my-3 mx-auto'>
			<div className='d-flex justify-content-center mb-2 '>
				<div className='me-3'>
					<label htmlFor='title' className='form-label visually-hidden'>
						Title
					</label>
					<input
						type='text'
						name='title'
						id='title'
						required
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Item name'
					/>
				</div>
				<div>
					<label htmlFor='calorie' className='form-label visually-hidden'>
						Calorie
					</label>
					<input
						type='number'
						name='number'
						id='number'
						required
						value={calorie}
						onChange={e => setCalorie(e.target.value)}
						placeholder='Calorie amount'
					/>
				</div>
			</div>
			<button type='submit' className='btn btn-primary mx-auto'>
				Add Item
			</button>
		</form>
	);
}