type FormInterface = React.FunctionComponent<{
	children: React.ReactNode;
	className?: string;
}>;

const Form: FormInterface = ({ children, className }) => {
	return <form className={`${className}`}>{children}</form>;
};

export default Form;
