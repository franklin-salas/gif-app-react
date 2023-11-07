import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onChangeValue = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length == 0) return;
        onNewCategory(inputValue.trim())
        setInputValue('');

    }


    return (
        <form action="" onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onChangeValue(event)} />
        </form>
    )
}
