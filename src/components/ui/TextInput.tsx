type Props = {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
  };
  
  export default function TextInput({
    label,
    placeholder,
    value,
    onChange,
  }: Props) {
    return (
      <div>
        <label className="form-label">{label}</label>
        <input
          className="form-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  