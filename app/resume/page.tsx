import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'work',
  description: 'A summary of my work and contributions.',
};


export default function work() {
  return (
    <section>
    <h1 className="font-medium text-2xl mb-8 tracking-tighter">my resume</h1>
  <div className="prose prose-neutral dark:prose-invert">
        <p>
        Motivated by diverse experiences and a commitment to continuous learning,
         my journey has led me to this moment. Now, more than ever, 
         I'm ready to embrace the role of a programmer.
         If you want to see the full resume, please click <a download href="files/resume.pdf">
        here</a> or continue reading on.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Developing</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full-Stack Developer
        </p>
        <p>
        <Link href="https://sr-hegc.onrender.com/" target="_blank">SR</Link>
        </p>
        <p>
        SR(Suwon Restaurants) is a dynamic MERN full-stack app that enables English-speaking foreigners to explore diverse 
          restaurants in Suwon, Korea, and access information about them.
        </p>
        <p>
          Key Features:
        </p>
        <ul>
          <li>
          Registered users can suggest which restaurants to add/update/delete to the admin
          </li>
          <li>
          Collected real-time data using Python and stored it in MongoDB to provide the latest information
          </li>
          </ul>
          
          <p>
          <Link href="https://65a2209f6ab4c90008edde6f--teal-starlight-5a49a5.netlify.app/#/" target="_blank">NC</Link>
          </p>
          <p>
          NC(Neflix Copy) is a React movie app that utilizes the data from data from The Movie Database (TMDb).
          </p>
          <p>
            Key Features:
          </p>
          <ul>
          <li>
          Displays the upcoming releases, popular choices, and top-rated films, ensuring users stay in the loop 
          with the latest in cinema.
          </li>
          <li>
          Users can select a movie of their interest to find related the overview and release date of the movie
          </li>
          </ul>
        <p>
        I'm currently working on upgrading and enhancing projects. 
        I hope to secure a position where I can contribute to even larger projects. 
        In the meantime, I'll keep creating side projects.
        </p> 
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">International Non-Profit Organization</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Translator, 2021 — Present
        </p>
        <p>
        
        I immersed myself in diverse documents, researching industry terms. I meticulously 
        translated Korean/Chinese to English, ensuring the content retained its original
         meaning and tone. Additionally, I carefully proofread translated texts. Along the way, 
         I connected with a friend who continues to support me on my path to becoming a developer.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Longre</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          English Teacher, 2017 — 2023
        </p>
        <p>
        I created multiple preparatory programs to help students further their education. 
        I implemented new teaching strategies, including collaborative learning and the active 
        use of current technology. Also, I developed instructional strategies, materials, and 
        methodologies to assist business professionals in expanding their careers. However, it was always 
        interesting to talk to students and business professionals who were in the tech space,
        as I have always been interested.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">New York</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Various Work, 2014 — 2017
        </p>
        <p>
        This is where I had the chance to move to New York! I loved my time.
        I made some friends who were developers and they continued to share
        their interest with me. 
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">DIT AMERICA</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Testing Engineer, 2012 — 2014
        </p>
        <p>
          DIT AMERICA is a software evaluation and verification company for 
          car infotainment and mobile devices. This is where I got a glimpse 
          of the tech industry and coding. I worked on multiple projects to meet 
          deadline using software like QXDM, Slate, and more. Also had the chance
          to organized and lead multiple teams to increase productivity. This is 
          where my journey to becoming a fullstack software engineer begins. 
        </p>
      </div>
      </section> )
}




     