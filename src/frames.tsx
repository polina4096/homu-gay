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
            state += "</a>";
          }

          state += "\n";
          break;

        case "M":
          if (!closed) {
            state += "</a>";
          }

          state += "<a data-madoka href='https://mado.gay'>";
          closed = false;
          break;
        case "H":
          if (!closed) {
            state += "</a>";
          }

          state += "<a data-homura href='https://homu.gay'>";
          closed = false;
          break;
        case "R":
          closed = true;
          state += "</a>";
          break;
        default:
          state += e;
      }

      return state;
    }, "") + (!closed ? "</a>" : "");
  });
