import { createEffect, createSignal, For, onMount } from "solid-js";

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

    const curr = frame();
    const prev = curr - 1 < 0 ? props.animation.length - 1 : curr - 1;
    player.children[prev].classList.add("hidden");
    player.children[curr].classList.remove("hidden");
  });

  return (
    <div ref={player}>
      <For each={props.animation}>
        {frameContent => <div class="hidden" innerHTML={frameContent} />}
      </For>
    </div>
  );
}
