import React, { useMemo, useEffect, useState } from 'react';
import './UniverseBackground.css';

const generateStars = (count, sizeClass) => {
  return Array.from({ length: count }, (_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const animationDelay = `${Math.random() * 3}s`;
    return (
      <div
        key={`${sizeClass}-${index}`}
        className={`star ${sizeClass}`}
        style={{ top: `${top}%`, left: `${left}%`, animationDelay }}
      />
    );
  });
};

const generateConstellations = () => {
  const groups = [
    [
      { top: 20, left: 10 },
      { top: 22, left: 14 },
      { top: 25, left: 18 },
    ],
    [
      { top: 60, left: 70 },
      { top: 63, left: 75 },
      { top: 66, left: 80 },
      { top: 68, left: 85 },
    ],
    [
      { top: 40, left: 40 },
      { top: 42, left: 45 },
      { top: 45, left: 48 },
    ],
  ];

  return groups.map((group, index) => (
    <div key={index} className="constellation">
      {group.map((pos, i) => (
        <div
          key={i}
          className="star constellation-star"
          style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
        />
      ))}
    </div>
  ));
};

const UniverseBackground = () => {
  const stars = useMemo(
    () => [
      ...generateStars(120, 'small'),
      ...generateStars(60, 'medium'),
      ...generateStars(25, 'large'),
    ],
    [],
  );

  const constellations = useMemo(() => generateConstellations(), []);

  const [flashes, setFlashes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      setFlashes((prev) => [...prev, { id, top, left }]);

      setTimeout(() => {
        setFlashes((prev) => prev.filter((f) => f.id !== id));
      }, 800); // длительность вспышки
    }, 4000); // каждые 4 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="universe-background">
      {stars}
      {constellations}
      <div className="planet planet-1" />
      <div className="planet planet-2" />
      <div className="sun" />
      <div className="comet comet-1" />
      <div className="comet comet-2" />
      <div className="meteor" />
      <div className="nebula" />

      {flashes.map((flash) => (
        <div
          key={flash.id}
          className="flash"
          style={{ top: `${flash.top}%`, left: `${flash.left}%` }}
        />
      ))}
    </div>
  );
};

export default UniverseBackground;
