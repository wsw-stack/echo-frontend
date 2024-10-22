import { CheckBox } from "./CheckBox"

export const UploadForm = () => {
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