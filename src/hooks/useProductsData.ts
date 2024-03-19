import {useQuery} from '@tanstack/react-query';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import {FSProducts} from '@/types/fake-store';

const getProducts = async (): Promise<AxiosResponse<FSProducts>> => {
    const res = await axios.get<FSProducts>('https://fakestoreapi.com/products/');
    return res;
}

export function useProductsData(){
    const query = useQuery({
        queryFn: getProducts,
        queryKey: ['products']
    })

    return {
        ...query,
        data: query.data?.data
    }
}