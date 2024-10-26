interface CheckboxProps {
    id: string;
    labelText: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  }
  
export const CheckBox: React.FC<CheckboxProps> = ({id, labelText, onChange}) => {
    return (
        <div className="form-check">
            <input onChange={onChange} className="form-check-input" type="checkbox" value="" id={id} />
            <label className="form-check-label text-secondary fs-5" htmlFor={id} >
                {labelText}
            </label>
        </div>
    )
}