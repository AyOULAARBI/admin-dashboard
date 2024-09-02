import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import PostsTable from "@/components/Post/PostsTable";
import ProductsTable from "@/components/Product/ProductsTable";
import { Button } from "@/components/ui/button";
import { Folders, MessageCircle, Newspaper, Users } from "lucide-react";

const data = [
  {title: "Posts", count: 324, icon: <Newspaper size="72"/>},
  {title: "Categories", count: 812, icon: <Folders size="72"/>},
  {title: "Users", count: 18, icon: <Users size="72"/>},
  {title: "Comments", count: 962, icon: <MessageCircle size="72"/>},
]
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 mb-5 md:flex-row">
        {data.map((elm,i)=><DashboardCard key={i} title={elm.title} count={elm.count} icon={elm.icon} />)}
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest 5 posts" limit={5}/>
      <ProductsTable title="Latest 5 products" limit={5}/>
    </>
  );
}
