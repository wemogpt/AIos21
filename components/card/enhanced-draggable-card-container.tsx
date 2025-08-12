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
  DragOverlay,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { cn } from "@/lib/utils"

interface DraggableCardProps {
  id: string
  children: React.ReactNode
  className?: string
}

function DraggableCard({ id, children, className }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "relative cursor-grab active:cursor-grabbing transition-all duration-200",
        isDragging && "shadow-2xl scale-105",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface EnhancedDraggableCardContainerProps {
  items: Array<{
    id: string
    content: React.ReactNode
  }>
  onReorder?: (newOrder: string[]) => void
  className?: string
  layout?: "vertical" | "grid"
  disabled?: boolean
  gridCols?: number
}

export function EnhancedDraggableCardContainer({
  items,
  onReorder,
  className = "space-y-4",
  layout = "vertical",
  disabled = false,
  gridCols = 3,
}: EnhancedDraggableCardContainerProps) {
  const [cardItems, setCardItems] = React.useState(items)
  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  React.useEffect(() => {
    setCardItems(items)
  }, [items])

  function handleDragStart(event: any) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    if (over && active.id !== over.id) {
      const oldIndex = cardItems.findIndex((item) => item.id === active.id)
      const newIndex = cardItems.findIndex((item) => item.id === over.id)

      const newItems = arrayMove(cardItems, oldIndex, newIndex)
      setCardItems(newItems)

      // 通知父组件新的排序
      onReorder?.(newItems.map((item) => item.id))
    }
  }

  const strategy = layout === "grid" ? rectSortingStrategy : verticalListSortingStrategy

  const containerClassName =
    layout === "grid" ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-6` : className

  const activeItem = cardItems.find((item) => item.id === activeId)

  if (disabled) {
    return (
      <div className={containerClassName}>
        {cardItems.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={cardItems.map((item) => item.id)} strategy={strategy}>
        <div className={containerClassName}>
          {cardItems.map((item) => (
            <DraggableCard key={item.id} id={item.id} className="transition-all duration-200">
              {item.content}
            </DraggableCard>
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeItem ? <div className="transform rotate-3 shadow-2xl">{activeItem.content}</div> : null}
      </DragOverlay>
    </DndContext>
  )
}
