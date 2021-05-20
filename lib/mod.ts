const getCurrentTimestamp = () => {
    const date = new Date();
    return [
      date.getFullYear().toString(),
      (date.getMonth() + 1).toString().padStart(2, "0"),
      date.getDate().toString().padStart(2, "0"),
      date.getHours().toString().padStart(2, "0"),
      date.getMinutes().toString().padStart(2, "0"),
      date.getSeconds().toString().padStart(2, "0"),
    ].join("");
  },
  createMessage = () =>
    Deno.args.length === 0
      ? ""
      : `${getCurrentTimestamp()} ${Deno.args.join(" ")}\n`;

export const mod = () => {
  const message = createMessage();
  if (message.length > 0) {
    Deno.writeTextFileSync("./log.txt", message, { append: true });
    console.log(message);
  }
};
