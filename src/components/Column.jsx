/* eslint-disable react/prop-types */
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item'; // Assuming Item is your Item component

const Column = ({ col }) => {
  return (
    <>
    <Droppable droppableId={col.id}>
      {(provided,snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={` p-2.5 h-[400px] rounded-lg ${
            snapshot.isDraggingOver ? 'bg-gray-200' : 'bg-red-500'
          }`}
        >
          {col.list.map((item,index) => (
            <Item key={item.id} item={item} index={index} /> 
          ))}
          {provided.placeholder}
        </div>
      )}
       {/* {
      col.id=="doing" && col.list.length==0 ? 
      <img className="w-full" src="assets/images/empty-format.png" />
      :""
    } */}
    </Droppable>
    {
      col.id=="todo" && <img className="w-full" src="assets/images/xam-small-card.png" />
    }
   
    </>
  );
};

export default Column;
