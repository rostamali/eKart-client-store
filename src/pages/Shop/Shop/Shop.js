import React, { useContext, useEffect, useState } from 'react';
import DisplayShop from '../DisplayShop/DisplayShop';
import './Shop.css';

// filter
import InputRange from 'react-input-range';
import usePreview from '../../../hooks/usePreview';
import { MyContext } from '../../../App';
import ReactPaginate from 'react-paginate';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';

const Shop = () => {

    const [price, setPrice] = useState({ min: 0, max: 100 });

    const colors = ['yellow', 'pink', 'olive', "white", 'black', 'red', 'navy'];
    const brands = ["nike", "zara", "denim"];

    const [filterColor, setFilterColor] = useState();
    const [filterBrand, setFilterBrand] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const handleSearchFilter = e =>{
        setFilterSearch(e.target.value);
    }
    const handleRadio = e =>{
        setFilterColor(e.target.value);
    }
    const handleBrandFilter = e =>{
        // debugger
        const exist = filterBrand.find(fb => fb.toLowerCase() === e.target.value.toLowerCase());
        let newBrand = [];
        if(!exist){
            newBrand = [...filterBrand, e.target.value];
        }else{
            const rest = filterBrand.filter(restItem => restItem.toLowerCase() !== e.target.value.toLowerCase())
            newBrand = [...rest];
        }
        setFilterBrand(newBrand);
    }

    // load data
    const [shopData, setShopData] = useState([]);
    const [fillData, setFillData] = useState([]);
    const { handleImage, preview } = usePreview();
    const { handleAddCart, cart, setQuickViewShow, handleQuickViewData } = useContext(MyContext);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setShopData(data)
            setFillData(data)
        })
    },[])

    const minPrice = price.min;
    const maxPrice = price.max;

    useEffect(()=>{
        const filtered = shopData.filter(product => {

            if(minPrice > 0 && minPrice > product.salePrice){
                return false;
            }
            if(maxPrice > 0 && maxPrice < product.salePrice){
                return false;
            }
            if(filterColor && product.colors.indexOf(filterColor) === -1){
                return false;
            }
            if(filterBrand.length && filterBrand.indexOf(product.brand) === -1){
                return false;
            }
            if(filterSearch.length > 0 && !product.title.toLowerCase().includes(filterSearch.toLowerCase())){
                return false;
            }
            return true;
        })
        setFillData(filtered)
    },[minPrice, maxPrice, filterColor, filterBrand, filterSearch])

    /* react pagination */
    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 6;
    const pagesVisited = pageNumber * productPerPage;
    const pageCount = Math.ceil(fillData.length / productPerPage);

    const handlePageClick = ({selected}) =>{
        setPageNumber(selected);
    }
    const displayProduct = fillData.slice(pagesVisited, pagesVisited + productPerPage).map(data => <DisplayShop 
            product={data} 
            key={data.id}
            preview={preview}
            handleImage={handleImage}
            handleAddCart={handleAddCart}
            setQuickViewShow={setQuickViewShow}
            handleQuickViewData={handleQuickViewData}
            cart={cart}
        ></DisplayShop>
    )

    return (
        <>
            <Header></Header>
            <div id="shop">
                <div className="container">
                    <div className="row gy-4 gx-4">
                        <div className="col-lg-3 col-md-3-col-12">
                            <div className="filter__wrapper">
                                {/* search box */}
                                <div className="search__filter">
                                    <label htmlFor="searchFilter"><h3 className="filter__title">Search</h3></label>
                                    <input onChange={handleSearchFilter} type="text" id='searchFilter' className="form-control" />
                                </div>

                                {/* price filter */}
                                <div className="price__filter">
                                    <h3 className="filter__title">Price</h3>
                                    <InputRange
                                        step={5}
                                        formatLabel={value => null}
                                        draggableTrack={false}
                                        allowSameValues={false}
                                        minValue={0}
                                        maxValue={100}
                                        value={price}
                                        onChange={value => setPrice(value)}
                                    />
                                    <div className="filter__price">
                                        <span className="filter__min--price">{price.min}</span>
                                        <span className="filter__max--price">{price.max}</span>
                                    </div>
                                </div>

                                {/* color filter */}
                                <div className="color__filter">
                                    <h3 className="filter__title">Color</h3>
                                    <div className="color__filter--group">
                                        {
                                            colors.map(color=> <div key={color} className="filter__checkbox--group">
                                                <input 
                                                    onChange={handleRadio} 
                                                    value={color} 
                                                    className ={`checkbox__filter`}
                                                    type="radio" name="color" 
                                                    id={color} 
                                                />
                                                <label className={`${filterColor === color ? "active__radio--color": ''} ${color}`} htmlFor={color}>
                                                    <span style={{
                                                        backgroundColor: `${color}`,
                                                        border: `1px solid ${color === "white" ? "#ddd" : color}`
                                                    }} className='checked__style'></span>
                                                </label>
                                            </div>)
                                        }
                                    </div>
                                </div>

                                {/* Brand filter */}
                                <div className="brand__filter">
                                    <h3 className="filter__title">Brand</h3>
                                    <div className="brand__filter--list">
                                        {
                                            brands.map(brand => <div key={brand} className="brand__filter--group">
                                                <input 
                                                    className='brand__filter--checkbox' 
                                                    value={brand} type="checkbox" 
                                                    name={brand} id={brand} 
                                                    onChange={handleBrandFilter}
                                                />
                                                <label className={`${filterBrand.find(fbd => fbd.toLowerCase() === brand.toLowerCase()) ? "active__brand--filter": ''}`} htmlFor={brand}>
                                                    <span className='brand__checked--style'></span> {brand}
                                                </label>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9-col-12">
                            <div className="shop__product">
                                <div className="row gy-4 gx-4">
                                    {displayProduct}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination__wrapper">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<span>Next <IoMdArrowDropright/></span>}
                            previousLabel={ <span><IoMdArrowDropleft/> Prev</span> }
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            renderOnZeroPageCount={null}
                            containerClassName={'paginationContainer'}
                            activeClassName={'activePage'}
                            pageClassName={'pageItem'}
                            pageLinkClassName={'pageLink'}
                            disabledClassName={'disabled__page'}
                            previousClassName={"previousPage"}
                            nextClassName={"nextPage"}
                            previousLinkClassName={"previousPageLink"}
                            nextLinkClassName={"nextPageLink"}
                        />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Shop;