import { useState } from "react";
import ReactPaginate from "react-paginate";
import CardList from "../components/CardList/CardList";

function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div>{items && <CardList data={currentItems} />}</div>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="page-item"
          pageClassName=""
          pageLinkClassName="page"
          previousClassName="previous"
          previousLinkClassName=""
          nextClassName="previous"
          nextLinkClassName=""
        />
      </div>
    </>
  );
}

export default PaginatedItems;
