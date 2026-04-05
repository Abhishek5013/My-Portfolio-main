
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-40">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">My Work</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          A selection of projects that showcase my passion for design and development.
        </p>
      </div>
      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="group overflow-hidden">
             <CardHeader className="p-0">
                <div className="overflow-hidden">
                    <Image
                        src={project.image}
                        data-ai-hint={project.imageAiHint}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
             </CardHeader>
            <CardContent className="p-8">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
                 <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={project.link}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
