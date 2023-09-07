import './index.css'

const FlagItem = props => {
  const {item, onClickVisit} = props
  const {name, id, isVisited} = item

  const onClickVisitButton = () => {
    onClickVisit(id)
  }

  return (
    <li className="country">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onClickVisitButton}>
          Visit
        </button>
      )}
    </li>
  )
}

export default FlagItem
