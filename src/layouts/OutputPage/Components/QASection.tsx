import { QACollapse } from "./QACollapse"

export const QASection = (props: any) => {
    return (
        <div className="card bg-dark border-white mt-3 mb-3">
            <div className="p-3 pb-2">
                <h3 className=" text-light fw-bold border-0">{props.title}</h3>
            </div>
            <hr className="border-light m-0"></hr>
            <div className="card-body">
            {
                props.qAndA?.map((item: any , index: any) => (
                    <QACollapse key={index} index={index} title={item.question} text={item.answer} />
                ))
            }
            </div>
        </div>
    )
}