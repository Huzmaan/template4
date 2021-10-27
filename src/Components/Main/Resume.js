import React from 'react'

const Resume = () => {
    return (
        <div className="MainResume-css">
            <div className="MainResume">
            <h2>Resume</h2>
            <h5>A draft from my CV</h5>
            </div>
            <div id="MainResume-id" className="MainResumeTable">
                <tr className="tableheading">
                    <th>Year</th>
                    <th>Title</th>
                    <th>Where</th>
                </tr>
                <tr className="table1">
                  <td>2012-2016</td>
                  <td>The rest is history..</td>
                  <td>Lorem ipsum</td>
                </tr>
                <tr className="table2">
                    <td>2009-2012</td>
                    <td>Started my own company</td>
                    <td>My Garage</td>
                </tr>
                <tr className="table3">
                <td>2008-2009</td>
                <td>Started working for Lorem</td>
                <td>London, UK</td>
                </tr>
                <tr className="table4">
                    <td>2005-2008</td>
                    <td>Degree in Bachelor of Design</td>
                    <td>Harvard, USA</td>
                </tr>
                <tr className="table5">
                    <td>2002-2005</td>
                    <td>Degree in Bachelor of Business</td>
                    <td>RMIT University, Melbourne, Australia</td>
                </tr>
                <tr className="table6">
                    <td>2002-2005</td>
                    <td>Degree in Bachelor of Business</td>
                    <td>RMIT University, Melbourne, Australia</td>
                </tr>
                </div>
            </div>
        
    )
}

export default Resume
