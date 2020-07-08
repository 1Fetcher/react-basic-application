import React, { Component } from 'react';


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Qualification</th>
        <th>Work Experience</th>
        <th>Skills</th>
        <th></th>
      </tr>
    </thead>
  )
}
const TableBody = ({resume, removeResume}) => {

    const rows = resume.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.qualification}</td>
                <td>{row.workexp}</td>
                <td>{row.skills}</td>
                <td>
                    <button
                        className="btn btn-primary"
                        onClick={(e) => removeResume(index)}
                    >
                        Remove
                    </button>
                </td>
            </tr>           
       )         
    })    
  return (
    <tbody>{rows}</tbody>
  )
}

const Table = (props) => {
    const { resumeData, removeResume } = props
   
        return (
            <table className="table">
                <TableHeader />
                <TableBody
                    resume={resumeData}
                    removeResume={removeResume}
                />
            </table>
        );
}

export default Table;