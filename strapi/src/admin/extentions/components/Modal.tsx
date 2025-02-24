import { useState, useEffect } from 'react';
import { Cross, ArrowLeft, ArrowRight, Loader } from '@strapi/icons';

import './CommentModal.css';

type Comment = {
  id: string;
  content: string;
  user: { name: string};
  post?: any;
  createdAt: string;
}

type CommentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  comments?: Comment[];
  loading?: boolean;
}

const CommentModal = ({
  isOpen,
  onClose,
  comments,
  currentPage,
  totalPages,
  onPageChange,
  loading = false
}: CommentModalProps) => {
  const [localPage, setLocalPage] = useState(currentPage);

  useEffect(() => {
    setLocalPage(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (localPage > 1) {
      const newPage = localPage - 1;
      setLocalPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (localPage < totalPages) {
      const newPage = localPage + 1;
      setLocalPage(newPage);
      onPageChange(newPage);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Comentários</h2>
          <button 
            onClick={onClose} 
            aria-label="Fechar modal"
            className="icon-button"
          >
            <Cross width={24} height={24} />
          </button>
        </div>

        <div className="modal-body">
          {loading ? (
            <div className="loading-container">
              <Loader width={40} height={40} className="spinner" />
            </div>
          ) : (
            <div className="comments-list">
              {
              comments && comments.length > 0 ?
              comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <span className="author-name">{comment.user.name}</span>
                    <span className="comment-date">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="comment-text">{comment.content}</p>
                </div>
              ))
             : <p className="comment-text">O post ainda não tem comentários</p>
            }
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="pagination-controls">
            <button 
              onClick={handlePrevious}
              disabled={localPage === 1 || loading}
              className="pagination-button"
            >
              <ArrowLeft width={16} height={16} />
              Anterior
            </button>
            
            <span className="page-indicator">
              Página {localPage} de {totalPages}
            </span>

            <button 
              onClick={handleNext}
              disabled={localPage === totalPages || loading}
              className="pagination-button"
            >
              Próxima
              <ArrowRight width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;