
'use client';

import { useState } from 'react';
import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function Skills() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-24 sm:py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Technical Skills</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life. Click on a skill to learn more.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 [perspective:1000px]">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative aspect-square w-full cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div
                className={cn(
                  'absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d]',
                  flippedIndex === index && '[transform:rotateY(180deg)]'
                )}
              >
                {/* Front of the card */}
                <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                  <CardContent className="flex flex-col items-center justify-center p-6 aspect-square group">
                    <skill.icon className="h-12 w-12 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <p className="mt-4 text-sm font-medium text-center text-muted-foreground transition-colors group-hover:text-foreground">{skill.name}</p>
                  </CardContent>
                </Card>

                {/* Back of the card */}
                <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <CardContent className="flex flex-col items-center justify-center p-4 aspect-square text-center">
                    <h3 className="text-base font-bold text-foreground">{skill.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
