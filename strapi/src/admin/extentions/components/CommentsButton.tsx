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

const CommentsButton = () => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [comments, setComments] = useState<Comment[]>(CommentsMOCK);
  const [loading, setLoading] = useState(false);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    return (
        <>
            <Button onClick={() => setIsModalOpen(true)} fullWidth={true} startIcon={<Message/>}>
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