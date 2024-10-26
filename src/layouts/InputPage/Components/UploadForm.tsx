import { ChangeEventHandler, FormEventHandler, useState, useEffect } from "react";
import { CheckBox } from "./CheckBox";
import { useNavigate } from "react-router-dom";

export const UploadForm = () => {
    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        qa: false,
        transcripts: false,
        notes: false,
        summary: false,
    });
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [isTextApiPending, setIsTextApiPending] = useState(false)

    useEffect(() => {
        if (!Object.values(checkboxes).includes(true)) {
            setError("Please select at least one option.");
        } else {
            setError('');
        }
    }, [checkboxes]);

    const handleCheckboxChange = (id: string, isChecked: boolean) => {
        setCheckboxes((prev) => ({
            ...prev,
            [id]: isChecked,
        }));
    };

    const postText: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (!Object.values(checkboxes).includes(true)) {
            setError("Please select at least one option.");
            return;
        }

        if (!text.trim()) {
            alert("Please provide text to process.");
            return;
        }

        const outputTypes = Object.entries(checkboxes)
            .filter(([_, isChecked]) => isChecked)
            .map(([key]) => key);

        try {
            setIsTextApiPending(true)
            const response = await fetch("http://127.0.0.1:5000/api/process-content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content: text, data_types: outputTypes }),
            });

            if (!response.ok) throw new Error('Failed to post data');

            const data = await response.json();
            console.log("Data submitted successfully:", data);

            navigate("/output", { state: { data } });
        } catch (error) {
            console.error("Error posting data:", error);
        } finally {
            setIsTextApiPending(false)
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

    return (
        <div className="m-3 col-6">
            <form onSubmit={postText}>
                <div className="card bg-dark border-white">
                    <div className="card-body">
                        <p className="card-text fs-4 text-light">Select the content you want to generate</p>
                        <div className="row m-3">
                            <CheckBox id="qa" labelText="Q & A" checked={checkboxes.qa} onChange={handleCheckboxChange} />
                            <CheckBox id="transcripts" labelText="Transcripts" checked={checkboxes.transcripts} onChange={handleCheckboxChange} />
                            <CheckBox id="notes" labelText="Notes" checked={checkboxes.notes} onChange={handleCheckboxChange} />
                            <CheckBox id="summary" labelText="Summary" checked={checkboxes.summary} onChange={handleCheckboxChange} />
                        </div>
                        {error && <p className="text-danger">{error}</p>}

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
                                disabled={isTextApiPending}
                            >
                                {isTextApiPending && <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>}
                                {!isTextApiPending && "Generate a response"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
