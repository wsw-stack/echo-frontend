import { MouseEventHandler } from "react";

import { CheckBox } from "./CheckBox"

export const UploadForm = () => {

    const postText: MouseEventHandler = async (e) => {
        e.preventDefault()
        
        try {
            // TODO: change API path
          const response = await fetch('https://jsonplaceholder.typicode.com/postst', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // TODO:
            body: JSON.stringify({title: 'foo',
                body: 'bar',
                userId: 1}),  // 将文本内容包装到请求主体中
          });
      
          if (!response.ok) {
            throw new Error('Failed to post data');
          }
      
          const data = await response.json();
          console.log('Data submitted successfully:', data);
          return data;  // 返回响应数据，方便其他地方使用
        } catch (error) {
          console.error('Error posting data:', error);
        }
    
    };

    
    return (
        <div className="m-3 col-6">
            <form>
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
                            <input className="form-control rounded-3 shadow-sm" type="file" id="formFile" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn mt-3 text-light border-light fw-bold" style={{ borderWidth: '2px' }} onClick={postText}>
                                Generate a response
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}