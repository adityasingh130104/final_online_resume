'use client';
import { ExpandArrowLink, GlowCard } from '@/components';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { impulseux, leenithBorges, leenithIos, loteriaMonarca, realtorSimplified, sierraEcomaderas, template1 } from '../../public/projects/';

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  image: {
    src: StaticImageData;
  };
}

const projects: Project[] = [
  {
    href: '/apps/realtor-simplified',
    name: 'Legalese',
    full: true,
    description: ' A Legalese Assistance Application, leveraging OCR and NLP to simplify legal document management.',
    image: { src: realtorSimplified },
  },
  {
    href: '/apps/loteria-monarca',
    name: 'IPL Player Analysis',
    full: true,
    description: ' IPL player analysis assesses performance metrics like runs, wickets, and consistency to evaluate a player ETC',
    image: { src: loteriaMonarca },
  },
 
  {
    href: '/apps/leenith-borges',
    name: 'C compiler identifying Syntax errors',
    full: true,
    description: ' detects syntax errors by parsing the code, checking for incorrect punctuation, etc.',
    image: { src: leenithBorges },
  },
  {
    href: '/apps/leenith-borges',
    name: 'brain tumor identification',
    full: false,
    description: ' ',
    image: { src: leenithIos },
  },
  {
    href: '/apps/impulseux',
    name: 'Finance tracker for GenZ',
    full: false,
    description: ' ',
    image: { src: impulseux },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 @3xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.name}
            className={clsx('hover:shadow-my_work_yellow/90', project.full ? 'h-[60vh] @2xl:h-[50vh] @3xl:col-span-2' : 'h-[60vh] @3xl:col-span-1')}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div className={clsx('flex-col justify-between h-full', project.full && '@2xl:flex')}>
              <h3 className={clsx('text-xl @2xl:text-3xl text-white dark:text-white/90', project.full && '@4xl:w-[40%]')}>
                <span className="text-2xl @2xl:text-4xl text-my_work_yellow">{project.name}</span>
                {project.description}
              </h3>
              <ExpandArrowLink href={project.href} className="before:bg-my_work_yellow " />
            </div>
            <Image
              placeholder="blur"
              className={clsx(
                'z-10 my-work-img-shadow absolute w-full',
                project.full ? '@md:w-[80%] @xl:w-[70%] @2xl:w-[55%] @md:rounded-tl-md bottom-0 right-0' : 'bottom-0 @xl:right-0 @xl:w-[70%] @3xl:w-full'
              )}
              src={project.image.src}
              alt=""
            />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
