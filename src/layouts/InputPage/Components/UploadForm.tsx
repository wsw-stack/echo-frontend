import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { CheckBox } from "./CheckBox";
import { useNavigate } from "react-router-dom";

export const UploadForm = () => {
    const navigate = useNavigate();
    const [text, setText] = useState<string>("");
    const [outputTypes, setOutputTypes] = useState<string[]>([]);

    const postText: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (!text.trim()) {
            alert("Please provide text to process.");
            return;
        }

        if (outputTypes.length === 0) {
            alert("Please select at least one output type.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/api/process-content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content: text, data_types: outputTypes }),
            });

            if (!response.ok) {
                throw new Error("Failed to post data");
            }

            const data = await response.json();
            console.log("Data submitted successfully:", data);

            // Navigate to '/output', passing data in state
            navigate("/output", { state: { data } });
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    const handleUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            fetch("http://127.0.0.1:5000/api/extract-text", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setText(data.text);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    const handleCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { id, checked } = e.target;
        setOutputTypes((prevOutputTypes) => {
            if (checked) {
                return [...prevOutputTypes, id];
            } else {
                return prevOutputTypes.filter((type) => type !== id);
            }
        });
    };

    return (
        <div className="m-3 col-6">
            <form onSubmit={postText}>
                <div className="card bg-dark border-white">
                    <div className="card-body">
                        <p className="card-text fs-4 text-light">Select the content you want to generate</p>
                        <div className="row m-3">
                            <CheckBox id="qa" labelText="Q & A" onChange={handleCheckbox} />
                            <CheckBox id="transcripts" labelText="Transcripts" onChange={handleCheckbox} />
                            <CheckBox id="notes" labelText="Notes" onChange={handleCheckbox} />
                            <CheckBox id="summary" labelText="Summary" onChange={handleCheckbox} />
                        </div>
                        <div className="mb-3">
                            <p className="card-text fs-4 text-light lh-sm mb-1">Select a media file</p>
                            <p className="card-text fs-6 text-secondary">
                                Supported types: pdf, .mp3, and .mp4, maximum 1GB
                            </p>
                            <input
                                className="form-control rounded-3 shadow-sm"
                                onChange={handleUpload}
                                type="file"
                                id="formFile"
                            />
                            <textarea
                                className="form-control mt-3 rounded-3 shadow-sm"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Or paste your text here"
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn mt-3 text-light border-light fw-bold"
                                style={{ borderWidth: "2px" }}
                            >
                                Generate a response
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
