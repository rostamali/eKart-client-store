import { useState } from "react";

const useView = () => {

    const [quickViewShow, setQuickViewShow] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const handleQuickViewData = product =>{
        setQuickViewData(product)
    }

    return {
        quickViewShow,
        setQuickViewShow,
        handleQuickViewData,
        quickViewData
    };
};

export default useView;