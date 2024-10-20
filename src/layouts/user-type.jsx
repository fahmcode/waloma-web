import { BookOpen, Briefcase, GitMerge } from "react-feather";

const UserTypeButton = ({
  userType,
  setUserType,
  selectedUserType,
  icon: Icon,
  title,
  description,
}) => {
  const isSelected = userType === selectedUserType;
  return (
    <button
      type="button"
      onClick={() => setUserType(userType)}
      className={`w-full p-4 text-left rounded-lg border ${
        isSelected ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
      } hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out`}
    >
      <div className="flex items-center">
        <Icon
          className={`mr-3 ${isSelected ? "text-indigo-500" : "text-gray-400"}`}
          size={24}
        />
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </button>
  );
};

const UserTypeForm = ({ userType, setUserType, handleUserTypeSubmit }) => {
  const userTypes = [
    {
      key: "broker",
      title: "Broker",
      description: "Personal account for brokers",
      icon: GitMerge,
    },
    {
      key: "employer",
      title: "Employer",
      description: "Business account for professional employers",
      icon: Briefcase,
    },
    {
      key: "job_seeker",
      title: "Job Seeker",
      description: "Business account for job seekers",
      icon: BookOpen,
    },
  ];

  return (
    <form onSubmit={handleUserTypeSubmit} className="space-y-6">
      <div className="space-y-4">
        {userTypes.map(({ key, title, description, icon }) => (
          <UserTypeButton
            key={key}
            userType={key}
            setUserType={setUserType}
            selectedUserType={userType}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
      >
        Continue
      </button>
    </form>
  );
};

export default UserTypeForm;
