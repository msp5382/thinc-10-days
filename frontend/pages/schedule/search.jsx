/* eslint-disable */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar";
import TextField from "../../components/TextField";
import axios from "axios"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const days = {
  "MO": "MON",
  "TU": "TUE",
  "WE": "WED",
  "TH": "THU",
  "FR": "FRI"
}
const dragType = {
  SUBJECT: "SUBJECT"
}
const transform = (data) => {
  const inSections = data.map(m => ({
    time: m.classes.map(({ day, start, end, type, ...c }) => {
      let startTime = Number(start.split(":")[0])
      let endTime = Number(end.split(":")[0])
      if (endTime > 18) {
        endTime = 18
      }
      let trailingStart = Number(start.split(":")[1])
      let trailingEnd = Number(end.split(":")[1])
      if (trailingStart != 0) startTime += 0.5
      if (trailingEnd != 0) endTime += 0.5
      if (endTime == 18 && startTime == 18) {
        startTime = 17
      }
      return ({
        day: days[day],
        start: startTime,
        hour: endTime - startTime,
        type, ...c
      })
    })
  }))
  let merged = []
  let i = 0
  for (let sec of inSections) {
    merged = merged.concat(sec.time.map(t => ({ ...t, sec: i + 1 })))
    i++
  }
  return merged
}
const findSubject = (keyword) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  return {
    data: axios.post('https://api.cugetreg.com/graphql', {
      "operationName": "Search",
      "variables": {
        "filter": {
          "keyword": keyword,
          "dayOfWeeks": [],
          "limit": 15,
          "offset": 0
        },
        "courseGroup": {
          "studyProgram": "S",
          "academicYear": "2564",
          "semester": "1"
        }
      },
      "query": "query Search($filter: FilterInput!, $courseGroup: CourseGroupInput!) {\n  search(filter: $filter, courseGroup: $courseGroup) {\n    studyProgram\n    semester\n    academicYear\n    courseNo\n    abbrName\n    courseNameTh\n    courseNameEn\n    faculty\n    department\n    credit\n    creditHours\n    courseCondition\n    genEdType\n    rating\n    midterm {\n      date\n      period {\n        start\n        end\n        __typename\n      }\n      __typename\n    }\n    final {\n      date\n      period {\n        start\n        end\n        __typename\n      }\n      __typename\n    }\n    sections {\n      sectionNo\n      closed\n      capacity {\n        current\n        max\n        __typename\n      }\n      note\n      classes {\n        type\n        dayOfWeek\n        period {\n          start\n          end\n          __typename\n        }\n        room\n        building\n        teachers\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}"
    }, {
      cancelToken: source.token
    }), cancel: () => source.cancel()
  }
}

const buildScheduleData = (schedule) => {
  console.log("schedule", schedule)
  const scheduleFull = []
  const day = ["MON", "TUE", "WED", "THU", "FRI"]
  for (let d of day) {
    let slots = []
    let space = 0
    const inThisDay = schedule.filter(({ day }) => day == d)
    for (let i = 7; i <= 18.5; i += 0.5) {
      const findWithStart = inThisDay.filter(d => d.start == i)
      if (findWithStart.length > 0) {
        const merged = findWithStart.reduce((acc, cur) => {
          const { sec, ...withOutSec } = cur
          return ({
            ...withOutSec,
            sec: [...acc.sec, cur.sec],
          })
        }, { sec: [] })
        console.log("merged", merged)
        if (String(i).includes('.5')) {
          space -= 0.5
          slots.pop()
          slots.push({ span: 0.5, data: { sec: [] } })
        }
        slots.push({ span: merged.hour, data: { ...merged } })
        space = merged.hour - 1
      } else {
        if (space <= 0) {
          if (!String(i).includes(".")) {
            slots.push({ span: 1, data: { sec: [] } })
          }
        } else {
          if (String(space).includes(".5") && !(String(slots[slots.length - 2].span).includes(".5") && slots[slots.length - 2].data.sec.length == 0)) {
            space += 0.5
            slots.push({ span: 0.5, data: { sec: [] } })
          }
          else if (!String(i).includes(".")) {
            space -= 1
          }

        }
      }
    }
    scheduleFull.push(slots)
  }
  return scheduleFull
}

const ModeButton = ({ text, l }) => <button className={`outline-none hover:opacity-75 ${l ? 'rounded-l-xl' : 'rounded-r-xl'} w-full bg-gradient-to-l from-[#FF6E5A] to-[#FFB27A]`}>
  {text}
