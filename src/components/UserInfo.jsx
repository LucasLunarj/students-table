export const UserInfo = (props) => {
    const whatIsTheStats = props.status
    const finalGradeTotal = props.finalGrade.toFixed(1)
    return (
        <>
            <tr className="">
                <td>
                    <div className="flex flex-col p-2 border-black md:flex-row">
                        <img className="rounded-full w-16 h-16"
                            src={props.avatarImg}
                            alt="" />
                        <div className="pl-2">
                            <p className="font-bold">
                                {props.name}
                            </p>
                            <p>{props.email}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        {whatIsTheStats === true ? <div>Active</div> : <div>Inactive</div>}
                    </div>
                </td>
                <td>
                    <p>{props.grade1}</p>
                </td>
                <td>
                    <p>{props.grade2}</p>
                </td>
                <td>{finalGradeTotal}</td>
            </tr >


        </>
    )
}