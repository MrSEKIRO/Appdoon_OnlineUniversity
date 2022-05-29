


const Pagination = ({handlePageNumber, pageNumber, allPagesNumber}) => {

    return(
        <div style={{marginTop:"20px", marginBottom:"-20px"}} class="pagination-product pr-3 pl-3 pr">
            <nav aria-label="Page navigation example">
                <ul class="pagination">

                    <li class="page-item">
                        <a onClick={() => handlePageNumber(pageNumber != 1 ? pageNumber-1 : pageNumber)} class="page-link" href="#!" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>

                    {pageNumber !=  1 &&
                        <li class="page-item">
                            <a onClick={() => handlePageNumber(1)} class={`page-link ${""}`} href="#!">{1}</a>
                        </li>
                    }
                    
                    {pageNumber !=  1 && pageNumber !=  2 && pageNumber !=  3 && 
                        <li class="page-item">
                            <a class={`page-link ${""}`} href="#!">...</a>
                        </li>
                    }

                    {pageNumber !=  1 && pageNumber !=  2 &&
                        <li class="page-item">
                            <a onClick={() => handlePageNumber(pageNumber-1)} class={`page-link ${""}`} href="#!">{pageNumber-1}</a>
                        </li>
                    }

                    <li class="page-item">
                        <a onClick={() => handlePageNumber(pageNumber)} class={`page-link ${"active"}`} href="#!">{pageNumber}</a>
                    </li>

                    {pageNumber !=  allPagesNumber && pageNumber !=  allPagesNumber-1 &&
                        <li class="page-item">
                            <a onClick={() => handlePageNumber(pageNumber+1)} class={`page-link ${""}`} href="#!">{pageNumber+1}</a>
                        </li>
                    }

                    {pageNumber !=  allPagesNumber && pageNumber !=  allPagesNumber-1 && pageNumber !=  allPagesNumber-2 &&
                        <li class="page-item">
                            <a class={`page-link ${""}`} href="#!">...</a>
                        </li>
                    }
                

                    {pageNumber !=  allPagesNumber &&
                        <li class="page-item">
                            <a onClick={() => handlePageNumber(allPagesNumber)} class={`page-link ${""}`} href="#!">{allPagesNumber}</a>
                        </li>
                    }



                    

                    <li class="page-item">
                        <a onClick={() => handlePageNumber(pageNumber != allPagesNumber ? pageNumber+1 : pageNumber)} class="page-link" href="#!" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>




                </ul>
            </nav>
        </div>
    );
}

export default Pagination;