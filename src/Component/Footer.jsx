import React from 'react'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Internships by places</h4>
                        <ul className="list-unstyled">
                            <li>Internship in India</li>
                            <li>Internship in Delhi</li>
                            <li>Internship in Bangalore</li>
                            <li>Internship in Hyderabad</li>
                            <li>Internship in Mumbai</li>
                            <li>Internship in Chennai</li>
                            <li>Internship in Gurgaon</li>
                            <li>Internship in Kolkata</li>
                            <li>Virtual internship</li>

                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="ccl">
                        <h4>Internship by Stream</h4>
                        <ul>
                            <li>Computer Science Internship</li>
                            <li>Electronics Internship</li>
                            <li>Mechanical Internship</li>
                            <li>Civil Internship</li>
                            <li>Marketing Internship</li>
                            <li>Chemical Internship</li>
                            <li>Finance Internship</li>
                            <li>Summer Research Fellowship</li>
                            <li>Campus Ambassador Programs</li>
                        </ul>

                    </div>
                    {/* column3 */}
                    <div className="ccl">
                        <h4 className="container">Online Trainigs</h4>
                        <ul >
                            <li>Web Development</li>
                            <li>Android App Development</li>
                            <li>Programming with Python</li>
                            <li>Data Science</li>
                            <li>Ethical Hacking</li>
                            <li>Core Java</li>
                            <li>Digital Marketing</li>
                            <li>Advanced Excel</li>
                            <li>Programming with C & c++</li>
                        </ul>

                    </div>
                    
                </div>

            </div>
           
        </div>
    )
}

export default Footer
