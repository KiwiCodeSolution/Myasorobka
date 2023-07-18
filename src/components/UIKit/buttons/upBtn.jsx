const UpBtn = () => {
  return (
    <button
      type="button"
      className="absolute w-[64px] h-[64px] rounded-full p-5 bg-bg-white top-[72px] right-[72px] hover:shadow-btnWhite focus:shadow-btnWhite"
    >
      <img src="/src/icons/up.svg" alt="Up" />
    </button>
  );
};

export default UpBtn;
