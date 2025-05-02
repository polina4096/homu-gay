import { AsciiPlayer } from "./components/AsciiPlayer";

import { frames } from "./frames";

export function App() {
  return (
    <div class="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <div
        class={`:uno:
          select-none whitespace-pre line-height-[1.1] font-ascii

          ${/* Color the magical girls */ ""}
          [&_[data-homura]]:(text-purple-500 py-0.2 -my-0.2 cursor-pointer) [&_[data-madoka]]:(text-red-500 py-0.2 -my-0.2 cursor-pointer)

          ${/* Light the hovered girl */ ""}
          [&:has([data-homura]:hover)_[data-homura]]:text-shadow-[0px_0px_8px_theme(colors.purple.500),0px_0px_16px_theme(colors.purple.500)]
          [&:has([data-madoka]:hover)_[data-madoka]]:text-shadow-[0px_0px_8px_theme(colors.red.500),0px_0px_16px_theme(colors.red.500)]

          ${/* Dim the unhovered girl */ ""}
          [&:has([data-homura]:hover):not(:has([data-madoka]:hover))_[data-madoka]]:(filter-blur-[0.5px] filter-saturate-75 filter-brightness-65)
          [&:has([data-madoka]:hover):not(:has([data-homura]:hover))_[data-homura]]:(filter-blur-[0.5px] filter-saturate-75 filter-brightness-65)
        `}
      >
        <AsciiPlayer animation={frames} frameDelay={78} />
      </div>
      <div class="flex gap-2 align-end font-ascii">
        <a href="https://github.com/polina4096/homu-gay">source</a>
        <div class="mt-0.5">&bull;</div>
        <div>
          <a href="https://std.mem.transmute.me">polina</a>
          {" "}
          &
          {" "}
          <a href="https://tei.su">alina</a>
        </div>
        <div class="mt-0.5">&bull;</div>
        <div>made with &lt;3</div>
      </div>
    </div>
  );
}
