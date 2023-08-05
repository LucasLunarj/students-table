export const UserInfo = (props) => {
    const whatIsTheStats = props.status
    const finalGradeTotal = props.finalGrade.toFixed(1)
    return (
        <>
            <tr className="">
                <td>
                    <div className="flex flex-col md:p-2 pb-10 border-black md:flex-row">
                        <img className="rounded-full w-16 h-16"
                            src={props.avatarImg}
                            alt="" />
                        <div className="pl-2">
                            <p className="font-bold">
                                {props.name}
                            </p>
                            <p className="text-xs">{props.email}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="">
                        {whatIsTheStats === true ? <div className=" text-white border-solid bg-green-500 text-center rounded-lg  md:w-20 ">Active</div> : <div className="text-white border-solid bg-red-600 text-center rounded-lg md:w-20 ">Inactive</div>}
                    </div>
                </td>
                <td>
                    <p className="text-left pl-2 md:pl-3 ">{props.grade1}</p>
                </td>
                <td>
                    <p className="pl-2 md:text-left md:pl-3">{props.grade2}</p>
                </td>
                <td className="md:pl-3">{finalGradeTotal}</td>
            </tr >


        </>
    )
}