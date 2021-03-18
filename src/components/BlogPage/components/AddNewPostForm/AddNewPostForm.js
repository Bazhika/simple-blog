import './AddNewPostForm.css';
import closeIcon from '../../../../assets/images/close.svg'

export const AddNewPostForm = ({
  handleFormClose,
  addNewPost
}) => {

  const handleSubmit = e => e.preventDefault()

  const obj = {
    id: 4,
    title: 'Post 4',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, fugiat harum. Voluptatibus beatae corrupti nulla, qui odit mollitia doloremque rerum magni rem aut laborum, maiores officiis laboriosam hic. Ratione, voluptas?',
    likeCount: 0
  }

  return (
    <form onSubmit={handleSubmit} action="" className="addForm">
      <img src={closeIcon} alt="Close" onClick={handleFormClose} />
      <h2>Добавление нового поста</h2>
      <div>
        <input type="text" name="title" placeholder="Заголовок" />
      </div>
      <div>
        <textarea
          type="text"
          name="description"
          placeholder="Введите описание"
        />
      </div>
      <div>
        <button onClick={()=>addNewPost(obj)} className="blackBtn" type="button">
          Добавить
        </button>
      </div>
    </form>
  );
};
