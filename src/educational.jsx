import React from "react";
import BlogTable from "./pages/blogs/blogTable";

const EducationSection = () => {
    const tbody1 = [
        [
            {
                content : "Educational - Details",
                colSpan : 4
            }
        ],[
            {
                content : "S.N."
            },
            {
                content : "Exam - Board"
            },
            {
                content : "Exam-Name"
            },
            {
                content : "Result"
            }
        ],
        [
            {
                content : "1"
            },
            {
                content : "RBSE Board",
                rowSpan : 2
            },
            {
                content : "10th"
            },
            {
                content : "95.83%"
            }
        ],
        [
            {
                content : "2"
            },
            {
                content : "12th"
            },
            {
                content : "96.20%"
            }
        ],
        [
            {
                content : "3"
            },
            {
                content : "NTA",
            },
            {
                content : "JEE - mains"
            },
            {
                content : "98.83%tile"
            }
        ],
        [
            {
                content : "4"
            },
            {
                content : "IIT",
            },
            {
                content : "JEE - Advanced"
            },
            {
                content : "118 marks"
            }
        ],
    ]

    const tbody2 = [
        [
            {
                content : "Educational - Details in Nit Delhi",
                colSpan : 4
            }
        ],
        [
            {
                content : "Year"
            },
            {
                content : "semeter"
            },
            {
                content : "SGPA"
            },
            {
                content : "CGPA"
            }
        ],
        [
            {
                content : "1st",
                rowSpan : 2
            },
            {
                content : "1st",
            },
            {
                content : "8.25"
            },
            {
                content : "8.15",
                rowSpan : 2
            }
        ],[
            {
                content : "2nd"
            },
            {
                content : "8.05"
            }
        ]
    ]
    return(
        <>
        <div className="Education-page">
        <BlogTable tableContent={tbody1}/>
        <BlogTable tableContent={tbody2}/>
        </div>
        </>
    );
}

export default EducationSection;