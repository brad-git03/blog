import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I'm <strong>Brad</strong>, I enjoy building scalable and user-friendly applications and am always looking for new challenges and opportunities to learn.</p>
        <p>
          I have a passion for all things tech and music. In my free time, I love to unwind by playing online games and delving into the world of coding. I also enjoy expressing my creativity through music, playing instruments like the guitar and piano.
        </p>
        <p>
          My favorite music genres are lofi music, which I find incredibly relaxing, and OPM songs, which I love for their meaningful lyrics and unique melodies. When it comes to food, I'm a big fan of pizza, ramen, and sushi.
        </p>
        <p>
          Five years from now, I see myself as a successful developer. I'll have built a fulfilling career, constantly learning new technologies, and contributing to meaningful projects. I am dedicated to making that vision a reality and becoming a skilled and successful developer.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>        
      </section>
    </Layout>
  );
}