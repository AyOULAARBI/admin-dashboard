import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import posts from "@/data/posts";
import { Post } from "@/types/Post";
import Link from "next/link";
import { Button } from "../ui/button";

interface PostTableProps {
    limit?: number;
    title?: string;
}
const PostsTable = ({title, limit}: PostTableProps) => {
    const Slicedposts :Post [] = posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
    return (
        <>
            <h3 className="mt-10  mb-4 text-xl md:text-3xl">{title? title :  'Latest posts'}</h3>
        <Table  className=" bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50">
            {/* <TableCaption>A list of your recent posts.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]  hidden md:table-cell ">id</TableHead>
                    <TableHead>title</TableHead>
                    <TableHead className=" hidden md:table-cell">author</TableHead>
                    <TableHead className="text-right  hidden md:table-cell">date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Slicedposts.map(post=>
                <TableRow key={post.id}>
                    <TableCell className="font-medium  hidden md:table-cell">{post.id}</TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell className=" hidden md:table-cell">{post.author}</TableCell>
                    <TableCell className="text-right hidden md:table-cell">{post.date}</TableCell>
                    <TableCell className=" text-center">
                        <Link href={`/posts/edit/${post.id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </TableCell>
                </TableRow>)}
                
            </TableBody>
        </Table>
        </>
    )
}

export default PostsTable