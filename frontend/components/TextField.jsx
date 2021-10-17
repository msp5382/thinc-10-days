const TextField = ({ placeholder, inputClassName, value, onChange, title, width, type, ...props }) => {
  return (
    <div {...props} style={{ width: width }}>
      <div className="text-2xl items-center">{title}</div>
      <input
        type={type}
        className={"outline-none w-full text-lg px-2 py-1 flex place bg-[#E7E7E74D] border-[#767676] border-[1.5px] rounded-xl " + inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
