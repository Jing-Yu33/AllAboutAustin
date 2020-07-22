import React, { Component } from 'react';
import ZipCodePageChangeButton from "react-paginating";


class PaginationButton extends Component {

    render() {
        const total = this.props.total;
        const limit = this.props.limit;
        const pageCount = Math.ceil(total / limit);
        const { handlePageChange, currentPage } = this.props;
        
        return(
            <ZipCodePageChangeButton
                total={total}
                limit={limit}
                pageCount={pageCount}
                currentPage={currentPage}
            >
                {({
                pages,
                currentPage,
                hasNextPage,
                hasPreviousPage,
                previousPage,
                nextPage,
                totalPages,
                getPageItemProps
                }) => (
                
                <div className="btn-group mx-auto">
                    <button className="btn btn-outline-primary"
                    {...getPageItemProps({
                        pageValue: 1,
                        onPageChange: handlePageChange
                    })}
                    >
                    first
                    </button>
    
                    {hasPreviousPage && (
                    <button className="btn btn-outline-primary"
                        {...getPageItemProps({
                        pageValue: previousPage,
                        onPageChange: handlePageChange
                        })}
                    >
                        {"<"}
                    </button>
                    )}
    
                    {pages.map(page => {
                    let activePage = null;
                    if (currentPage === page) {
                        activePage = { backgroundColor: "#fdce09" };
                    }
                    return (
                        <button className="btn btn-outline-primary"
                        {...getPageItemProps({
                            pageValue: page,
                            key: page,
                            style: activePage,
                            onPageChange: handlePageChange
                        })}
                        >
                        {page}
                        </button>
                    );
                    })}
    
                    {hasNextPage && (
                    <button className="btn btn-outline-primary"
                        {...getPageItemProps({
                        pageValue: nextPage,
                        onPageChange: handlePageChange
                        })}
                    >
                        {">"}
                    </button>
                    )}
    
                    <button className="btn btn-outline-primary"
                    {...getPageItemProps({
                        pageValue: totalPages,
                        onPageChange: handlePageChange
                    })}
                    >
                    last
                    </button>
                </div>
                
                )}
            
            </ZipCodePageChangeButton>

        )
    }
}
export default PaginationButton;

