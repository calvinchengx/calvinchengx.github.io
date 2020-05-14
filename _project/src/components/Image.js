const Image = ({ image }) => {
  console.log('image:', image)
  if (image === undefined) {
    return <></>
  }
  return (
    <div className="hero_image">
      <img src={image} alt={image} />
    </div>
  )
}
export default Image
