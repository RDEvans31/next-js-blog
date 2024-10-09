import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-12 py-4 border-b">
            <div className="flex items-center gap-4">
                <Image src="/nomadic_lifter_logo.png" alt="logo" width={40} height={40} className="rounded-full" />
                <a href="/" className="text-lg font-bold">NomadicLifter</a>
            </div>
            <div className="flex items-center gap-4">
                <a href="/posts" className="hover:underline">Posts</a>
                <a href="/posts" className="hover:underline">Ask a question</a>
            </div>
        </div>
    )
}   