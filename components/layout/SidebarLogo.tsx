import { useRouter } from "next/router";
import { SiCoffeescript } from "react-icons/si";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="flex items-center justify-center p-4 rounded-full cursor-pointer h-14 w-14 hover:bg-blue-300 hover:bg-opacity-10">
      <SiCoffeescript size={30} color="white" />
    </div>
  );
};

export default SidebarLogo;
