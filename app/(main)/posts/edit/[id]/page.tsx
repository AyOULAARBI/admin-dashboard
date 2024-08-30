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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { useToast } from "@/components/ui/use-toast"



const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required !'
    }),
    body: z.string().min(30, {
        message: 'Body is required !'
    }),
    author: z.string().min(5, {
        message: 'author is required !'
    }),
    date: z.string().min(1, {
        message: 'Date is required !'
    })
});

interface PostEditProps {
    params: {
        id: 'string'
    }
}
const PostEdit = ({ params }: PostEditProps) => {
    const { toast } = useToast()
    const post = posts.find(post => post.id == params.id);
    // console.log(post)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        },
    });
    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast({
            title: "Post updated",
            description:  `updated by ${data.author} at ${data.date}`
          })
        console.log(data)
    }
    return (
        <>
            <BackButton text="Back To Posts" link="/posts" />
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8" >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Title" {...field} className="
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
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                             text-slate-600 dark:text-slate-100">body</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter body" {...field} className="
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
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">author</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter author" {...field} className="
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
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">date</FormLabel>
                                <FormControl>
                                    <Input type="date" placeholder="Enter date" {...field} className="
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
            {/* <Form >
                <FormField>
                    <FormLabel>Title</FormLabel>
                    <Input  />
                    <FormMessage>{errors.title?.message}</FormMessage>
                </FormField>

                <FormField>
                    <FormLabel>Body</FormLabel>
                    <Textarea {...register('body')} />
                    <FormMessage>{errors.body?.message}</FormMessage>
                </FormField>

                <FormField>
                    <FormLabel>Author</FormLabel>
                    <Input {...register('author')} />
                    <FormMessage>{errors.author?.message}</FormMessage>
                </FormField>

                <Button type="submit">Create Post</Button>
            </Form> */}
        </>
    )
}

export default PostEdit;