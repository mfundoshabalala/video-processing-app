// package import(s)
import { useCallback, useContext, useState } from 'react';
// component import(s)
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Header from './Header';
import FlexBox from './FlexBox';
import Container from './Container';
import { AuthContext } from 'hooks/useAuth';
// hooks import(s)
// import { useAuth } from 'hooks/useAuth';

const ProtectedPage: ChildrenInterface = ({ children }) => {
	const auth = useContext(AuthContext);
	const [appId, setAppId] = useState('');
	const [appSecret, setAppSecret] = useState('');
	const isLoggedIn = auth?.token;

	const handleInputChange = useCallback((state: 'id' | 'secret') => {
		return (event: any) => {
			if (state === 'id') {
				setAppId(event?.target.value);
			}

			if (state === 'secret') {
				setAppSecret(event?.target.value);
			}
		};
	}, []);

	const loginToSymbl = async () => {
		const response = await fetch('https://api.symbl.ai/oauth2/token:generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
			body: JSON.stringify({
				type: 'application',
				appId,
				appSecret,
			}),
		});
		const json = await response.json();
		auth?.setToken(json.accessToken);
		console.log(auth?.token);
	};

	const handleSubmit = () => {
		loginToSymbl();
	};

	return (
		<>
			<Header />
			{!isLoggedIn ? (
				<Container>
					<Form>
						<FlexBox className="max-w-md mx-auto flex-col">
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
								type="text"
								name="appSecret"
								value={appSecret}
								placeholder="App Secret"
								onChange={handleInputChange('secret')}
							/>
							<Button name="Login" color="bg-slate-900 text-white" onClick={handleSubmit} />
						</FlexBox>
					</Form>
				</Container>
			) : (
				children
			)}
		</>
	);
};

export default ProtectedPage;
