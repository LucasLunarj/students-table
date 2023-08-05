export const StudentInfo = (props) => {
    const whatIsTheStats = props.status
    const finalGradeTotal = props.finalGrade.toFixed(1)
    return (
        <>
            <tr className="border-solid border-b border-gray-400">

                <td >

                    <div className="flex flex-col md:p-2 pb-10  md:flex-row">
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
                    <p className="text-left pl-2 md:pl-6 ">{props.grade1}</p>
                </td>
                <td>
                    <p className="pl-2 md:text-left md:pl-6">{props.grade2}</p>
                </td>
                <td className="md:pl-10">{whatIsTheStats === false ? '--' : finalGradeTotal}</td>
            </tr >


        </>
    )
}