</button>
const Filter = ({ open }) => {
  const ref = useRef()
  const [h, setH] = useState(0)
  useEffect(() => {
    setH(ref.current.offsetHeight)
  }, [ref.current, open])
  const CheckBox = ({ name }) =>
    <div className="flex items-center font-thin">
      <input className="mr-1" type="checkbox" />
      <label>
        {name}
      </label>
    </div>
  return (
    <div style={{ height: open ? h : 0, display: open ? 'block' : 'none' }} className="right-0 w-32 mt-12 absolute overflow-hidden transition-all">
      <div ref={ref} className="glass rounded-lg p-2">
        <div >หมวดหมู่</div>
        <CheckBox name="วิทย์"></CheckBox>
        <CheckBox name="test"></CheckBox>
        <CheckBox name="วิทwย์"></CheckBox>
      </div>
    </div>)
}


const Time = ({ children }) => <div className="col-span-2 font-thin p-2 glass w-full">{children}</div>
const ScheduleTopBar = () => <>
  <Time></Time>
  <Time></Time>
  <Time>8</Time>
  <Time>9</Time>
  <Time>10</Time>
  <Time>11</Time>
  <Time>12</Time>
  <Time>13</Time>
  <Time>14</Time>
  <Time>15</Time>
  <Time>16</Time>
  <Time>17</Time>
  <Time>18</Time></>

const Slot = ({ dropable, children, className, span, sec = [], updateHover = () => { }, overlap, onDrop = () => { } }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: dragType.SUBJECT,
      drop: (e) => onDrop(),
      collect: (monitor) => ({
        isOver: monitor.isOver()
      })
    })
  )

  if (isOver) {
    updateHover(sec)
  }

  return (
    <div ref={drop} style={{
      gridColumn: span ? `span ${span * 2}` : `span 2`,
    }} className={`min-h-[65px] p-2 border-t border-[#FF7F6E] ${overlap ? "" : 'glass'} w-full ${className} `}>
      {children}
    </div>)
}
const findOverlap = (a, b) => {
  for (let i of a) {
    for (let j of b) {
      if (i == j) {
        return true
      }
    }
  }
  return false
}
const SlotContent = ({ d, hover, onDrop, updateHover }) => {
  const [hovering, setHovering] = useState(false)
  useEffect(() => {
    onDrop(d)
  }, [hovering])
  // const drop = useCallback(() => { onDrop(hover) }, [hover])
  if ((d.data.type ?? "").includes('SHOW')) {
    console.log("hover", hover, d.data.sec, findOverlap(hover, d.data.sec))
    return (
      <Slot dropable={true} onDrop={() => setHovering(!hovering)} className={`border-2 border-t-2 border-dashed border-white`} sec={d.data.sec} overlap={findOverlap(hover, d.data.sec)} updateHover={updateHover} span={d.span}>
        เซค
        <p className="font-thin">{d.data.sec.join(' , ')}</p>
      </Slot>
    )
  } else {
    return (
      <Slot onDrop={() => setHovering(!hovering)} className={` ${d.data.code ? "" : 'border-t-0'}`} span={d.span} >
        {
          d.data.code && <p className="font-thin">{d.data.code} | {d.data.credit}</p>
        }
        {d.data.name}
      </Slot>
    )
  }
}

const ScheduleRow = ({ day, slots = [], onDrop, updateHover, hover = [] }) => {
  return (
    <>
      <Slot className="text-xl border-none">{day}</Slot>
      {
        slots.map(d => <SlotContent d={d} onDrop={onDrop} updateHover={updateHover} hover={hover}></SlotContent>)
      }
    </>)
}

import { useDrag, useDrop } from 'react-dnd'

