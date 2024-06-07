export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = (index) => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )

}