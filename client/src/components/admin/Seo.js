import { Link } from "react-router-dom";
import React from 'react'

const Seo = () => {
  return (
   <div >
     <h6 className="p-3" >SEO Setting</h6>
      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea  className="w-75 h-75 p-1 text-wrap border" 
          type="text"
          rows={10}
          placeholder="lggjhdPassw jhhdjfhfhjhf ordlggjhdPasswPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ord"
        />
      </div>
      <hr className="m-3" />
      <div className="m-3">
        <Link to="#">
          <button
            style={{
              marginRight: "50px",
              backgroundColor: "#3B3998",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom:"40px",
            }}
          >
            Save
          </button>
        </Link>
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "#DB2C2C",
            border: "none",
            borderRadius: "5px",
            padding: 10,
            color: "#fff",
            width: "100px",
              marginBottom:"40px",
              fontSize: 16, 
          }}
        >
          Cancel
        </button>
      </div>
   </div>
   
  )
}

export default Seo