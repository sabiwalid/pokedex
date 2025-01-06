import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-4xl bg-button h-screen w-screen text-center justify-center flex flex-col relative">
      <MdArrowBackIosNew
        className="text-8xl text-white absolute top-4 left-4 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <h1 className="text-center font-singleDay text-5xl text-white p-4">
        No Pokemon Found!
      </h1>
      <img className="mx-auto" src="/images/404.png" alt="404" />
    </div>
  );
}
