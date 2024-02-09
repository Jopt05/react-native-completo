import React, { useEffect, useState } from 'react'
import CafeApi from '../api/cafeApi';
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces';

export const useCategories = () => {

    const [categories, setCategories] = useState<Categoria[]>([]);

    useEffect(() => {
      getCategories();
    }, []);
    
    const getCategories = async() => {
        const resp = await CafeApi.get<CategoriesResponse>('/categorias');
        setCategories( resp.data.categorias );
    }

    return {
        categories
    }
}
