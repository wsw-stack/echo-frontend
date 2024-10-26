import ReactMarkdown from 'react-markdown'

export const OutputSection = (props: any) => {
    return (
        <div className="card bg-dark border-white mt-3 mb-3">
            <div className="p-3 pb-2">
                <h3 className=" text-light fw-bold border-0">{props.title}</h3>
            </div>
            <hr className="border-light m-0"></hr>
            <div className="card-body">
                <p className="card-text text-light"><ReactMarkdown children={props.text} /></p>
            </div>
        </div>
    )
}