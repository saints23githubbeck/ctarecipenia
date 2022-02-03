import { useState, useEffect } from 'react';

const useTrending = () => {
    const [isAll, setIsAll] = useState(false);
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
            .then(res => res.json())
            .then(data => setTrending(data.meals))
    }, [])
    if(isAll){
        return [trending,setIsAll,isAll]
    }
   else{
       return [trending.slice(0,3),setIsAll,isAll]
   }
};

export default useTrending;