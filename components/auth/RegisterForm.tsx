'use client';
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

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'name is required !'
  }),
  email: z.string().min(1, {
    message: 'Email is required !'
  }).email({ message: 'Please enter a valid Email !' }),
  password: z.string().min(8, {
    message: ' password is required !'
  }),
  confirmPassword: z.string().min(8, {
    message: 'Confirmed password is required !'
  })
});
export default function RegisterForm() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Registered successfully",
      description: `your email : ${data.email}, name: ${data.name}`
    });
    console.log(data);
    router.push('/')
  }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center ">Register</CardTitle>
        <CardDescription className='text-center' >Add the info below to Sign up</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form} >

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8" >
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">name</FormLabel>
                  <FormControl>

                    <Input placeholder="Rick sanshez" {...field} className="
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs
                                 text-slate-600 dark:text-slate-100">Email</FormLabel>
                  <FormControl>

                    <Input placeholder="example@example.com" {...field} className="
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs
                             text-slate-600 dark:text-slate-100">password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} type='password' className="
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-xs
                             text-slate-600 dark:text-slate-100">Confirm password</FormLabel>
                  <FormControl>
                    <Input placeholder="confirm password" {...field} type='password' className="
                                    bg-slate-100 border-0 focus-visible:ring-0 text-black
                                    focus-visible:ring-offset-0 dark:text-white  dark:bg-slate-600
                                    " />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Register
            </Button>

          </form>
        </Form>
      </CardContent>
    </Card>
  )
}