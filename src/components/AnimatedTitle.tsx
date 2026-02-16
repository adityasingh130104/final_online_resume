'use client';
import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { sleep } from '../lib/sleep';

const list = {
  visible: {
    display: 'flex',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    display: 'none',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

export default function AnimatedTitle() {
  const aiControls = useAnimationControls();
  const mlControls = useAnimationControls();
  const dataScienceControls = useAnimationControls();

  useEffect(() => {
    let hasCanceled_ = false;
    const animationActions = [
      { controller: dataScienceControls as AnimationControls, value: 'visible' },
      { controller: aiControls, value: 'visible' },
      { controller: dataScienceControls, value: 1000 },
      { controller: aiControls, value: 'hidden' },
      { controller: dataScienceControls, value: 'hidden' },
      { controller: dataScienceControls, value: 700 },
      { controller: dataScienceControls, value: 'visible' },
      { controller: mlControls, value: 'visible' },
      { controller: dataScienceControls, value: 1000 },
      { controller: mlControls, value: 'hidden' },
      { controller: dataScienceControls, value: 'hidden' },
    ];

    const animateWords = async () => {
      for (const action of animationActions) {
        if (hasCanceled_) {
          return;
        }
        if (typeof action.value === 'number') {
          await sleep(action.value);
        } else if (!hasCanceled_) {
          await action.controller.start(action.value);
        }
      }
      animateWords();
    };
    animateWords();
    return () => {
      hasCanceled_ = true;
    };
  }, [aiControls, mlControls, dataScienceControls]);

  return (
    <div className="flex text-blue-100">
      <motion.div variants={list} initial="hidden" animate={dataScienceControls}>
        <WriteWord word="Data Science" />
      </motion.div>
      <div className="text-transparent">a</div>
      <motion.div variants={list} initial="hidden" animate={aiControls}>
        <WriteWord word="AI" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={mlControls}>
        <WriteWord word="ML" />
      </motion.div>
    </div>
  );
}

const item = {
  hidden: { display: 'none', x: 0 },
  visible: { display: 'flex', x: 0 },
};

function WriteWord({ word, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { word: string }) {
  return word.split('').map((letter, index) => (
    <motion.div key={index} variants={item} {...props}>
      {letter}
    </motion.div>
  ));
}