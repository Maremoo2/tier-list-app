import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: '1', name: 'Event 1' },
    { id: '2', name: 'Event 2' },
    { id: '3', name: 'Event 3' },
  ]);

  const tiers = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);

    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Tier List</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="tier-container">
          {tiers.map((tier) => (
            <Droppable key={tier} droppableId={tier}>
              {(provided) => (
                <div
                  className="tier-row"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2>{tier}</h2>
                  <div className="tier-content">
                    {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="event-card"
                          >
                            {item.name}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
