import { useState, useRef, useEffect, Children, cloneElement } from 'react'
import './Tags.css'
import { AiFillCloseCircle } from 'react-icons/ai'
function Tags({ tags, setTags, children }) {
  const [currentValue, setCurrentValue] = useState('')
  //   const [tags, setTags] = useState([])
  const refTagsInput = useRef(null)

  function handleChange(event) {
    setCurrentValue(event.target.value)
  }

  useEffect(() => {
    refTagsInput.current.focus()
  }, [])

  function handleAddTag(event) {
    if (
      event.key === 'Enter' &&
      currentValue !== '' &&
      !tags.includes(event.target.value)
    ) {
      console.log(event.target.value)
      setTags([...tags, currentValue])
      setCurrentValue('')
    }
  }

  function handleDeleteTagKey(event) {
    if (event.key === 'Backspace' && currentValue === '') {
      setTags((oldTags) => oldTags.slice(0, tags.length - 1))
    }
  }

  function handleFoucs() {
    refTagsInput.current.focus()
  }

  function handleDeleteTag(tag) {
    setTags(tags.filter((_tag) => _tag !== tag))
  }
  const arr = Children.toArray(children)
  console.log(arr)
  console.log(children)
  return (
    <>
      <div className='wrapper' onClick={handleFoucs}>
        {tags.map((tag) => (
          <div className='tag' key={tag}>
            <span className='tag-content'> {tag}</span>
            <AiFillCloseCircle
              onClick={() => handleDeleteTag(tag)}
              className='tag-close'
            />
          </div>
        ))}

        <input
          ref={refTagsInput}
          className='tags-input'
          value={currentValue}
          onKeyPress={handleAddTag}
          onChange={handleChange}
          onKeyDown={handleDeleteTagKey}
          type='text'
        />

        <div className='delete-all'>
          <AiFillCloseCircle
            onClick={() => setTags([])}
            className='tag-close'
          />
        </div>
      </div>
    </>
  )
}

export default Tags
