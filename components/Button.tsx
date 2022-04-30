type ButtonInterface = React.FunctionComponent<{
	name: string;
	type?: 'button' | 'submit';
	color?: string | 'primary' | 'danger' | 'disabled' | 'caution';
	onClick?: (() => Promise<void>) | ((event: React.FormEvent) => void);
}>;

const Button: ButtonInterface = ({ name, type = 'button', color = 'primary' }) => {
	return (
		<button type={type} className={`px-6 py-2 rounded shadow max-w-fit ${color}`}>
			{name}
		</button>
	);
};

export default Button;
