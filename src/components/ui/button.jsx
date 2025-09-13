import React from 'react';

const Button = React.forwardRef(({ className = '', children, ...props }, ref) => {
	return (
		<button
			className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	);
});
Button.displayName = 'Button';

export { Button };