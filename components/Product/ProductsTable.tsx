import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Link from "next/link";
import { Button } from "../ui/button";
import { Product } from "@/types/Product";
import products from "@/data/products";

interface ProductTableProps {
    limit?: number;
    title?: string;
}
const ProductsTable = ({title, limit}: ProductTableProps) => {
    const SlicedProducts :Product [] = products.slice(0, limit)
    return (
        <>
            <h3 className="mt-10  mb-4 text-xl md:text-3xl">{title? title :  'Latest products'}</h3>
        <Table  className=" bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50">
            {/* <TableCaption>A list of your recent products.</TableCaption> */}
            <TableHeader>
                <TableRow>
                   
                    <TableHead>Name</TableHead>
                    <TableHead className=" hidden md:table-cell">Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right  hidden md:table-cell">Stock</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {SlicedProducts.map((product)=>
                <TableRow key={product.id.toString()}>
                    <TableCell className="font-medium  ">{product.name}</TableCell>
                    <TableCell className=" hidden md:table-cell">{product.category}</TableCell>
                    <TableCell className="">{product.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right hidden md:table-cell">{product.stock  + ""}</TableCell>
                    <TableCell className=" text-center">
                        <Link href={`/products/edit/${product.id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </TableCell>
                </TableRow>)}
                
            </TableBody>
        </Table>
        </>
    )
}

export default ProductsTable;