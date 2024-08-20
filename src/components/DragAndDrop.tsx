import { data } from "../assets"
import { useDragAndDrop } from "../hooks/useDragAndDrop"
import { Status } from "../interfaces"
import { ContainerCards } from "./ContainerCards"


const typesTasks: Status[] = ['ongoing', 'pending', 'completed']


export const DragAndDrop = () => {
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

    return (
        <div className="grid">
            {
                typesTasks.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}