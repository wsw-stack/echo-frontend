import { useCollapse } from 'react-collapsed'

export const QACollapse = (props: any) => {
    const { getCollapseProps, getToggleProps } = useCollapse()

    return (
        <div className="card bg-dark border-white mt-3 mb-3">
            <div className="p-3 pb-2" {...getToggleProps()}>
                <h3 className="fs-6 text-light fw-bold border-0">Q{props.index + 1}. {props.title}</h3>
            </div>
            <hr className="border-light m-0"></hr>
                <div className="card-body" {...getCollapseProps()}>
                    <p className="fs-6 card-text text-light">A{props.index}. {props.text} </p>
            </div>
        </div>
    )
}