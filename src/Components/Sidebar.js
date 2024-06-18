import React, { useState } from 'react'

 function Sidebar() {
    const [selecteditems,setSelectedItems]=useState(null)
    const handleItemClick=(items)=>{
        setSelectedItems(items)
    }
    const menuItems = [
    { id: 1, label: 'Name',className:'Name' },
    { id: 2, label: 'Home' },
    { id: 3, label: 'Section 1' },
    { id: 4, label: 'Section 2' },
    { id: 5, label: 'Section 8' },
    { id: 6, label: 'Section 8' },

  ];
  return (
    <div className='sidebar-menu'>
        <h1>Lorem Ipsum is simply dummy text of the printing</h1>
        <hl/>
        {menuItems.map((items)=>(
            <div key={items.id}className={`menu-item ${selecteditems === items ? 'selected' : ''}`}
          onClick={() => handleItemClick(items)}>
            {items.label}
    </div>

        ))

        }
    </div>
  )
}
export default Sidebar
