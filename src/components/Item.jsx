/* eslint-disable react/prop-types */

import { Draggable } from 'react-beautiful-dnd';

const Item = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
        ref={provided.innerRef} // Attach the provided ref correctly
        {...provided.draggableProps} // Spread draggableProps for drag functionality
        {...provided.dragHandleProps} // Spread dragHandleProps for the drag handle
        className={`bg-white h-[72px] flex items-center justify-between select-none border border-[rgba(224, 224, 224, 0.502)] rounded-md p-2 mt-2 transition-all 
          ${snapshot.isDragging ? 'shadow-lg transform scale-105' : 'hover:bg-gray-50'}`}
        style={{
          ...provided.draggableProps.style, // Preserve default styles from react-beautiful-dnd
          transition: snapshot.isDragging ? 'transform 0.2s ease' : undefined, // Smooth transition while dragging
        }}
        >
           
          
            <div className="leftitem flex items-center gap-3">
              <img className="w-5 h-5" src="assets/images/menu.png" alt="menu" />
              <img className="w-7 h-7" src={item.img} alt="item" />
              <p className="font-sora text-lg font-semibold">{item.text}</p>
            </div>
            <div className="rightitem">
              <p className="font-sora text-lg font-semibold">{item.price} Tk</p>
            </div>
       
        </div>
      )}
    </Draggable>
  );
};

export default Item;
