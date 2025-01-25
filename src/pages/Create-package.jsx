import { useEffect, useState } from 'react';
import Column from '../components/Column'; // Assuming Column is your Column component
import { DragDropContext } from 'react-beautiful-dnd';
import MyNavbar from '../components/MyNavbar';
import FixexPaddingforNavbar from '../components/sub-components/FixexPaddingforNavbar';
import { useSelector } from 'react-redux';
import FooterOther from '../components/FooterOther';

function Createpackage() {
  const initialColumns = {
    todo: {
      id: 'todo',
      title:"List of services",
      list: [
        { id:"1",text: 'Speaking', img: 'assets/images/speaking-icon.png', price: 100,aveRatings:4.2,photo:"https://production-ieltsx.sgp1.digitaloceanspaces.com/1669096977015-image__1__360.png",ratingNumber:"1" },
        { id:"2",text: 'Reading', img: 'assets/images/reading-icon.png', price: 300,aveRatings:3.5,photo:"https://production-ieltsx.sgp1.digitaloceanspaces.com/1669096977015-image__1__360.png",ratingNumber:"1" },
        { id:"3",text: 'Listening', img: 'assets/images/listening-icon.png', price: 500,aveRatings:5,photo:"https://production-ieltsx.sgp1.digitaloceanspaces.com/1669096977015-image__1__360.png",ratingNumber:"1" },
        { id:"4",text: 'Writing', img: 'assets/images/writing-icon.png', price: 100,aveRatings:5,photo:"https://production-ieltsx.sgp1.digitaloceanspaces.com/1669096977015-image__1__360.png",ratingNumber:"1" }
      ]
    },
    doing: {
      id: 'doing',
      title:"Your Format",
      list: [],
    }
  };

  const [columns, setColumns] = useState(initialColumns);

  useEffect(()=>{
    console.log(columns)
  },[columns])

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (!destination) return;

    // Make sure we're actually moving the item
    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    if (start === end) {
      const newList = Array.from(start.list);
      const [movedItem] = newList.splice(source.index, 1);
      newList.splice(destination.index, 0, movedItem);

      const newCol = { ...start, list: newList };
      setColumns((prevColumns) => ({
        ...prevColumns,
        [newCol.id]: newCol,
      }));
    } else {
      const newStartList = Array.from(start.list);
      const [movedItem] = newStartList.splice(source.index, 1);

      const newEndList = Array.from(end.list);
      newEndList.splice(destination.index, 0, movedItem);

      const newStartCol = { ...start, list: newStartList };
      const newEndCol = { ...end, list: newEndList };

      setColumns((prevColumns) => ({
        ...prevColumns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
    }
  };
  const [packagedata, setPackagedata] = useState({
    packageName: "",
    courseType: "IELTS general",
  });
  const handleChange = (e) => {
    
    const { id, value } = e.target;
   
    setPackagedata((prev) => ({
      ...prev,
      [id]: value, 
    }));
  };
  const createpackerr = useSelector(state=>state.example.createpackerr)
  
  return (
   <>
   <MyNavbar/>
   <FixexPaddingforNavbar>
   <div className="container">
   <h4 className="font-sora text-[24px] font-bold px-4 py-6">Create Package</h4>
       
   <div className="flex m-4 items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      {/* Package Name Input */}
      <div className="flex-1">
        <label htmlFor="packageName" className="block text-sm font-medium text-gray-700 mb-1">
          Package name
        </label>
        <input
          type="text"
          id="packageName"
          placeholder="Enter package name"
          value={packagedata.packageName}
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
        {
          createpackerr && <p className='text-[#dc3545] text-[10px] font-sora'>Enter Package Name</p>
        }
      </div>

      {/* Course Type Dropdown */}
      <div className="flex-1">
        <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">
          Course type
        </label>
        <select
          id="courseType"
          value={packagedata.courseType}
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none"
        >
          <option value="IELTS general">IELTS general</option>
          <option value="IELTS academic">IELTS academic</option>
        </select>
      </div>
    </div>
     <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-2 gap-4 p-4">
        {Object.values(columns).map((col) => (
          <div key={col.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-3xl font-sora font-semibold px-2  mb-4">{col.title.toUpperCase()}</h2>
            <Column col={col} packagedata={packagedata}/>
          </div>
        ))}
      </div>
    </DragDropContext>
   </div>
   <FooterOther/>
   </FixexPaddingforNavbar>
   </>
  );
}

export default Createpackage;
