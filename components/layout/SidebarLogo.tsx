import { useRouter } from "next/router";
import { IoFlash } from "react-icons/io5";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div onClick={() => router.push('/')}>
        <div className="flex flex-row item-center">
        <div
            className="
                rounded-full
                h-16
                w-16
                flex
                items-center
                justify-center
                p-4
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
                lg:hidden
                transition
            "
        >
            <IoFlash size={32} color="#facc15" />
        </div>
        <div
            className="
                hidden
                lg:flex
                items-center
                gap-4
                p-4
                rounded-full
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
                transition
            " 
        >
            <IoFlash size={32} color="#facc15" />
            <p className="hidden lg:block text-yellow-400 text-xl font-mono font-black">
                Zeet it
            </p>
        </div>
        </div>
    </div>
  );
};

export default SidebarLogo;
