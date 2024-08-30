import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
    link : string,
    text: string
}
const BackButton = ({link, text}: BackButtonProps) => {
  return (
    <Link href={link} className="flex items-center gap-1 font-bold mb-6 text-slate-400">
        <ArrowLeftCircle size="28"/>
        {text}
    </Link>
  )
}

export default BackButton