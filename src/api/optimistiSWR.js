export const addTodoOptions = ( newTodo) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (todos) => [...todos, newTodo]
            .sort((a, b) => b.id - a.id),
        rollbackOnError: true,
        populateCache: true,
        revalidate: false
    }
}

export const updateTodoOptions = (newTodo) => {
    return {
        optimisticData: (todos) => {
            const prevTodo = todos.filter(td => td.id !== newTodo.id)
            return [...prevTodo , newTodo].sort((a,b)=> b.id - a.id);
        },
        rollbackOnError: true,
        populateCache: true,
        revalidate: true
    }
}