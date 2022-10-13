import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CatCard {...mockCatCardProps.base} />
    </div>
  );
};

export default Home;
