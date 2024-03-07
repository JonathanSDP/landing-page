import "./ModalForm.css";

const ModalForm = ({children,isOpen,closeModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>X</button>
            {children}
        </div>


    </article>
  )
}

export default ModalForm