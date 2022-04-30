type ChildrenInterface = React.FunctionComponent<{
	children: React.ReactNode;
}>;

type ButtonInterface = React.FunctionComponent<{
	name: string;
	type?: 'button' | 'submit';
	color?: string | 'primary' | 'danger' | 'disabled' | 'caution';
	onClick?: (() => Promise<void>) | ((event: React.FormEvent) => void);
}>;
