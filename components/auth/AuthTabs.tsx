import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

const AuthTabs = () => {
    return (

            <Tabs defaultValue="Login" className="w-[450px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Login">Login</TabsTrigger>
                    <TabsTrigger value="Register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="Login">
                    <LoginForm />
                </TabsContent>
                <TabsContent value="Register">
                    <RegisterForm />
                </TabsContent>
            </Tabs>

    )
}

export default AuthTabs;