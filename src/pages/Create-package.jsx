import { useEffect, useState } from 'react';
import Column from '../components/Column'; // Assuming Column is your Column component
import { DragDropContext } from 'react-beautiful-dnd';

function Createpackage() {
  const initialColumns = {
    todo: {
      id: 'todo',
      title:"List of services",
      list: [
        { id:"1",text: 'Speaking', img: 'assets/images/speaking-icon.png', price: 100 },
        { id:"2",text: 'Reading', img: 'assets/images/reading-icon.png', price: 300 },
        { id:"3",text: 'Listening', img: 'assets/images/listening-icon.png', price: 500 },
        { id:"4",text: 'Writing', img: 'assets/images/writing-icon.png', price: 100 }
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

  return (
   <div className="container">
     <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-2 gap-4 p-8">
        {Object.values(columns).map((col) => (
          <div key={col.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-3xl font-sora font-semibold px-2  mb-4">{col.title.toUpperCase()}</h2>
            <Column col={col} />
          </div>
        ))}
      </div>
    </DragDropContext>
   </div>
  );
}

export default Createpackage;
