import Swal from "sweetalert2"
import store from "../../redux/store/store"
import { EditTodo } from "../../redux/state/Todo/TodoSlice"

const TodoEditAlert = (index, item) => {
    Swal.fire({
        title: "Title alert",
        input: "text",
        inputValue: item,
        inputValidator: (value) => {
            if (value) {
                store.dispatch(EditTodo({ index: index, task: value }))
            }
        }
    })
}

export default TodoEditAlert