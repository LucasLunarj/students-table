import { students } from '../data/students'
import { UserInfo } from './UserInfo'

export const StudentsGrade = () => {



    return (


        < div >
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome </th>
                        <th scope="col">Status</th>
                        <th scope="col">Grade 1</th>
                        <th scope="col">Grade 2</th>
                        <th scope="col">Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((data) => {
                            return <UserInfo
                                id={data.id}
                                name={data.name}
                                email={data.email}
                                status={data.active}


                            />
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}