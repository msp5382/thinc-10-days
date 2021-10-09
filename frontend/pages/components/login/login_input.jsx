const LoginInput = ({ title }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div>{title}</div>
      <input className="w-full p-1 my-2 bg-[#FF7AA20A]" />
    </div>
  );
};

export default LoginInput;
