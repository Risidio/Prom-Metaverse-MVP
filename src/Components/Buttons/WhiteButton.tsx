type Props = {
  className?: string,
  text: string,
  type?: "button" | "submit",
}

const WhiteButton: React.FC<Props> = ({
  className,
  text,
  type,

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
      type={type}>
      {text}
    </button>

  )
}

export default WhiteButton