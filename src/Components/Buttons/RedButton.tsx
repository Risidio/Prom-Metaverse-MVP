

type Props = {
  className?: string,
  text: string,
  type?: "button" | "submit";
}

const RedButton: React.FC<Props> = ({

  text, type, className }) => {
  return (

    <button className={`${className}
       bg-[#DC1720] 
       rounded-full 
       text-white 
       font-jost 
       text-[17px] 
       font-semibold
       button--red`}
      type={type}>
      {text}
    </button>


  );
}

export default RedButton