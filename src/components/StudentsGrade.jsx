import { students } from '../data/students'
import { StudentInfo } from './StudentInfo'

export const StudentsGrade = () => {



    return (


        < div className='bg-slate-300 md:mx-14  '>
            <table className=' w-full table-fixed md:table-auto'>
                <thead className='w-full h-auto border-solid border-1 border-black bg-slate-800 text-white'>
                    <tr className='text-left'>
                        <th className=' text-left text-sm  md:py-3 md:pl-2 w-30' scope="col"><p>Nome</p> </th>
                        <th className='pl-3' scope="col"><p>Status</p></th>
                        <th className='pl-3' scope="col"><p>Grade 1</p></th>
                        <th className='pl-3' scope="col"><p>Grade 2</p></th>
                        <th className='pl-3' scope="col"><p>Final Grade</p></th>
                    </tr>
                </thead>
                <tbody >
                    {
                        students.map((data) => {
                            return <StudentInfo
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