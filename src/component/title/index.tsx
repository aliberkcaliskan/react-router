import React from "react";

export default function Title({ title, fontSize = '30px' }) {
    return <h1 style={{ fontSize: fontSize }}>{title}</h1>
}