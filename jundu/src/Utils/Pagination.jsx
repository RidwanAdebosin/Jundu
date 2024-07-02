import Button from "../components/Button/Button";


const Pagination = ({page, setPage, totalProducts, productsPerPage, disabledNext}) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    
    const handlePrevPage = () => {
        setPage((page)=> page - 1)
    };

    const handleNextPage = () => {
        setPage((page) => page + 1)
        
    }

    return (
        <>
        <Button onClick={handlePrevPage} disabled={page === 1}>Prev</Button>
        <span>{page}</span>
        <Button onClick={handleNextPage} disabled={page === totalPages}>Next</Button>
        </>
    )
};

export default Pagination;