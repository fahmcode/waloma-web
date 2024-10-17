import { useState } from "react";
import { Eye, EyeOff } from "react-feather";

const PasswordInput = ({
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder={placeholder}
          required={required}
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer justify-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOff size={20} className="text-gray-500" />
          ) : (
            <Eye size={20} className="text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
