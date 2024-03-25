type Props = {
  className?: string;
  text: string;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const RedButton: React.FC<Props> = ({ text, type, className, onClick }) => {
  return (
    <button
      className={`${className}
       bg-[#DC1720] 
       rounded-full 
       text-white 
       font-jost 
       text-[17px] 
       font-semibold
       button--red`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RedButton;
