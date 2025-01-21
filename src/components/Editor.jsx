import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChageContent = (e) => {
        setContent(e.target.value);
    }

    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    return (

        <div className="Editor">
            <input
                ref={contentRef}
                onKeyDown={onKeydown}
                value={content}
                onChange={onChageContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;