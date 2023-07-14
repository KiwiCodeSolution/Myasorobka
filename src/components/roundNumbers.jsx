const roundNumbers = ({ activeBtn, setQtty }) => {
  const buttons = [1, 2, 5];
  const genStyles = "w-8 h-8 border rounded-full text-center py-1 cursor-pointer";
  // const activeStyle = "bg-bg-light-orange";
  const activeStyle = "bg-bg-red border-red text-txt-main-white";
  return (
    <div className="flex gap-x-8 justify-center my-2">
      {buttons.map(el => (
        <p
          key={el}
          className={`${genStyles} ${el === activeBtn && activeStyle}`}
          onClick={() => setQtty(el)}
        >
          {el}
        </p>
      ))}
    </div>
  )
}
export default roundNumbers;
