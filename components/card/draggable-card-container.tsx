"use client"

import React from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface DraggableCardProps {
  id: string
  children: React.ReactNode
}

function DraggableCard({ id, children }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
      {children}
    </div>
  )
}

interface DraggableCardContainerProps {
  items: Array<{
    id: string
    content: React.ReactNode
  }>
  onReorder?: (newOrder: string[]) => void
  className?: string
}

export function DraggableCardContainer({ items, onReorder, className = "space-y-4" }: DraggableCardContainerProps) {
  const [cardItems, setCardItems] = React.useState(items)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  React.useEffect(() => {
    setCardItems(items)
  }, [items])

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = cardItems.findIndex((item) => item.id === active.id)
      const newIndex = cardItems.findIndex((item) => item.id === over.id)

      const newItems = arrayMove(cardItems, oldIndex, newIndex)
      setCardItems(newItems)

      // 通知父组件新的排序
      onReorder?.(newItems.map((item) => item.id))
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={cardItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        <div className={className}>
          {cardItems.map((item) => (
            <DraggableCard key={item.id} id={item.id}>
              {item.content}
            </DraggableCard>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
