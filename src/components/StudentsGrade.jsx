import { students } from '../data/students'
import { UserInfo } from './UserInfo'

export const StudentsGrade = () => {



    return (


        < div className='bg-slate-300 mx-14  '>
            <table className='table-auto w-full md:table-fixed'>
                <thead className='w-full h-auto border-solid border-1 border-black bg-slate-800 text-white'>
                    <tr className='text-left'>
                        <th className=' text-left  py-3 pl-2' scope="col"><p>Nome</p> </th>
                        <th className='pl-3' scope="col"><p>Status</p></th>
                        <th className='pl-3' scope="col"><p>Grade 1</p></th>
                        <th className='pl-3' scope="col"><p>Grade 2</p></th>
                        <th className='pl-3' scope="col"><p>Final Grade</p></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((data) => {
                            return <UserInfo
                                key={data.id}
                                avatarImg={data.avatar}
                                name={data.name}
                                email={data.email}
                                status={data.active}
                                grade1={data.grade1}
                                grade2={data.grade2}
                                finalGrade={(data.grade1 + data.grade2) / 2}
                            />
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}