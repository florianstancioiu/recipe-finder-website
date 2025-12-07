export type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