const DragAbleSchedule = ({ result, scheduleData, updateSchedule, setCurrentDrag, onDrop }) => {
  const Subject = ({ code, credit, name, data }) => {
    const subjectSections = JSON.parse(JSON.stringify(data)).sections.map(b => ({
      classes: b.classes.map(c => ({ code, credit, name, day: c.dayOfWeek, start: c.period.start, end: c.period.end, type: `SHOW_${c.type}` }))
    }))
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
      type: dragType.SUBJECT,
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }))

    useEffect(() => {
      if (isDragging) {
        setCurrentDrag(code)
        updateSchedule(buildScheduleData(transform(subjectSections)))
      }
    }, [isDragging])

    return (<div ref={drag}
      className={`cursor-move glass p-2 text-lg col-span-2 rounded-xl shadow-md`}>
      <>
        <div className="flex font-thin justify-between">
          <p>{code}</p>
          <p>{credit} หน่วยกิต</p>
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-l from-[#FF6E5A] to-[#ffb27a] text-3xl">
          {name}
        </div>
      </>

    </div>)
  }

  const [hover, setUpdateHover] = useState()

  return (<>
    <div className="transition-all col-span-7 h-48 overflow-auto grid gap-3 grid-cols-6">
      {
        result.map(({ abbrName, courseNo, credit, ...data }) => <Subject data={data} credit={credit} code={courseNo} name={abbrName}></Subject>)
      }
    </div>
    <div style={{
      gridTemplateColumns: `repeat(26, minmax(0, 1fr))`
    }} className="grid mt-5 absolute w-full bottom-0 pb-12">
      <ScheduleTopBar />
      <ScheduleRow onDrop={onDrop} hover={hover} updateHover={setUpdateHover} slots={scheduleData[0]} day="MON" />
      <ScheduleRow onDrop={onDrop} hover={hover} updateHover={setUpdateHover} slots={scheduleData[1]} day="TUE" />
      <ScheduleRow onDrop={onDrop} hover={hover} updateHover={setUpdateHover} slots={scheduleData[2]} day="WED" />
      <ScheduleRow onDrop={onDrop} hover={hover} updateHover={setUpdateHover} slots={scheduleData[3]} day="THU" />
      <ScheduleRow onDrop={onDrop} hover={hover} updateHover={setUpdateHover} slots={scheduleData[4]} day="FRI" />
    </div>
  </>)
}

const Search = () => {
  const [currentDrag, setCurrentDrag] = useState("")
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [scheduleData, setSchedule] = useState([[], [], [], [], []])
  const [keyword, setKeyword] = useState("")
  const [result, setResult] = useState([])
  useEffect(() => {
    if (keyword) {
      let cancelFunction = () => { }
      const timeout = setTimeout(async () => {
        const { data, cancel } = findSubject(keyword)
        cancelFunction = cancel
        const _data = await data
        console.log(_data?.data.data.search)
        setResult(_data?.data.data.search)
      }, 600)
      return () => {
        clearTimeout(timeout)
        cancelFunction()
      }
    }
  }, [keyword])

  const schedule = []
  const [studentSchedule, setStudentSchedule] = useState(schedule)

  useEffect(() => {
    setSchedule(buildScheduleData(studentSchedule))
  }, [studentSchedule])

  return (
    <div
      className="h-screen w-screen bg-cover overflow-scroll"
      style={{
        backgroundImage: "url(/background-pictures/schedule-background.svg)",
      }}
    >
      <div className="h-screen container max-w-5xl w-11/12 mx-auto pt-5 relative">
        <Navbar></Navbar>
        <div className="grid gap-3 grid-cols-6">
          <div className="col-span-2 text-4xl font-bold">
            ค้นหาวิชาเรียน
          </div>
          <div className="col-start-5 col-end-7 flex max-h-8 text-white text-xl font-normal">
            <ModeButton l text={'ลงทะเบียนเรียน'}></ModeButton>
            <ModeButton text={'ถอนรายวิชา'}></ModeButton>
          </div>
          <div className="col-span-7 flex">
            <TextField value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="ใส่รหัสวิชา / ชื่อวิชา" className="col-span-5 text-3xl flex-grow" inputClassName="font-thin border-[2px] "></TextField>
            <div onClick={() => setIsOpenFilter(!isOpenFilter)} className="w-10 ml-1 flex justify-center items-center outline-none text-lg px-2 py-1 bg-[#E7E7E74D] border-[#767676] border-[2px] rounded-xl font-thin h-10">
              <Image width={30} height={30} src="/icons/filter.svg"></Image>
            </div>
            <div className="w-10 ml-1 flex justify-center items-center outline-none text-lg px-2 py-1 bg-[#E7E7E74D] border-[#767676] border-[2px] rounded-xl font-thin h-10">
              <Image width={30} height={30} src="/icons/calendar.svg"></Image>
            </div>
            <Filter open={isOpenFilter}> </Filter>

          </div>
        </div>
        <DndProvider backend={HTML5Backend}>
          <DragAbleSchedule onDrop={(data) => {
            if (data.data.sec.length > 0) {
              console.log("merge into schedule", { ...data.data, type: "LECT" })
              setStudentSchedule([...studentSchedule, { ...data.data, type: "LECT" }])
            }
          }} setCurrentDrag={setCurrentDrag} updateSchedule={(s) => setSchedule(s)} result={result} scheduleData={scheduleData} />
        </DndProvider>
      </div>
    </div>
  );
};

export default Search;
