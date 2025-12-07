import "./globals.css";
import Navbar from "@/component/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <div className="h-auto w-full overflow-hidden bg-[#171d32]">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
