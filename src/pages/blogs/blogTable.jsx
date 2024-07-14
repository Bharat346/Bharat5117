import React from "react";
import { useState , useEffect } from "react";

const BlogTableRow = ({val}) => {
    return(
        <>
        <tr>
        {val.map((cell, index) => (
                <td className="Blog-table-row-shell"
                colSpan={cell.colSpan || 1}
                rowSpan={cell.rowSpan || 1}
                >{cell.content}</td>
        ))}
        </tr>
        </>
    );
}

const BlogTable = ({tableContent}) => {
    return(
        <>
        <table className="Blog-table" border={2} cellSpacing={10} cellPadding={10} width={"50%"}>
            <tbody>
            {tableContent.map((row,index) => (
                <BlogTableRow key={index} val={row}/>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default BlogTable;