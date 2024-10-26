// CheckBox.tsx
interface CheckBoxProps {
    id: string;
    labelText: string;
    checked: boolean;
    onChange: (id: string, isChecked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ id, labelText, checked, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(id, e.target.checked);
    };

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={checked}
                onChange={handleChange}
            />
            <label className="form-check-label text-secondary fs-5" htmlFor={id}>
                {labelText}
            </label>
        </div>
    );
};
