import { useState, useEffect } from 'react';

import { Button } from '@strapi/design-system';
import { Message } from '@strapi/icons';

import CommentModal from '../CommentModal';
import { CommentType } from '../../helpers/types';

type CommentsButtonProps = {
  initialComments: CommentType[];
  loading: boolean;
};

const CommentsButton = ({ initialComments, loading }: CommentsButtonProps) => {
  const itemsPerPage = 5;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Button 
        onClick={() => setIsModalOpen(true)} 
        fullWidth={true} 
        startIcon={<Message/>}
      >
        View Comments
      </Button>
      <CommentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        comments={comments}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={loading}
      />
    </>
  );
};

export default CommentsButton;