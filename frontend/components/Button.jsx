const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" rounded-xl px-6 py-2 text-xl text-white transition-all active:shadow-inner-deep "
      style={{
        background:
          "linear-gradient(93.72deg, #FB70AA 11.59%, rgba(231, 78, 215, 0.9) 89.1%)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
