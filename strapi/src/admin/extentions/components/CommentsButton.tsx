import { useState } from 'react';

import { Button } from '@strapi/design-system';
import { Message } from '@strapi/icons';

import CommentModal from './Modal';
import CommentsMOCK from '../mocks/comments';

type Comment = {
    id: string;
    content: string;
    user: { name: string};
    post?: any;
    createdAt: string;
}

const calculateTotalPages = (
    comments: Comment[],
    itemsPerPage: number
  ): number => {
    if (comments.length === 0) return 1;
    if(itemsPerPage <= 0) return 1;
    
    return Math.ceil(comments.length / itemsPerPage);
  };

  const CommentsButton = () => {
    const itemsPerPage = 5;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(calculateTotalPages(CommentsMOCK, itemsPerPage));
    const [loading, setLoading] = useState(false);
  
    // Calcula os comentários visíveis
    const getPaginatedComments = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return CommentsMOCK.slice(startIndex, endIndex);
    };
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      // Adicione aqui a lógica de fetch se necessário
    };
  
    return (
      <>
        <Button onClick={() => setIsModalOpen(true)} fullWidth={true} startIcon={<Message/>}>
          View Comments
        </Button>
        <CommentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          comments={getPaginatedComments()} // Comentários paginados
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </>
    );
  };

export default CommentsButton;