
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LucideIcon, Newspaper } from "lucide-react"

interface DashboardCardProps {
  title: string,
  count : number,
  icon : React.ReactElement<LucideIcon>
}
const DashboardCard = ({title, count, icon}:DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 p-4 pb-0 dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-center text-slate-500  dark:text-slate-100">{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-5 text-slate-500 dark:text-slate-100">
        {icon}
        <h3 className="font-semibold text-3xl md:text-5xl ">{count}</h3>
      </CardContent>
    </Card>
  )
}

export default DashboardCard