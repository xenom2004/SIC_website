"use client"

export default function Instrument({params}) {
    console.log(params);
    return (
        <div>
            <h1>{params.id}</h1>
         
        </div>
    );
}
