import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Link href="/" className="max-w-5xl mx-auto font-graphik py-10 flex items-center gap-3 shrink-0">
                {/* Logo Mark Placeholder */}
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span className="text-xl font-semibold tracking-wide border p-2 rounded-md">Life Share</span>
            </Link>
            <div className="flex-1">{children}</div>
        </div>
    );
}
