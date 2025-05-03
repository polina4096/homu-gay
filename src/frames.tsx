const framesImported = import.meta.glob("./frames/*.txt", {
  eager: true,
  query: "?raw",
});

export const frames = Object
  .entries(framesImported)
  .sort((a, b) => {
    const x = a[0].split("./frames/")[1].split(".")[0];
    const y = b[0].split("./frames/")[1].split(".")[0];

    return Number.parseInt(x) - Number.parseInt(y);
  })
  .map((x) => {
    const frame = ((x[1] as any).default as string)
      .split("\n")
      .slice(0, 26)
      .join("\n");

    let closed = true;
    return [...frame].reduce((acc, e) => {
      let state = acc;

      switch (e) {
        case "\n":
          if (!closed) {
            state += "</span>";
          }

          state += "\n";
          break;

        case "M":
          if (!closed) {
            state += "</span>";
          }

          state += "<span data-madoka onmousedown='window.lastLink = \"https://mado.gay\"' onmouseup='window.location.href = window.lastLink'>";
          closed = false;
          break;
        case "H":
          if (!closed) {
            state += "</span>";
          }

          state += "<span data-homura onmousedown='window.lastLink = \"https://std.mem.transmute.me\"' onmouseup='window.location.href = window.lastLink'>";
          closed = false;
          break;
        case "R":
          closed = true;
          state += "</span>";
          break;
        default:
          state += e;
      }

      return state;
    }, "") + (!closed ? "</span>" : "");
  });
