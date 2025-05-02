import { createEffect, createSignal, onMount } from "solid-js";

export function AsciiPlayer(props: {
  animation: string[];
  frameDelay: number;
}) {
  let player!: HTMLDivElement;

  const [timer, setTimer] = createSignal<ReturnType<typeof setInterval> | undefined>();
  const [frame, setFrame] = createSignal(0);

  onMount(() => {
    if (timer() !== undefined) {
      clearInterval(timer());
      setTimer(undefined);
      return;
    }

    setTimer(setInterval(() => {
      setFrame((frame() + 1));
    }, props.frameDelay));
  });

  createEffect(() => {
    if (frame() >= props.animation.length) {
      setFrame(0);
    }
    else if (frame() < 0) {
      setFrame(props.animation.length - 1);
    }

    const frameContent = props.animation[frame()];
    player.innerHTML = frameContent;
  });

  return (
    <div ref={player} />
  );
}
