import { DescriptionProps } from '@/app/_ui/description/description.types';
import styles from './description.module.css';

export default function Description ({heading, description}: DescriptionProps) {
  return (
    <section className={`${styles['container']}`}>
      <div className={`${styles['title']}`}>
        <h1 className={`${styles['heading']}`}>{heading}</h1>
        <p className={`${styles['description']}`}>{description}</p>
      </div>
    </section>
  );
}