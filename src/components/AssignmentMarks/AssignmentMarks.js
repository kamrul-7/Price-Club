import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: "Assignment 1",
            marks: 51,
            quiz: 5,
            amt: 2400
        },
        {
            name: "Assignment 2",
            marks: 56,
            quiz: 9,
            amt: 2210
        },
        {
            name: "Assignment 3",
            marks: 54,
            quiz: 10,
            amt: 2290
        },
        {
            name: "Assignment 4",
            marks: 58,
            quiz: 8,
            amt: 2000
        },
        {
            name: "Assignment 5",
            marks: 56,
            quiz: 9,
            amt: 2181
        },
        {
            name: "Assignment 6",
            marks: 60,
            quiz: 6,
            amt: 2500
        },
        {
            name: "Assignment 7",
            marks: 44,
            quiz: 7,
            amt: 2100
        }

    ];
    return (
        <div>
            <LineChart width={400} height={300} data={data}><Line type="monotone" dataKey="marks" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <Tooltip>
                </Tooltip>
                <YAxis>
                </YAxis>
                <CartesianGrid></CartesianGrid>
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer></LineChart>
        </div>
    );
};

export default AssignmentMarks;