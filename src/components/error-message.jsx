import { AlertCircle, X } from "react-feather";

export default function ErrorMessage({ message = "", onClose }) {
  return (
    <div
      className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 relative"
      role="alert"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">{message}</p>
        </div>
      </div>
      {onClose && (
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-red-400 hover:text-red-500"
          onClick={onClose}
          aria-label="Close error message"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
