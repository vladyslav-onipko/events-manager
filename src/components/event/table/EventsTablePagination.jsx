import Button from '../../ui/base/Button';

const EventsTablePagination = ({ currentPage, totalPages, hasNextPage, hasPrevPage, onNextPage, onPrevPage }) => {
  return (
    <div className="mt-[30px] flex flex-col justify-center items-center">
      <p className="text-amber-700 font-medium text-[2rem]">
        Page {currentPage} of {totalPages}
      </p>
      <div className="mt-[10px] w-[310px] flex justify-between">
        <Button disabled={!hasPrevPage} onClick={onPrevPage}>
          Previous
        </Button>
        <Button disabled={!hasNextPage} onClick={onNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default EventsTablePagination;
