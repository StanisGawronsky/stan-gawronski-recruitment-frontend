import { useEffect, useRef } from "react";
import { Effect } from "./utils/Effect";
import styles from "./styles.module.scss";

const DarkMode = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let effect = new Effect(canvas.width, canvas.height);
      let lastTime = 0;
      const fps = 60;
      const nextFrame = 1000 / fps;
      let timer = 0;

      const animate = (timeStamp: number) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (timer > nextFrame && effect.symbols) {
          ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.font = effect.fontSize + "px monospace";
          effect.symbols.forEach((symbol) => symbol.draw(ctx));
          timer = 0;
        } else {
          timer += deltaTime;
        }
        requestAnimationFrame(animate);
      };
      animate(0);

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effect.resize(canvas.width, canvas.height);
      });
    }
  }, []);

  return (
    <>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>
    </>
  );
};

export default DarkMode;
