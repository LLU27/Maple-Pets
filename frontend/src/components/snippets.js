//****** handleChange ********//
const [note, setNote] = useState({
  title: '',
  content: '',
})

function handleChange(event) {
  const { name, value } = event.target // name of element that triggered, user insert new value

  setNote(prevNote => {
    return {
      ...prevNote, //shallow copy of prev state, does not mutate original
      [name]: value, //update property of the state that matches "name" extracted from input field with new value
    }
  })
}

return (
  <div>
    <form>
      <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />
      <textarea name='content' onChange={handleChange} value={note.content} placeholder='Take a note...' rows='3' />
      <button onClick={submitNote}>Add</button>
    </form>
  </div>
)
