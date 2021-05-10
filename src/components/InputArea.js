import React from "react";

const InputArea = (props) => {
    return (
        <form>
            <textarea id="textArea" value={props.textInput} className=" h5" type="text" onChange={props.onChangeInput} placeholder="ex. 1 cup rice"></textarea>
            <div className="d-flex justify-content-between courier ">
                <button
                    className="btn btn-success fw6 f3"
                    onClick={(e) => {
                        props.onClickEvent(e);
                    }}
                    type="button"
                >
                    {"Analyze"}
                </button>
                {props.showContent ? (
                    <button
                        onClick={(e) => {
                            props.onClickEvent(e);
                        }}
                        className="btn btn-info fw6 f3"
                        type="button"
                    >
                        {"New recipe"}
                    </button>
                ) : (
                    ""
                )}
            </div>
        </form>
    );
};

export default InputArea;
