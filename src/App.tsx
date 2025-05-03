import { AsciiPlayer } from "./components/AsciiPlayer";

import { frames } from "./frames";

export function App() {
  return (
    <div class=":uno: overflow-hidden h-screen w-screen flex flex-col items-center justify-center gap-4">
      <div
        class=":uno: text-[10px]  xs:text-[12px] sm:text-[14px] md:text-[16px] select-none whitespace-pre line-height-[1.1] font-ascii [&_[data-homura]]:(text-purple-500 py-0.2 -my-0.2 cursor-pointer) [&_[data-madoka]]:(text-red-500 py-0.2 -my-0.2 cursor-pointer) [&:has([data-homura]:hover)_[data-homura]]:text-shadow-[0px_0px_8px_theme(colors.purple.500),0px_0px_16px_theme(colors.purple.500)] [&:has([data-madoka]:hover)_[data-madoka]]:text-shadow-[0px_0px_8px_theme(colors.red.500),0px_0px_16px_theme(colors.red.500)] [&:has([data-homura]:hover):not(:has([data-madoka]:hover))_[data-madoka]]:(filter-blur-[0.5px] filter-saturate-75 filter-brightness-65) [&:has([data-madoka]:hover):not(:has([data-homura]:hover))_[data-homura]]:(filter-blur-[0.5px] filter-saturate-75 filter-brightness-65)"
      >
        <AsciiPlayer animation={frames} frameDelay={78} />
      </div>
      <div class="font-ascii">
        <a href="https://github.com/polina4096/homu-gay">source</a>
        {" "}
        <span class="transform-translate-y-[2px] inline-block">&bull;</span>
        {" "}
        <span>
          <a href="https://std.mem.transmute.me">polina</a>
          {" "}
          &
          {" "}
          <a href="https://tei.su">alina</a>
        </span>
        {" "}
        <span class="transform-translate-y-[2px] inline-block">&bull;</span>
        {" "}
        <span>made with &lt;3</span>
      </div>
    </div>
  );
}
