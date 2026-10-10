import Link from "next/link";
import Logo from '../../../public/logo.webp'
import Image from 'next/image'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Link href="/" className="max-w-5xl mx-auto font-graphik py-10 flex items-center gap-3 shrink-0">
                <Image width={64} height={64} src={Logo} alt={"Logo"} className="object-cover" />
            </Link>
            <div className="flex-1">{children}</div>
        </div>
    );
}
