interface buttonProps {
  props: any;
  children: any;
}

export default function Button({ children, ...props }: buttonProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
