const roundNumbers = () => {
  const buttons = [1, 2, 5];

  return (
    <div className="flex gap-x-8 justify-center my-2">
      {buttons.map(el => (
        <p key={el} className="w-8 h-8 border border-black rounded-full text-center py-1">{el}</p>
      ))}
    </div>
  )
}
export default roundNumbers;
