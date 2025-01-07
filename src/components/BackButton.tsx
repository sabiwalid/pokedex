import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router";

const BackButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <MdArrowBackIosNew
      className={`text-8xl text-white cursor-pointer ${className}`}
      onClick={() => navigate("/")}
    />
  );
};

export default BackButton;
