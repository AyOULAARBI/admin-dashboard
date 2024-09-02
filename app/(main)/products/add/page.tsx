'use client';

import BackButton from "@/components/BackButton"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"



const formSchema = z.object({
    name: z.string().min(3, {
        message: 'name is required !'
    }),
    price: z.coerce.number().min(1, {
        message: 'price is required !'
    }),
    category: z.string().min(5, {
        message: 'category is required !'
    }),
    stock: z.coerce.number().min(1, {
        message: 'stock is required !'
    })
});


const productEdit = () => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:  '',
            price:  1,
            category: '',
            stock:  1,
        },
    });
    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast({
            title: "Product Added",
            description:  `a new product was added successfully `
          })
        console.log(data)
    }
    return (
        <>
            <BackButton text="Back To products" link="/products" />
            <h3 className="text-2xl mb-4">Edit product</h3>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8" >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Name" {...field} className="
                                    bg-slate-100 border-0 focus-visible:ring-0 text-black
                                    focus-visible:ring-offset-0 dark:text-white  dark:bg-slate-600
                                    " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                             text-slate-600 dark:text-slate-100">price</FormLabel>
                                <FormControl>
                                <Input placeholder="Enter price" type="number" {...field} className="
                                    bg-slate-100 border-0 focus-visible:ring-0 text-black
                                    focus-visible:ring-offset-0 dark:text-white  dark:bg-slate-600
                                    " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">category</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter category" {...field} className="
                                    bg-slate-100 border-0 focus-visible:ring-0 text-black
                                    focus-visible:ring-offset-0 dark:text-white  dark:bg-slate-600
                                    " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">stock</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Enter stock" {...field} className="
                                    bg-slate-100 border-0 focus-visible:ring-0 text-black
                                    focus-visible:ring-offset-0 dark:text-white  dark:bg-slate-600
                                    " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full" type="submit">Submit</Button>
                </form>
            </Form>
            
        </>
    )
}

export default productEdit;