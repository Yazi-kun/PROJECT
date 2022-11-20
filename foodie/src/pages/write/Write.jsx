import React from "react"
import  { useState } from "react"
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./write.css";

function Write(){

    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

      console.log(value,"this is quill editor")
    
    return(
        <div className="write">
            
            

            <img
                className="writeImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                />
                </div>
                <div className="writeFormGroup">
                    <div style={{ width: '70vw', height: 300}}>
                        <div ref={quillRef} />
                    </div>
               </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>

        </div>
    );
}
export default Write;