import React from 'react';
import SidebarItems from './SidebarItems';
import items from './constant.js';

export default function Sidebar() {
  return (
<div className="sidebar">
          { items.map((item, index) => <SidebarItems  key={index} item={item} />) }
        </div>
  )
};
