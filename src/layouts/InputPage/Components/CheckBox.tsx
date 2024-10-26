interface CheckboxProps {
    id: string;
    labelText: string;
    checked: boolean;
    onChange: (id: string, isChecked: boolean) => void;
}

export const CheckBox: React.FC<CheckboxProps> = ({ id, labelText, checked, onChange }) => {
    return (
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="checkbox" 
                id={id} 
                checked={checked}
                onChange={(e) => onChange(id, e.target.checked)} 
            />
            <label className="form-check-label text-secondary fs-5" htmlFor={id}>
                {labelText}
            </label>
        </div>
    );
}
