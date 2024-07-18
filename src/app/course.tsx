"use client"
import { ICourse } from "./lib/api"

interface Props {
    elm: ICourse
}
export const Course = ({ elm }: Props) => {
    return <div  className="course">
        <img src={elm.cover} 
        width={500}
        height={300}
        />
        <p>{elm.name} </p>
        <p> <strong> {elm.duration} month</strong></p>
        <strong>{elm.price} AMD</strong>

    </div>
}