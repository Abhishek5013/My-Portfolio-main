
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[700px] items-center justify-center text-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center space-y-8">
            <div className="p-1 bg-white/10 rounded-full shadow-lg backdrop-blur-md animate-fade-in animation-delay-100 ring-2 ring-white/20 hover:ring-primary/50 transition-all duration-300">
                <Image
                    src="/logo.png"
                    data-ai-hint="logo"
                    alt="Logo"
                    width={144}
                    height={144}
                    className="rounded-full object-cover"
                    priority
                />
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-in animation-delay-300 bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/50">
                Abhishek Yadav
            </h1><h2>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-in animation-delay-500">
                Crafting dreams in code and 3D💕
            </p></h2>
            <div className="animate-fade-in animation-delay-700">
                <Button asChild size="lg" variant="default">
                    <Link href="Abhishek_Yadav_cv.pdf" download>
                        Download Resume
                        <Download className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
