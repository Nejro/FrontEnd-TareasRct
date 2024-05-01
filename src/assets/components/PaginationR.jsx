import React from 'react'

export const PaginationR = ({taskPerPage,totalTask,currentPage,setCurrentPage}) => {
    const pageNumbers =[]
    
    for(let i = 1;i <= Math.ceil(totalTask / taskPerPage ); i ++){
        pageNumbers.push(i)
}
 const onPreviusPage = () =>{
    setCurrentPage(currentPage -1)
 }  
 const onNextPage = () =>{
    setCurrentPage(currentPage + 1)
 } 

const onSpecificPage = (n) => {
    setCurrentPage(n)
 }

  return (
    <nav className="pagination is-centered mt-6" 
    role="navigation" aria-label="pagination">
  <a href="#" className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : '' }`} onClick={onPreviusPage}>Anterior</a>
  <a href="#" className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled': ''}`} onClick={onNextPage}>Siguiente</a>
  <ol className="pagination-list">
    
    {
        pageNumbers.map(noPage =>( 
        <li key= {noPage}>
            <a className={`pagination-link ${noPage === currentPage ? 'is-current': '' }`}
             onClick={() => onSpecificPage(noPage)}>
                {noPage}</a>
     </li>
     ))
    }
  </ol>
</nav>

  )
}
