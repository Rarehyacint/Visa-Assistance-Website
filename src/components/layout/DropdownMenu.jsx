import React from 'react';
import { Plane, GraduationCap, Laptop, Users, Home, MapPin, Globe, ChevronRight } from 'lucide-react';

const visaIcons = {
  'tourist-visa': Plane,
  'student-visa': GraduationCap,
  'digital-nomad': Laptop,
  'family-reunification': Users,
  'retirement-visa': Home
};

export default function DropdownMenu({ type, items, onSelect, onClose }) {
  return (
    <div className="figma-dropdown-card animate-pop-in" onMouseLeave={onClose}>
      <div className="figma-dropdown-list">
        {type === 'visas' && items.map((item) => {
          const Icon = visaIcons[item.id] || Plane;
          return (
            <button
              key={item.id}
              className="figma-dropdown-item"
              onClick={() => {
                onSelect('visa', item.id);
                onClose();
              }}
            >
              <span className="dropdown-item-text">{item.title}</span>
            </button>
          );
        })}

        {type === 'destinations' && items.map((item) => (
          <button
            key={item.id}
            className="figma-dropdown-item"
            onClick={() => {
              onSelect('destination', item.id);
              onClose();
            }}
          >
            <span className="dropdown-item-text">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
