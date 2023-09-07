import './index.css'

const CountryFlag = props => {
  const {flag, onClickRemoveButton} = props
  const {imageUrl, id, name} = flag

  const onClickRemove = () => {
    onClickRemoveButton(id)
  }
  return (
    <li className="flag-container">
      <img src={imageUrl} alt="thumbnail" />
      <div>
        <p>{name}</p>

        <button type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryFlag
