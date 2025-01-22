/* eslint-disable react/prop-types */
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item'; // Assuming Item is your Item component

const Column = ({ col }) => {
  return (
    <Droppable droppableId={col.id}>
      {(provided,snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`p-4 bg-red-500 h-[500px] rounded-lg ${
            snapshot.isDraggingOver ? 'bg-blue-300' : 'bg-red-500'
          }`}
        >
          {col.list.map((item,index) => (
            <Item key={item.id} item={item} index={index} /> 
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
