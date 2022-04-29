type InputInterface = React.FunctionComponent<{
	type?: 'text' | 'file' | 'password';
	name: string;
	id: string;
	value?: string;
	placeholder?: string;
	onChange: (event: any) => void;
}>;

const Input: InputInterface = ({ type = 'text', name, id, onChange, placeholder }) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			onChange={onChange}
			className="rounded shadow border-slate-300"
		/>
	);
};

export default Input;
