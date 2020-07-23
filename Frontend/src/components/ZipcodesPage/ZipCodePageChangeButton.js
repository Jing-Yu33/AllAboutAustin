import React, { Component } from 'react';
import { Icon, Pagination } from 'semantic-ui-react'

class PaginationButton extends Component {

  render() {
    const total = this.props.total;
    const limit = this.props.limit;
    const pageCount = Math.ceil(total / limit);
    const { handlePageChange, currentPage } = this.props;
    return(
      <Pagination
        defaultActivePage={3}
        activePage={currentPage}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={pageCount}
        onPageChange={handlePageChange}
    />
    )
    }
}
export default PaginationButton;

