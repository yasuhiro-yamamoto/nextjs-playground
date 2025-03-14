'use client';

import { type ComponentRef, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

type Person = {
  id: number;
  name: string;
};

const LIST: Person[] = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Steve' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'Jessica' },
  { id: 6, name: 'Emily' },
  { id: 7, name: 'Michael' },
  { id: 8, name: 'Chris' },
  { id: 9, name: 'Sarah' },
  { id: 10, name: 'Alex' },
];

const IMAGE_SIZE = 300;
const RESTART_TIME = 3000;
const IMAGE_PATH = '/img/shuffle-images';

export const ShuffleImages = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isShuffle, setIsShuffle] = useState<boolean>(true);
  const contentRef = useRef<ComponentRef<'ul'>>(null);

  const getSelectedIndex = (transform: string) => {
    const matrix = new DOMMatrix(transform);
    const translateX = Math.abs(matrix.m41);
    // X座標の移動量 / 1つの要素の幅
    const rawIndex = translateX / IMAGE_SIZE;
    const currentIndex = Math.round(rawIndex);

    return currentIndex;
  };

  const handleStop = () => {
    if (!contentRef.current || !isShuffle) return;

    // シャッフルを停止
    setIsShuffle(false);

    // ストップしたインデックスを移動量から計算
    const style = window.getComputedStyle(contentRef.current);
    const transform = style.transform;
    const selectedIndex = getSelectedIndex(transform);
    setSelectedIndex(selectedIndex + 1);
  };

  // 停止されてから3秒後に自動再開
  useEffect(() => {
    if (isShuffle) return;
    const timerID = setTimeout(() => {
      setIsShuffle(true);
    }, RESTART_TIME);

    return () => {
      clearInterval(timerID);
    };
  }, [isShuffle]);

  return (
    <div className={styles.container}>
      <div className={styles.shuffleArea}>
        <ul ref={contentRef} data-shuffle={isShuffle} className={styles.shuffleList}>
          {LIST.map((item) => (
            <li key={item.id} className={styles.shuffleItem}>
              <img
                src={`${IMAGE_PATH}/${item.id}.png`}
                alt={`${item.id}. ${item.name}`}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
              />
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handleStop} disabled={!isShuffle} className={styles.button}>
        {isShuffle ? 'すとっぷ' : '3秒後に再開されます...'}
      </button>
      <p>{isShuffle ? 'どこで止めるかな？' : `選んだのは:${selectedIndex}番目`}</p>
    </div>
  );
};
