import { useEffect, useState } from "react";

const usePreview = () => {

    const [preview, setPreview] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setPreview(data)
        })
    },[])

    const handleImage = (index, product) =>{

        const exist = preview.find(item => item.id === product.id);
        let update = [];

        if(exist){
            const rest = preview.filter(pd => pd.id !== product.id);
            exist.preview = index;
            update = [...rest, exist]
        }
        setPreview(update)
    }

    return {
        preview,
        handleImage
    };
};

export default usePreview;