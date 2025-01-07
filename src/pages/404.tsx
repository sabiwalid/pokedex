import BackButton from "../components/BackButton";

export default function NotFound() {
  return (
    <div className="text-4xl bg-button h-screen w-screen text-center justify-center flex flex-col relative">
      <BackButton className="left-8 top-6 absolute" />
      <h1 className="text-center font-singleDay text-5xl text-white p-4">
        No Pokemon Found!
      </h1>
      <img className="mx-auto" src="/images/404.png" alt="404" />
    </div>
  );
}
