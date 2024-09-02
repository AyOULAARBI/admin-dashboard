'use client';

import BackButton from "@/components/BackButton";
import ProductsPagination from "@/components/Product/ProductsPagination";
import ProductsTable from "@/components/Product/ProductsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";


const ProductPage = () => {
    return (
        <div className="container mx-auto py-2">
            <BackButton link="/" text="Go Back" />
            <div className="flex flex-col justify-between items-center mb-6 md:flex-row">
                <h1 className="text-2xl font-bold mb-4 ">Products</h1>
                <Link href='/products/add'>
                    <Button className="w-1/2 md:w-auto">
                        <Plus className="mr-2 h-4 w-4" /> Add Poduct
                    </Button>
                </Link>
            </div>
            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products ..."
                        className="pl-8 bg-slate-100 border-0 focus-visible:ring-0 text-black
                                    focus-visible:ring-offset-0 dark:text-white  dark:bg-slate-600"
                    />
                </div>
            </div>
            <div className="rounded-md border">
                <ProductsTable limit={7} title="products" />
            </div>
            <div className="mt-4">
                <ProductsPagination />
            </div>
        </div>
    )
}

export default ProductPage