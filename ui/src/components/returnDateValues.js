import React from 'react'

function returnYear() {
    const d = new Date();
    const yearList = [];

    for(let i=1950; i<=d.getFullYear(); i++) {
        yearList.push(<option key={i} value={i}>{i}</option>)
    }

    return yearList
}