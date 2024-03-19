"use client";
import { theme } from '@/theme';
import { useShopStore } from '@/store/ShopStore';
import { toast } from 'sonner';
import { FSProduct } from '@/types/fake-store';
import Button from '../button';
import { navigate } from '@/actions/navigationAction';

interface DeleteProductProps {
    product: FSProduct;
}

export const DeleteProduct = ({product}: DeleteProductProps) => {

    const [removeProduct] = useShopStore((state) => [state.removeProduct]);


    const handleDeleteProduct = async () => {
        await removeProduct(product.id)
        toast.success("Product removed.");
        navigate('/');
    }

    return (
        <Button color={theme.colors.warning1} onClick={()=>{handleDeleteProduct()}}>Delete product</Button>
    )
}