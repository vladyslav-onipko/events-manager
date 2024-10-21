const ErrorBlock = ({ message }) => {
  return (
    <div className="w-full max-w-[700px] mx-auto border-[1px] border-red-700 text-center my-[15px] bg-red-700/20 font-medium text-red-900">
      <h3 className="pb-[5px] border-b-[1px] border-red-900 py-[10px]">An error occurred!</h3>
      <div className="w-full py-[30px] px-[15px]">
        <p>{message || 'Failed to fetch events. Please, try again later'}</p>
      </div>
    </div>
  );
};

export default ErrorBlock;
