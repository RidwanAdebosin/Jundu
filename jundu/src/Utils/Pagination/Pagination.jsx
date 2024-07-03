import Button from "../Button/Button";
import "./Pagination.css";

const Pagination = ({page, setPage, totalProducts, productsPerPage, disabledNext}) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    
    const handlePrevPage = () => {
        setPage((page)=> page - 1)
    };

    const handleNextPage = () => {
        setPage((page) => page + 1)
        
    }

    return (
        <div className="pagination-btn">
        <Button onClick={handlePrevPage} disabled={page === 1}>Prev</Button>
        <span>{page}</span>
        <Button onClick={handleNextPage} disabled={page === totalPages}>Next</Button>
        </div>
    )
};

export default Pagination;