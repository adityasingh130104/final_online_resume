import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m an <span className="text-about_me_green">AI/ML enthusiast</span> specialized in <span className="text-about_me_green">Data Science and ML Applications</span>
            </div>
        }
      />
     <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Aditya Birju Singh</h3>
            <p className="text-base leading-7 text-about_me_green">Aspiring Data Scientist and AI/ML Enthusiast</p>
            <p className="mt-4 text-lg text-gray-500">I am a dedicated computer science student with a strong interest in artificial intelligence, machine learning, and data-driven solutions.</p>
            <p className="mt-4 text-lg text-gray-500">With hands-on experience in developing AI-powered projects like a legal document management application and a solid foundation in programming, I am continually learning and applying advanced AI/ML techniques to solve complex problems.</p>
            <p className="mt-4 text-lg text-gray-500">I have participated in several Hackathon and i have won cloud5.0 hackathon</p>
            <p className="mt-4 text-lg text-gray-500">I was among the only 150 participants called all over India for RISC (research and innocation symposium) conducted by IIT bombay on march 23-24 on site</p>
            <p className="mt-4 text-lg text-gray-500">I was the Hackathon head at Intercollege event - techstrom 25</p>

          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/me.png" alt="" height={308} width={208} />
          </div>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Hindi</p> - <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Advanced</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="/clg.png" alt="" width={144} height={144} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">B.S. in Computer Science</h3>
                    <p className="text-base leading-7 text-about_me_green">Ramnarain Ruia Autonomous College</p>
                    <p className="text-base leading-7 text-about_me_green">CGPA : 9.06</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
