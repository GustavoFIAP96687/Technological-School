import Link from "next/link";

export default function Button({children, icon, ...props}){
    return (
        (type === "link") ?
        <Link href="#" {...props} className="flex items-center gap-1 bg-pink-600 px-2 py-1 rounded hover:bg-pink-800">
            {icon}
            {children}
        </Link>
        :
        <button {...props} className="flex items-center gap-1 bg-pink-600 px-2 py-1 rounded hover:bg-pink-800">
            {icon}
            {children}
        </button>
    )
}