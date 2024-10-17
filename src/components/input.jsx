const TextInput = ({
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
