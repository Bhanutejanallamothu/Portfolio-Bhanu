"use client";

import { useEffect, useRef } from 'react';

export function BeamsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initBeams();
    };

    window.addEventListener('resize', handleResize);

    const config = {
      beamWidth: 2,
      beamHeight: 15,
      beamNumber: 12,
      lightColor: '#ffffff',
      speed: 2,
      noiseIntensity: 1.75,
      scale: 0.2,
      rotation: 0
    };

    const beams: { x: number; y: number; width: number; height: number; offset: number }[] = [];

    function random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function initBeams() {
      beams.length = 0;
      const spacing = width / config.beamNumber;
      for (let i = 0; i < config.beamNumber; i++) {
        beams.push({
          x: i * spacing + spacing / 2,
          y: height / 2,
          width: config.beamWidth * random(0.8, 1.2),
          height: height * random(0.8, 1.2),
          offset: random(0, 1000)
        });
      }
    }

    function drawBeams(time: number) {
        if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((config.rotation * Math.PI) / 180);
      ctx.translate(-width / 2, -height / 2);

      const gradientBase = ctx.createLinearGradient(0, 0, 0, height);
      gradientBase.addColorStop(0, 'rgba(255,255,255,0.15)');
      gradientBase.addColorStop(0.5, 'rgba(255,255,255,0.05)');
      gradientBase.addColorStop(1, 'rgba(255,255,255,0)');

      for (const beam of beams) {
        const n = Math.sin(time * 0.001 * config.speed + beam.offset) * config.noiseIntensity;
        const h = beam.height * (1 + n * config.scale);
        const w = beam.width * (1 + n * 0.5);
        const x = beam.x + Math.sin(time * 0.0005 + beam.offset) * 50 * config.scale;

        const grad = ctx.createLinearGradient(x, height / 2 - h / 2, x, height / 2 + h / 2);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.25, 'rgba(255,255,255,0.2)');
        grad.addColorStop(0.5, config.lightColor);
        grad.addColorStop(0.75, 'rgba(255,255,255,0.2)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.globalAlpha = 0.8 + Math.sin(time * 0.002 + beam.offset) * 0.1;
        ctx.fillStyle = grad;
        ctx.fillRect(x - w / 2, height / 2 - h / 2, w, h);
      }

      ctx.restore();
    }

    let animationFrameId: number;
    const animate = (t: number) => {
      drawBeams(t);
      animationFrameId = requestAnimationFrame(animate);
    };

    initBeams();
    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="beamsContainer" className="fixed top-0 left-0 w-full h-full -z-50 bg-[radial-gradient(ellipse_at_center,#0a0a0a_0%,#000000_100%)] dark:block hidden">
      <canvas id="beamsCanvas" ref={canvasRef} className="absolute top-0 left-0 w-full h-full block filter blur-[1px] brightness-110"></canvas>
    </div>
  );
}
