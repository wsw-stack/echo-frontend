interface CheckboxProps {
    id: string;
    labelText: string;
  }
  
export const CheckBox: React.FC<CheckboxProps> = ({id, labelText}) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={id} />
            <label className="form-check-label text-secondary fs-5" htmlFor={id} >
                {labelText}
            </label>
        </div>
    )
}