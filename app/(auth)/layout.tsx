import { ModeToggle } from "@/components/ModeToggle";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen grid place-items-center ">
      {children}
      <div className="absolute top-1 right-2">
        <ModeToggle  />
      </div>
    </div>
  );
}
