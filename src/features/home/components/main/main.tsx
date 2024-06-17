import Card from '@/app/_ui/card/card';
import styles from './main.module.css';
import Link from 'next/link';

export default function Main () {
  return (
    <section className={`${styles['main']}`}>
      <Link
        className={`${styles['card-wrapper']}`}
        href={'http://localhost:3000'}
        target="_blank"
      >
        <Card headline="Headline" subhead="subhead" supportingText="何らかの説明を頑張って記載します。"/>
      </Link>
    </section>
  );
}