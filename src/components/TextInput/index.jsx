import './styles.css'

export const TextInput = ({ searchValue, handleChange, placeholder }) => {
    return (
        <input
            className='text-input'
            type="search"
            onChange={handleChange}
            value={searchValue}
            placeholder={placeholder}
        ></input>
    )
}