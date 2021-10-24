import React from 'react'

const Resume = () => {
    return (
        <div className="MainResume-css">
            <div className="MainResume">
            <h2>Resume</h2>
            <h5>A draft from my CV</h5>
            </div>
            <div id="MainResume-id" className="MainResumeTable">
                <td className="tableheading">
                    <th>Year</th>
                    <tr>2012-2016</tr>
                     <tr>2009-2012</tr>
                     <tr>2008-2009</tr>
                     <tr>2005-2008</tr>
                     <tr>2002-2005</tr>
                     <tr>2002-2005</tr>
                    </td>
                    <td className="tableheading"> 
                    <th>Title</th>
                    <tr>The rest is history..</tr>
                     <tr>Started my own company</tr>
                     <tr>Started working for Lorem</tr>
                     <tr>Degree in Bachelor of Design</tr>
                     <tr>Degree in Bachelor of Business</tr>
                     <tr>Degree in Bachelor of Business</tr>
</td>
<td className="tableheading">

                    <th>Where</th>
                    <tr>Lorem ipsum</tr>
                     <tr>My Garage</tr>
                     <tr>London, UK</tr>
                     <tr>Harvard, USA</tr>
                     <tr>RMIT University, Melbourne, Australia</tr>
                     <tr>RMIT University, Melbourne, Australia</tr>
                </td>
                </div>
            </div>
        
    )
}

export default Resume
