import React, { useContext, useEffect } from 'react';
import { PageContext } from './App';

export default function Portfolio() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('Portfolio');        
    }, [currentPage]);    
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">PORTFOLIO</h1>
        </div>
    );
}