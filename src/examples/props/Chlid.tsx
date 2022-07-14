interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = (props: ChildProps) => {
  const { color } = props;
  return <div>Hi there {color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Hi there {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
