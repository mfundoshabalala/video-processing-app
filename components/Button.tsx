const Button: ButtonInterface = ({ name, type = 'button', color = 'primary' }) => {
	return (
		<button type={type} className={`px-6 py-2 rounded shadow max-w-fit ${color}`}>
			{name}
		</button>
	);
};

export default Button;
