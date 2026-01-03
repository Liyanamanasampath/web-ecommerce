type Option = {
    label: string;
    value: string;
  };
  
  type Props = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
  };
  
  export default function SelectInput({
    label,
    value,
    onChange,
    options,
  }: Props) {
    return (
      <div>
        <label className="form-label">{label}</label>
        <select
          className="form-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  