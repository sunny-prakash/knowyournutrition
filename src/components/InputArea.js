import React from "react";

const InputArea = (props) => {
    return (
        <form>
            <textarea type="text" onChange={props.onChangeInput}></textarea>
            <div>
                <button onClick={props.onClickEvent} type="button">
                    {"Analyze"}
                </button>
                <button type="button">{"New recipe"}</button>
            </div>
        </form>
    );
};

export default InputArea;
