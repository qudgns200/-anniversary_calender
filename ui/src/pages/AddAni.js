import React, { useState } from 'react';
import "bulma"

const selectStyle = {
    flex: 1,
    // width: "14em"
}

function AddAni() {
    const yearList = [];
    const monthList = [];
    const dayList = [];

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);

    const [list, setList] = useState([])

    function calYear() {
        const d = new Date();
        for(let i=1950; i<=d.getFullYear(); i++) {
            yearList.push(<option key={"y" + i} value={i}>{i}</option>)
        }
    }
    
    function calMonth() {
        for(let i=1; i<=12; i++) {
            monthList.push(<option key={"m" + i} value={i}>{i}</option>)
        }
    }

    function yearHandle(e) {
        setYear(e.target.value)
    }

    function monthHandle(e) {
        setMonth(e.target.value)
    }

    function dayHandle(e) {
        setDay(e.target.value)
    }

    function onClickHandle(e) {

        // 새로 날짜를 받아오기 전에 초기화
        setList([
            list.splice(0)
        ])

        // 연월에 따른 날짜 가져오기
        // Date(연, 월, 일) 일 때 
        // "일" 에다가 0 이하의 숫자를 입력할 시 초기 지정한 월에서
        // 그 전 월 날짜로 계산
        const d = new Date(year, month+1, 0);

        for(let i=1;i<=d.getDate();i++) {
            setList([
                ...list,
                    list.push(i)
            ])
        }
    }

    calYear();
    calMonth();

    return (
        <div className="container">
            <br/>
            <form>
                <div className="columns is-one-third">
                    <div className="column">
                        <div className="label is-large">Year</div>
                        <div className="select is-large">
                            <select style={selectStyle} id="year" onChange={yearHandle} value={year}>
                                {yearList}
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <div className="label is-large">Month</div>
                        <div className="select is-large">
                            <select style={selectStyle} id="month" onChange={monthHandle} value={month}>
                                {monthList}
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <div className="label is-large">Day</div>
                        <div className="select is-large">
                            <select style={selectStyle} id="day" onClick={onClickHandle} onChange={dayHandle} value={day}>
                                {list.map(op => (
                                    <option key={"d" + op} value={op}>{op}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <span>Content</span>
                    <div className="control">
                        <input className="input is-large" type="text" placeholder="Text input"/>
                    </div>
                </div>

                <div className="buttons">
                    <button className="button is-primary">Confirm</button>
                    <button className="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddAni;