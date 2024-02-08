type Props = {
  className?: string,
  text: string,
  type?: "button" | "submit",
  onClick?: () => void;
}

const WhiteButton: React.FC<Props> = ({
  className,
  text,
  type,
  onClick,

}) => {
  return (
    <button className={`${className}
    bg-[#fff] 
    rounded-full 
    text-[#30374D]
    font-jost 
    text-[17px] 
    font-semibold
    button--white`}
      type={type}
      onClick={onClick}>
      {text}
    

    </button>

  )
}

export default WhiteButton