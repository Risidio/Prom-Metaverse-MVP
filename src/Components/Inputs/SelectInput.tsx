type Props = {
   
    className?: string,
    id?:string,
    label:string
  }

const SelectInput:React.FC<Props> = ({className, id, label }) => {
  return (
 
          <label className="form-title" htmlFor={id}>
            {label}
              <select  className={`form-input ${className} outline-none`}  id={id}>
                  <option value="Producer">Producer</option>
                  <option value="Photographer">Photographer</option>
                  <option value="Production-Artist">Production Artist</option>
                  <option value="Production-Designer">Production Designer</option>
              </select>
          </label>
        );
      };
      

       export default SelectInput

