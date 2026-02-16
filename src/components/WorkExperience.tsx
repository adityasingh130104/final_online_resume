import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Ruia Sort Club | Treasurer',
    date: 'Jan 2025 - Current',
    description: [
      'My work includes',
      ' Managing the club’s financial transactions, budget, and expenses.',
      'Ensuring transparency in financial records and preparing reports.',
      'Coordinating fundraising efforts for the club.',
        'Proper allocation of resources for club activities.',
        'Handling financial documentation efficiently.'
    ],

    image: { url: '/work/SORT.png', height: 96, width: 144, className: 'bg-white' },
  },
  
  {
    title: 'JP Morgan | Software Engineer Job Simulation.',
    date: 'Jan 2024 - Feb 2024',
    description: [
      'Completed JPMorgan Chase Virtual Software Engineering Experience, gaining hands-on exposure to financial technologies.',
      'Integrated Kafka, H2 database, and Spring application with external REST APIs to simulate real-world tasks.',
      'Enhanced skills in Java, Maven, SQL, and API development through practical project implementation.',
    ],

    image: { url: '/work/JPMORGON.png', height: 96, width: 144, className: 'bg-white' },
  },
  {
    title: 'Legalese | Founder.',
    date: 'Jan 2023 - Current',
    description: [
      'venture',
      'Founded Legalese , an application leveraging OCR and NLP to simplify legal document management.',
      'Designed features for extracting, categorizing, and summarizing legal text for improved accessibility and efficiency.',
      'Integrated a user-friendly dashboard for document uploads, clause extraction, and automated insights, streamlining complex legal workflows.',
    ],

    image: { url: '/work/file.png', height: 96, width: 144, className: 'bg-black' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
