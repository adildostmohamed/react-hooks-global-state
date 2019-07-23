import React, { useContext } from 'react';
import { StoreContext } from 'context';

const Home = () => {
  const {
    state,
    actions: { todosActions, booksActions }
  } = useContext(StoreContext);

  const handleAddTodo = () => {
    return todosActions.addTodo({
      id: Math.floor(Math.random() * Math.floor(100)),
      title: 'New todo to do!',
      completed: false
    });
  };

  const handleToggleTodo = todoId => {
    return todosActions.toggleTodo(todoId);
  };

  const handleAddBook = () => {
    return booksActions.addBook({
      id: Math.floor(Math.random() * Math.floor(100)),
      title: 'New book to read!',
      author: 'James Blunt',
      read: false
    });
  };

  const handleBookTodo = todoId => {
    return booksActions.toggleBook(todoId);
  };
  return (
    <div>
      <section>
        <h2>My todo list</h2>
        <ul>
          {state.todos.todos.map(todo => {
            return (
              <li key={todo.id}>
                {todo.title}{' '}
                {todo.completed ? (
                  <span role="img" aria-label="done checkmark">
                    {' '}
                    - ✅
                  </span>
                ) : null}
                <button onClick={() => handleToggleTodo(todo.id)}>Done?</button>
              </li>
            );
          })}
        </ul>
      </section>
      <button onClick={handleAddTodo}>Add new todo</button>
      <section>
        <h2>My book list</h2>
        <ul>
          {state.books.books.map(book => {
            return (
              <li key={book.id}>
                {book.title} - {book.author}{' '}
                {book.read ? (
                  <span role="img" aria-label="done checkmark">
                    {' '}
                    - ✅
                  </span>
                ) : null}
                <button onClick={() => handleBookTodo(book.id)}>Done?</button>
              </li>
            );
          })}
        </ul>
        <button onClick={handleAddBook}>Add new book</button>
      </section>
    </div>
  );
};

export default Home;
