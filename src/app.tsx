import { useState } from "preact/hooks";
import "./app.css";

const DEFAULT_TEXT = "The quick brown fox jumps over the lazy dog.";

export enum TextOwner {
  CHAT_GPT = "chatGPT",
  HUMAN = "human",
}

export function App() {
  const [writtenBy, setWrittenBy] = useState<TextOwner>(TextOwner.CHAT_GPT);
  const [text, setText] = useState(DEFAULT_TEXT);

  function updateTextAndWriter(
    e: Omit<Event, "currentTarget"> & {
      readonly currentTarget: HTMLTextAreaElement;
    },
  ) {
    const newText = e.currentTarget.value;
    setText(newText);

    if (newText.length === 0) {
      setWrittenBy(TextOwner.HUMAN);
    }
  }

  return (
    <>
      <h1>Text owner detection</h1>
      <div class="card">
        <textarea
          class="input"
          placeholder="Write something..."
          value={text}
          onInput={(e) => updateTextAndWriter(e)}
        />
        <h5 class="writer">Writen by {writtenBy}</h5>
      </div>
      <p>
        The goal is to implement a function who detect when human replace all
        generated chatGPT text
      </p>
    </>
  );
}
