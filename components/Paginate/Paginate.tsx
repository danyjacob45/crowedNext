import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";
import qs from "qs";

// NOTE: Works only client side render

interface Props {
  pageCount: number;
}

const getPageValueFromQuery = () => {
  if (!window || !window.location.search.length) return 1;
  const params = qs.parse(window.location.search.substring(1));
  return parseInt(params.page as any) || 1;
};

export const Paginate: React.FC<Props> = ({ pageCount }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(() => {
    return getPageValueFromQuery();
  });

  useEffect(() => {
    if (getPageValueFromQuery() === currentPage) return;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: currentPage },
    });
  }, [currentPage]);

  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      pageRangeDisplayed={50}
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) => {
        setCurrentPage(selected + 1);
      }}
      containerClassName="pagination"
    />
  );
};
