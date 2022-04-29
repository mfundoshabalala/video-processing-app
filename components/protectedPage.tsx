// package import(s)
import { useState } from 'react';
// component import(s)
import Input from './Input';
import Button from './Button';
import Header from './Header';
import FlexBox from './FlexBox';
import Container from './Container';

const ProtectedPage: ChildrenInterface = ({ children }) => {
	const isLoggedIn = false;
	const [appId, setAppId] = useState('');
	const [appSecret, setAppSecret] = useState('');

	function handleInputChange(state: 'id' | 'secret') {
		return (event: any) => {
			if (state === 'id') {
				return setAppId(event?.target.value);
			}

			if (state === 'secret') {
				return setAppSecret(event?.target.value);
			}
		};
	}

	return (
		<>
			<Header />
			{!isLoggedIn ? (
				<Container>
					<FlexBox className="max-w-md mx-auto">
						<h1 className="text-center text-3xl font-bold">Login Page</h1>
						<Input
							id="appId"
							type="text"
							name="appId"
							value={appId}
							placeholder="App Id"
							onChange={handleInputChange('id')}
						/>
						<Input
							id="appSecret"
							type="password"
							name="appSecret"
							value={appSecret}
							placeholder="App Secret"
							onChange={handleInputChange('secret')}
						/>
						<Button type="submit" name="Login" color="bg-slate-900 text-white" />
					</FlexBox>
				</Container>
			) : (
				children
			)}
		</>
	);
};

export default ProtectedPage;
