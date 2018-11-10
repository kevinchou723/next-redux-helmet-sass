export default ({ exampleText, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='exampleText'/>
        <button type='submit'>update text</button>
      </form>
      <p>{exampleText}</p>
    </div>
  )
}
