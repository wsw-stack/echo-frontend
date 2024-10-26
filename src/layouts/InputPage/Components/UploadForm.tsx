import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from "react";

import { CheckBox } from "./CheckBox"
import { useNavigate } from "react-router-dom";

export const UploadForm = () => {
    const navigate = useNavigate();  // 使用 useNavigate 钩子
    const [text, setText] = useState<string>('');
    const postText: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:5000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
            });

            if (!response.ok) {
                throw new Error('Failed to post data');
            }

            const data = await response.json();
            console.log('Data submitted successfully:', data);
            
            // 在这里进行重定向，传递数据
            navigate('/output', { state: { data } });  // 使用 state 传递数据

        } catch (error) {
            console.error('Error posting data:', error);
        }
    };
    // send to backend to change to text and put in the text area
    const handleUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
    
            fetch('http://127.0.0.1:5000/to_text', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setText(data.text);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    
    return (
        <div className="m-3 col-6">
            <form onSubmit={postText}>
                <div className="card bg-dark border-white">
                    <div className="card-body">
                        <p className="card-text fs-4 text-light">Select the content you want to generate</p>
                        <div className="row m-3">
                            <CheckBox id="qa" labelText="Q & A" key="1" />
                            <CheckBox id="transcripts" labelText="Transcripts" key="2" />
                            <CheckBox id="notes" labelText="Notes" key="3" />
                            <CheckBox id="summary" labelText="Summary" key="4" />
                        </div>
                        <div className="mb-3">
                            <p className="card-text fs-4 text-light lh-sm mb-1">Select a media file</p>
                            <p className="card-text fs-6 text-secondary">Supported types: .mp3 and .mp4, maximum 1GB</p>
                            <input className="form-control rounded-3 shadow-sm" onChange={(e) => handleUpload(e) } type="file" id="formFile" />
                            <textarea className="form-control mt-3 rounded-3 shadow-sm" value={text} placeholder="Or paste your text here" rows={5}></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn mt-3 text-light border-light fw-bold" style={{ borderWidth: '2px' }}>
                                Generate a response
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}