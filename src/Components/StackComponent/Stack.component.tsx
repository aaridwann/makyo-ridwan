interface StackProps {
  direction?: 'row' | 'column';
  gap?: number;
  children?: React.ReactNode;
}

const StackComponent = ({
  direction = 'column',
  gap = 8,
  children,
}: StackProps): React.ReactNode => (
  <div
    style={{
      display: 'flex',
      flexDirection: direction,
      gap,
    }}
  >
    {children}
  </div>
);

export default StackComponent;
