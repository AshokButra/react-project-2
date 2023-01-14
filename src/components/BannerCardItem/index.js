import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {id, headerText, description, className} = cardDetails

  return (
    <>
      <div className={className}>
        <div>
          <h1 className="card-heading">{headerText}</h1>
          <p className="card-description">{description}</p>
          <button className="button">Know More</button>
        </div>
      </div>
    </>
  )
}

export default BannerCardItem
