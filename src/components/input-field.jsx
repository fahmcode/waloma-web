const InputField = ({ icon: Icon, label, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={props.id}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        {...props}
      />
    </div>
  </div>
);

export default InputField;
