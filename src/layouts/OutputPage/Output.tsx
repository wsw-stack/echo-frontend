import { OutputSection } from "./Components/OutputSection"
import { useLocation } from "react-router-dom";
import { QASection } from "./Components/QASection";
export const Output = () => {
    const location = useLocation();
    const data = location.state.data;


    const qAndA = data?.['qa'] || null;  // 使用 data 的字段，设置默认值
    const transcript = data?.['transcripts'] || null;
    const notes = data?.['notes'] || null;
    const summary = data?.['summary'] || null;
    return (
        <div className="min-vh-100 bg-dark">
            <div className="container-fluid flex-grow-1 pt-3">
                <div className="col-6 offset-3">
                    {qAndA && <QASection title='Q&A' qAndA={qAndA} />}
                    {transcript && <OutputSection title='Transcript' text={transcript} />}
                    {notes && <OutputSection title='Notes' text={notes} />}
                    {summary && <OutputSection title='Summary' text={summary} />}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-black m-3 text-light border-white fw-bold" style={{ borderWidth: '2px' }} >
                            Download PDF
                        </button>
                        <button className="btn btn-black m-3 text-light border-white fw-bold" style={{ borderWidth: '2px' }} >
                            Download TXT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}