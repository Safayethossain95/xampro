/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item"; // Assuming Item is your Item component

import { useEffect, useState } from "react";
import { addtomypackage, packerror } from "../store/exampleSlice";
import { dispatch } from './../../node_modules/react-hot-toast/src/core/store';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Column = ({ col,packagedata }) => {
   // Example package name
const dispatch=useDispatch()
const navigate = useNavigate()
// Add packageName to each entry
const [pkg,setpkg] = useState([])
const [totalprice,setTotalprice] = useState(0)
useEffect(() => {
  if (col.id === "doing") {
    console.log(col.list);

    // Assuming `packagedata` is a valid object in scope with a `packageName` property
    const totalP = col.list.reduce((sum, item) => sum + (item.price || 0), 0);
    setTotalprice(totalP)
    const updatedData = col.list.map((item) => ({
      ...item,
      packageName: packagedata.packageName +" " +"(" + item.text + ")", // Add the packageName property correctly
    }));

    setpkg(updatedData); // Check the updated data
  }
}, [col.id, col.list, packagedata]);
  const handlepkg = ()=>{

  }

  const handle=()=>{
    if(packagedata?.packageName==""){

      dispatch(packerror())
    }else{

      dispatch(addtomypackage(pkg));
      navigate("/package")
    }
  }
  return (
    <>
      <Droppable droppableId={col.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={` p-2.5 h-[400px] rounded-lg ${
              snapshot.isDraggingOver ? "bg-gray-200" : "bg-white"
            }`}
          >
            {col.list.length > 0 ? (
              col.list.map((item, index) => (
                <Item key={item.id} item={item} index={index} />
              ))
            ) : (
              // Render image if the list is empty
              <div className="flex items-center justify-center h-full">
                <img
                  className="w-full max-w-[150px] object-contain"
                  src="assets/images/create-pacakge-placeholder.png"
                  alt="Empty"
                />
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
        {/* {
      col.id=="doing" && col.list.length==0 ? 
      <img className="w-full" src="assets/images/empty-format.png" />
      :""
    } */}
      </Droppable>
      {col.id == "todo" && (
        <img className="w-full" src="assets/images/xam-small-card.png" />
      )}
      {col.id == "doing" && (
        <div className="totaldiv pt-[20px] pb-[50px] border-t border-[#E1E1E1]">
          <div className="priceintk ">
            <div className="div flex justify-between items-center">
              <div className="left">
                <p className="font-sora text-[#253642] text-[24px] font-semibold">
                  Total price
                </p>
              </div>
              <div className="right">
                <p className="font-sora text-[#253642] text-[24px] font-semibold">
                {totalprice} Tk
                </p>
              </div>
            </div>

            <div className="buttons mt-8 gap-5 grid grid-cols-2">
              <button className="bg-[rgba(0,82,204,0.1)] text-[#253642] px-4 py-2 rounded-md font-medium">
                Save Draft
              </button>
              <button onClick={handle}  className="bg-[#74788D] text-[#fffC]  px-4 py-2 rounded-md font-sora">
                Create Package
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Column;
