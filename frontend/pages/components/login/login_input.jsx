const LoginInput = ({ title }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div>{title}</div>
      <input
        style={{
          borderColor: "linear-gradient(93.72deg, #FD479D 80%, #E01DDE 80%)",
          background: "rgba(255, 122, 162, 0.04)",
        }}
        className="w-full p-2 my-2 rounded-xl border-2 outline-none border-pink-500"
      />
    </div>
  );
};

export default LoginInput;
