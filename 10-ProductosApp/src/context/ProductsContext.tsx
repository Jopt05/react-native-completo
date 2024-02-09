import { Children, createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from "../interfaces/appInterfaces";
import CafeApi from "../api/cafeApi";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: ( categoryId: string, productName: string ) => Promise<Producto>;
    updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
    deleteProduct: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( data: any, id: string ) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async() => {

        const response = await CafeApi.get<ProductsResponse>('/productos?limite=50');
        setProducts([
            ...response.data.productos
        ])
    };

    const addProduct = async( categoryId: string, productName: string ) => {
        const response = await CafeApi.post<Producto>('/productos',{
            nombre: productName,
            categoria: categoryId
        });
        setProducts([
            ...products,
            response.data
        ])

        return response.data;
    }

    const updateProduct = async( categoryId: string, productName: string, productId: string ) => {
        const response = await CafeApi.put<Producto>(`/productos/${productId}`,{
            nombre: productName,
            categoria: categoryId
        });
        setProducts(
            products.map( prod => {
                return (prod._id === productId)
                    ? response.data
                    : prod
            })
        )
    }

    const deleteProduct = async( id: string ) => {}

    const loadProductById = async( id: string ) => {
        const response = await CafeApi.get<Producto>('/productos/' + id);
        return response.data;
    }

    const uploadImage = async( data: any, id: string ) => {}

    return (
        <ProductsContext.Provider value={{
            products,
            addProduct,
            deleteProduct,
            loadProductById,
            loadProducts,
            updateProduct,
            uploadImage
        }}>
            { children }
        </ProductsContext.Provider>
    )
}