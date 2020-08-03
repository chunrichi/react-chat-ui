import { useTrail } from "react-spring";

export default function useStageredList(number) {
  // 6 个项目 + 配置项
  // translate3d 可以开启gpu加速，比2d好=>动画结束值
  // from 动画初始值
  // delay 延迟200毫秒
  const trailAnimes = useTrail(number, {
    transform: "translate3d(0px ,0px, 0px)",
    from: { transform: "translate3d(-50px, 0px, 0px)" },
    config: {
      mass: 0.8,
      tension: 280,
      friction: 20,
    },
    delay: 200,
  });

  return trailAnimes;
}
