
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Code, Users } from 'lucide-react';

const aboutItems = [
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Technical Skills",
        description: "I am a versatile professional with skills in Web Development, Python Programming, 3D Design & Animation, and Software Development.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Interpersonal Skills",
        description: "Along with my technical expertise, I possess strong communication and community management skills, which help me effectively collaborate with teams and support customers.",
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Career Goal",
        description: "My goal is to leverage both my technical knowledge and interpersonal abilities to contribute value in IT as well as customer support roles.",
    }
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-40">
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                A passionate developer dedicated to building beautiful, functional, and user-centric digital experiences.
            </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
            {aboutItems.map((item) => (
                <Card key={item.title}>
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full ring-2 ring-primary/20">
                           {item.icon}
                        </div>
                        <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground">
                        <p>{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
  );
}
