type FlexBoxInterface = React.FunctionComponent<{
	children: React.ReactNode;
	className?: string;
}>;

const FlexBox: FlexBoxInterface = ({ children, className }) => {
	return <div className={`flex flex-col gap-4 ${className}`}>{children}</div>;
};

export default FlexBox;
